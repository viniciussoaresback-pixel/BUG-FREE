# Auditoria: mede a bagunca dos dados brutos ANTES de qualquer correcao.
# Serve para justificar cada regra do normalizacao.py com numero.

import re

import pandas as pd

# ---------------------------------------------------------------- cardinalidade
# Quantos valores diferentes aparecem na coluna x quantos lugares/categorias existem de verdade.


def cardinalidade(df_bruto, df_norm):
    reais = {
        "origem": df_norm.dropna(subset=["origem_cidade"])[["origem_cidade", "origem_uf"]].drop_duplicates(),
        "destino": df_norm.dropna(subset=["destino_cidade"])[["destino_cidade", "destino_uf"]].drop_duplicates(),
        # status nulo do WhatsApp vira NOVA na limpeza, entao comparamos so quem tinha status
        "tipo_carga": df_norm["tipo_carga"].dropna().drop_duplicates(),
        "status": df_norm.loc[df_bruto["status"].notna(), "status"].drop_duplicates(),
    }
    linhas = []
    for coluna, valores_reais in reais.items():
        linhas.append({
            "coluna": coluna,
            "distintos": df_bruto[coluna].dropna().nunique(),
            "reais": len(valores_reais),
        })
    return pd.DataFrame(linhas)


# ---------------------------------------------------------------- formatos concorrentes
# Classifica cada valor pelo "jeito" que ele foi escrito.


def formato_valor(v):
    if v is None:
        return "ausente"
    v = str(v).strip()
    regras = [
        (r"R\$\s?\d{1,3}(\.\d{3})*,\d{2}", "R$ 1.500,00"),
        (r"\d{1,3}(\.\d{3})*,\d{2}", "1.500,00"),
        (r"\d+(,\d+)?\s?k", "1,5k"),
        (r"\d+\.\d+", "1500.00"),
        (r"\d+", "1500"),
    ]
    for padrao, nome in regras:
        if re.fullmatch(padrao, v, re.I):
            return nome
    return "outro"


def formato_peso(v):
    if v is None:
        return "ausente"
    v = str(v).strip().lower()
    if v.endswith("kg"):
        return "kg"
    if re.search(r"\d\s*(t|ton|toneladas)$", v):
        return "toneladas"
    return "sem unidade"


def formato_cnpj(v):
    if v is None:
        return "ausente"
    v = str(v).strip()
    if re.fullmatch(r"\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}", v):
        return "mascarado"
    if re.fullmatch(r"\d{14}", v):
        return "cru (so numeros)"
    if len(re.sub(r"\D", "", v)) < 14:
        return "truncado"
    return "outro"


def formato_data(v):
    if v is None:
        return "ausente"
    v = str(v).strip()
    regras = [
        (r"\d{4}-\d{2}-\d{2}T.*", "AAAA-MM-DDThh:mm"),
        (r"\d{4}-\d{2}-\d{2}", "AAAA-MM-DD"),
        (r"\d{1,2}-[a-zA-Z]{3}-\d{4}", "DD-mmm-AAAA"),
        (r"\d{1,2}/\d{1,2}/\d{4}", "DD/MM/AAAA (ou MM/DD)"),
        (r"\d{1,2}/\d{1,2}/\d{2}", "DD/MM/AA"),
    ]
    for padrao, nome in regras:
        if re.fullmatch(padrao, v):
            return nome
    return "outro"


def formatos(df_bruto):
    funcoes = {
        "valor_frete": formato_valor,
        "peso": formato_peso,
        "cnpj": formato_cnpj,
        "data_coleta": formato_data,
    }
    partes = []
    for coluna, func in funcoes.items():
        contagem = df_bruto[coluna].map(lambda v, f=func: f(None if pd.isna(v) else v)).value_counts()
        partes.append(pd.DataFrame({"coluna": coluna, "formato": contagem.index, "qtd": contagem.values}))
    return pd.concat(partes, ignore_index=True)


# ---------------------------------------------------------------- nulos por canal


def nulos_por_canal(df_bruto):
    return df_bruto.drop(columns=["id_demanda"]).groupby("canal").agg(lambda s: s.isna().sum())


def ids_repetidos(df_bruto):
    contagem = df_bruto["id_demanda"].value_counts()
    return contagem[contagem > 1]
