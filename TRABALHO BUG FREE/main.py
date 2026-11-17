# Roda o pipeline inteiro: canais -> leitores -> auditoria -> limpeza -> CRM -> base final
# Uso: python main.py

from pathlib import Path

import pandas as pd

import auditoria
import crm
import exportar_site
import normalizacao
import parsers
from schema import CAMPOS

PASTA = Path(__file__).parent
SAIDA = PASTA / "output"


def pct(parte, total):
    return f"{100 * parte / total:.1f}%".replace(".", ",")


def main():
    SAIDA.mkdir(exist_ok=True)
    relatorio = []

    def log(texto=""):
        print(texto)
        relatorio.append(texto)

    # 01/02 - canais e leitores
    brutos = parsers.ler_todos()
    df_bruto = pd.DataFrame(brutos, columns=CAMPOS)
    log("== INGESTAO ==")
    for canal, qtd in df_bruto["canal"].value_counts(sort=False).items():
        log(f"  {canal:<10} {qtd:>4}")
    log(f"  {'total':<10} {len(df_bruto):>4} registros brutos")
    df_bruto.to_csv(SAIDA / "01_brutos_no_schema.csv", index=False)

    # 03 - auditoria (antes de corrigir)
    df_norm = normalizacao.normalizar(df_bruto)
    card = auditoria.cardinalidade(df_bruto, df_norm)
    fmts = auditoria.formatos(df_bruto)
    card.to_csv(SAIDA / "02_auditoria_cardinalidade.csv", index=False)
    fmts.to_csv(SAIDA / "02_auditoria_formatos.csv", index=False)
    auditoria.nulos_por_canal(df_bruto).to_csv(SAIDA / "02_auditoria_nulos_por_canal.csv")

    log("\n== AUDITORIA (antes da limpeza) ==")
    for r in card.itertuples():
        log(f"  {r.coluna:<11} {r.distintos:>3} distintos  x  {r.reais:>3} reais")
    for coluna in ["valor_frete", "peso", "cnpj"]:
        f = fmts[(fmts["coluna"] == coluna) & (fmts["formato"] != "ausente")]
        log(f"  {coluna:<11} {len(f)} formatos: " + " | ".join(f"{a} ({b})" for a, b in zip(f["formato"], f["qtd"])))
    repetidos = auditoria.ids_repetidos(df_bruto)
    log(f"  ids repetidos: {', '.join(repetidos.index) or 'nenhum'}")

    # 04 - limpeza e exclusao direcionada
    base, descartes = normalizacao.aplicar_exclusoes(df_norm)
    descartes.to_csv(SAIDA / "descartes.csv", index=False)
    log("\n== EXCLUSAO DIRECIONADA ==")
    for motivo, qtd in descartes["motivo"].value_counts().items():
        log(f"  {motivo:<36} {qtd:>3}")
    log(f"  {len(descartes)} de {len(df_bruto)} excluidos, todos com motivo em descartes.csv")
    log(f"  datas ambiguas (dd/mm ou mm/dd) mantidas e marcadas: {int(base['data_ambigua'].sum())}")

    # 05 - CRM
    clientes = crm.carregar_crm(PASTA / "crm" / "clientes.csv")
    base = crm.vincular(base, clientes)
    calib = crm.calibrar_limiar(base, clientes)
    calib.to_csv(SAIDA / "03_calibracao_limiar.csv", index=False)
    scores = crm.scores_sem_cnpj(base, clientes)
    scores.to_csv(SAIDA / "03_scores_fuzzy.csv", index=False)

    # 06 - base final
    base.to_csv(SAIDA / "base_final.csv", index=False)
    base[base["metodo_vinculo"] == "SEM_MATCH"].to_csv(SAIDA / "curadoria_sem_match.csv", index=False)

    vinc = base["metodo_vinculo"].value_counts()
    total = len(base)
    vinculados = total - vinc.get("SEM_MATCH", 0)
    log("\n== RESULTADO ==")
    log(f"  {len(df_bruto)} brutos -> {len(descartes)} descartados -> {total} base final -> {vinculados} vinculados ao CRM")
    log(f"  aproveitamento automatico: {pct(total, len(df_bruto))}")
    for metodo in ["CNPJ", "FUZZY", "SEM_MATCH"]:
        log(f"  {metodo:<10} {vinc.get(metodo, 0):>4}  {pct(vinc.get(metodo, 0), total):>6}")
    log(f"\n  calibracao do limiar (fuzzy, demandas sem CNPJ valido) - escolhido: {crm.LIMIAR_PADRAO}")
    for r in calib.itertuples():
        log(f"    {r.limiar:.2f}  vinculados={r.vinculados_fuzzy:>3}  sem_match={r.sem_match:>3}")

    (SAIDA / "relatorio.txt").write_text("\n".join(relatorio) + "\n", encoding="utf-8")

    # pagina com os resultados (e a pasta que o Netlify publica)
    exportar_site.gerar(PASTA / "site", brutos, df_norm, base, clientes, card, fmts, calib, scores,
                        crm.LIMIAR_PADRAO, SAIDA, PASTA / "raw")
    print("\n  pagina atualizada: site/index.html")


if __name__ == "__main__":
    main()
