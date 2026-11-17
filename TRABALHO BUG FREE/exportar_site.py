# Monta os dados da pagina (pasta site/).
# A pagina e estatica: o Netlify so publica a pasta site/, quem roda o pipeline e o main.py.
# Toda vez que o main.py roda ele chama gerar(), e a pagina passa a mostrar o resultado novo.

import json
import shutil
from collections import Counter
from pathlib import Path

import pandas as pd

from normalizacao import motivos_de_exclusao
from schema import CAMPOS

CANAIS = {
    "whatsapp": ("WhatsApp", "texto livre ou template"),
    "email": ("E-mail", "tabela HTML"),
    "api": ("Portal / API", "webhook JSON"),
    "arquivo": ("Planilha legado", "CSV latin-1"),
    "pdf": ("Ordem de coleta", "PDF com tabela"),
}

# arquivos que a pagina oferece para baixar (copiados para site/arquivos/)
SAIDAS = [
    "base_final.csv",
    "descartes.csv",
    "curadoria_sem_match.csv",
    "01_brutos_no_schema.csv",
    "02_auditoria_cardinalidade.csv",
    "02_auditoria_formatos.csv",
    "03_calibracao_limiar.csv",
    "03_scores_fuzzy.csv",
    "relatorio.txt",
]
BRUTOS = [
    "whatsapp/conversa_exportada.txt",
    "email/email_01.html",
    "api/webhook_demandas.json",
    "planilha/fretes_legado.csv",
    "ordem_coleta/ordens_coleta.pdf",
]


def _valor(v):
    """NaN/NA do pandas vira None e numero do numpy vira numero normal (o json nao aceita)."""
    if v is None or isinstance(v, (str, dict, list)):
        return v
    if pd.isna(v):
        return None
    return v.item() if hasattr(v, "item") else v


def _registros(brutos, df_norm, base, clientes):
    """Um item por registro bruto: trecho original, como veio, como ficou e o destino dele."""
    motivos = motivos_de_exclusao(df_norm)
    razao = dict(zip(clientes["cliente_id"], clientes["razao_social"]))
    base_por_id = {r["id_demanda"]: r for r in base.to_dict("records")}

    registros = []
    for i, bruto in enumerate(brutos):
        limpo = {k: _valor(v) for k, v in df_norm.iloc[i].items() if k not in ("id_demanda", "canal")}
        item = {
            "id": bruto["id_demanda"],
            "canal": bruto["canal"],
            "trecho": bruto.get("trecho_original"),
            "bruto": {c: bruto[c] for c in CAMPOS[2:]},
            "limpo": limpo,
            "motivo": motivos[i],
            "vinculo": None,
        }
        if motivos[i] is None:
            b = base_por_id[bruto["id_demanda"]]
            cliente_id = _valor(b["cliente_id"])
            item["vinculo"] = {
                "cliente_id": cliente_id,
                "razao_social": razao.get(cliente_id),
                "metodo": b["metodo_vinculo"],
                "score": _valor(b["score_vinculo"]),
            }
        registros.append(item)
    return registros


def _copiar_arquivos(pasta_site, pasta_saida, pasta_raw):
    destino = pasta_site / "arquivos"
    (destino / "brutos").mkdir(parents=True, exist_ok=True)
    arquivos = []
    for nome in SAIDAS:
        shutil.copyfile(pasta_saida / nome, destino / nome)
        arquivos.append({"nome": nome, "caminho": f"arquivos/{nome}", "tipo": "saida"})
    for rel in BRUTOS:
        nome = Path(rel).name
        shutil.copyfile(pasta_raw / rel, destino / "brutos" / nome)
        arquivos.append({"nome": nome, "caminho": f"arquivos/brutos/{nome}", "tipo": "bruto"})
    return arquivos


def gerar(pasta_site, brutos, df_norm, base, clientes, card, fmts, calib, scores, limiar, pasta_saida, pasta_raw):
    pasta_site = Path(pasta_site)
    registros = _registros(brutos, df_norm, base, clientes)

    canais = []
    for canal, (nome, formato) in CANAIS.items():
        do_canal = [r for r in registros if r["canal"] == canal]
        canais.append({
            "canal": canal,
            "nome": nome,
            "formato": formato,
            "registros": len(do_canal),
            "descartados": sum(r["motivo"] is not None for r in do_canal),
            "base": sum(r["motivo"] is None for r in do_canal),
            "vinculados": sum(bool(r["vinculo"] and r["vinculo"]["cliente_id"]) for r in do_canal),
        })

    vinc = base["metodo_vinculo"].value_counts()
    motivos = Counter(r["motivo"] for r in registros if r["motivo"])
    dados = {
        "funil": {
            "brutos": len(registros),
            "descartados": sum(motivos.values()),
            "base": len(base),
            "vinculados": int(len(base) - vinc.get("SEM_MATCH", 0)),
        },
        "vinculo": {m: int(vinc.get(m, 0)) for m in ("CNPJ", "FUZZY", "SEM_MATCH")},
        "canais": canais,
        "cardinalidade": card.to_dict("records"),
        "formatos": fmts.to_dict("records"),
        "motivos": [{"motivo": m, "qtd": q} for m, q in motivos.most_common()],
        "limiar": limiar,
        "calibracao": calib.to_dict("records"),
        "scores": scores.to_dict("records"),
        "registros": registros,
        "arquivos": _copiar_arquivos(pasta_site, Path(pasta_saida), Path(pasta_raw)),
    }

    texto = json.dumps(dados, ensure_ascii=False, indent=1, default=lambda o: o.item() if hasattr(o, "item") else str(o))
    (pasta_site / "dados.js").write_text(
        "// gerado pelo main.py (exportar_site.py) - nao editar na mao\nwindow.DADOS = " + texto + ";\n",
        encoding="utf-8",
    )
    return dados
