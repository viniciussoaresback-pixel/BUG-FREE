# Limpeza e padronizacao. Recebe o registro bruto do schema e devolve o registro limpo.
# Regra: limpador nao parseia. Tudo aqui trabalha campo a campo.

import re
import unicodedata
from datetime import date

import pandas as pd

# ---------------------------------------------------------------- texto


def sem_acento(texto):
    nfkd = unicodedata.normalize("NFKD", texto)
    return "".join(c for c in nfkd if not unicodedata.combining(c))


def chave(texto):
    """MAIUSCULO, sem acento e com um espaco so entre as palavras."""
    return re.sub(r"\s+", " ", sem_acento(str(texto)).upper()).strip()


# ---------------------------------------------------------------- cidade / UF
# Lista de referencia: so as cidades que a operacao atende hoje.
# Cidade fora da lista = rota nao parseavel (vai para descarte, nao inventamos cidade).

CIDADES = {
    ("CASCAVEL", "PR"): "Cascavel",
    ("CURITIBA", "PR"): "Curitiba",
    ("TOLEDO", "PR"): "Toledo",
    ("FOZ DO IGUACU", "PR"): "Foz do Iguacu",
    ("MARINGA", "PR"): "Maringa",
    ("LONDRINA", "PR"): "Londrina",
    ("PONTA GROSSA", "PR"): "Ponta Grossa",
    ("CHAPECO", "SC"): "Chapeco",
    ("JOINVILLE", "SC"): "Joinville",
    ("FLORIANOPOLIS", "SC"): "Florianopolis",
    ("PORTO ALEGRE", "RS"): "Porto Alegre",
    ("CAXIAS DO SUL", "RS"): "Caxias do Sul",
    ("SAO PAULO", "SP"): "Sao Paulo",
    ("CAMPINAS", "SP"): "Campinas",
    ("CAMPO GRANDE", "MS"): "Campo Grande",
    ("GOIANIA", "GO"): "Goiania",
    ("BELO HORIZONTE", "MG"): "Belo Horizonte",
    ("RIO DE JANEIRO", "RJ"): "Rio de Janeiro",
}

# apelidos que apareceram nos canais
APELIDOS = {
    "FLORIPA": "FLORIANOPOLIS",
    "SAMPA": "SAO PAULO",
    "POA": "PORTO ALEGRE",
    "CTBA": "CURITIBA",
    "FOZ": "FOZ DO IGUACU",
    "BH": "BELO HORIZONTE",
}

# "Cascavel/PR", "CASCAVEL - PR", "cascavel  pr", "Cascavel, PR"
RE_CIDADE_UF = re.compile(r"^(.+?)\s*(?:/|-|,|\s)\s*([A-Z]{2})$")


def separar_cidade_uf(texto):
    """Devolve (Cidade, UF) ou (None, None) quando nao reconhece."""
    if not texto:
        return None, None
    m = RE_CIDADE_UF.match(chave(texto))
    if not m:
        return None, None
    cidade, uf = m.group(1).strip(), m.group(2)
    cidade = APELIDOS.get(cidade, cidade)
    nome = CIDADES.get((cidade, uf))
    if nome is None:
        return None, None
    return nome, uf


# ---------------------------------------------------------------- valor (R$)


def valor_para_numero(texto):
    """'R$ 1.500,00' | '1.500,00' | '1,5k' | '1500.00' | '1500' -> 1500.0"""
    if texto is None:
        return None
    t = str(texto).upper().replace("R$", "").replace(" ", "")
    mult = 1
    if t.endswith("K"):
        mult = 1000
        t = t[:-1]
    if "," in t:  # padrao brasileiro: ponto e milhar, virgula e decimal
        t = t.replace(".", "").replace(",", ".")
    elif re.fullmatch(r"\d{1,3}(\.\d{3})+", t):  # 1.500 sem centavos
        t = t.replace(".", "")
    try:
        return round(float(t) * mult, 2)
    except ValueError:
        return None


# ---------------------------------------------------------------- peso

RE_PESO = re.compile(r"^(\d+(?:\.\d+)?)\s*(KG|T|TON|TONELADAS)?$")


def peso_para_kg(texto):
    """'12 t' | '12,5 ton' | '12000 kg' | '12000' -> kg.
    Sem unidade e menor que 100 consideramos tonelada (ninguem manda carga de 12 kg)."""
    if texto is None:
        return None
    t = chave(texto).replace(",", ".")
    m = RE_PESO.match(t)
    if not m:
        return None
    numero, unidade = float(m.group(1)), m.group(2)
    if unidade in ("T", "TON", "TONELADAS") or (unidade is None and numero < 100):
        numero *= 1000
    return round(numero, 1)


# ---------------------------------------------------------------- data

MESES = {"JAN": 1, "FEV": 2, "MAR": 3, "ABR": 4, "MAI": 5, "JUN": 6,
         "JUL": 7, "AGO": 8, "SET": 9, "OUT": 10, "NOV": 11, "DEZ": 12}


def data_iso(texto):
    """Devolve (data 'AAAA-MM-DD', ambigua?).
    dd/mm e mm/dd: se um dos lados passa de 12 a leitura e certa. Se os dois sao <= 12
    (ex. 05/04/2026) nao tem como saber; assumimos dd/mm (padrao BR) e marcamos ambigua."""
    if texto is None:
        return None, False
    t = chave(texto)
    ambigua = False
    try:
        m = re.match(r"^(\d{4})-(\d{2})-(\d{2})", t)  # 2026-04-15 ou 2026-04-15T08:00:00Z
        if m:
            return date(int(m[1]), int(m[2]), int(m[3])).isoformat(), False

        m = re.match(r"^(\d{1,2})-([A-Z]{3})-(\d{4})$", t)  # 15-abr-2026
        if m:
            return date(int(m[3]), MESES[m[2]], int(m[1])).isoformat(), False

        m = re.match(r"^(\d{1,2})[/.](\d{1,2})[/.](\d{2,4})$", t)
        if m:
            a, b, ano = int(m[1]), int(m[2]), int(m[3])
            if ano < 100:
                ano += 2000
            if a > 12:
                dia, mes = a, b
            elif b > 12:  # 04/25/2026: 25 nao pode ser mes
                dia, mes = b, a
            else:
                dia, mes = a, b
                ambigua = a != b
            return date(ano, mes, dia).isoformat(), ambigua
    except (ValueError, KeyError):
        pass
    return None, False


# ---------------------------------------------------------------- vocabulario controlado

TIPOS_CARGA = {
    "CEGONHA": "CEGONHA",
    "CEGONHEIRA": "CEGONHA",
    "PRANCHA": "PRANCHA",
    "PRANCHA BAIXA": "PRANCHA",
    "GUINCHO": "GUINCHO",
    "GUINCHO/PLATAFORMA": "GUINCHO",
    "BAU": "BAU",
    "SIDER": "SIDER",
    "GRANELEIRO": "GRANELEIRO",
    "FRIGORIFICO": "FRIGORIFICO",
}

STATUS = {
    "NOVA": "NOVA",
    "NOVO": "NOVA",
    "ABERTA": "NOVA",
    "EM ANALISE": "EM_ANALISE",
    "EM_ANALISE": "EM_ANALISE",
    "COTADA": "COTADA",
    "COTADO": "COTADA",
    "APROVADA": "APROVADA",
    "AGENDADA": "AGENDADA",
    "CANCELADA": "CANCELADA",
    "CONCLUIDA": "CONCLUIDA",
}


def tipo_carga(texto):
    if texto is None:
        return None
    return TIPOS_CARGA.get(chave(texto), "OUTRO")


def status(texto):
    # demanda que chega sem status (WhatsApp) entra como NOVA
    if texto is None:
        return "NOVA"
    return STATUS.get(chave(texto), "OUTRO")


# ---------------------------------------------------------------- documento


def cnpj_valido(numeros):
    if len(numeros) != 14 or numeros == numeros[0] * 14:
        return False

    def digito(parcial):
        pesos = list(range(len(parcial) - 7, 1, -1)) + list(range(9, 1, -1))
        resto = sum(int(n) * p for n, p in zip(parcial, pesos)) % 11
        return "0" if resto < 2 else str(11 - resto)

    d1 = digito(numeros[:12])
    d2 = digito(numeros[:12] + d1)
    return numeros[-2:] == d1 + d2


def limpar_cnpj(texto):
    """So aceita CNPJ completo e com digito verificador certo.
    Truncado ou invalido vira nulo: vinculo errado e pior que vinculo nenhum."""
    if texto is None:
        return None
    numeros = re.sub(r"\D", "", str(texto))
    return numeros if cnpj_valido(numeros) else None


# ---------------------------------------------------------------- quantidade


def quantidade(texto):
    try:
        qtd = int(str(texto).strip())
    except (TypeError, ValueError):
        return None
    return qtd if qtd > 0 else None


# ---------------------------------------------------------------- tabela inteira


def normalizar(df_bruto):
    """Aplica todas as transformacoes. Nao exclui nada (isso e na etapa seguinte)."""
    linhas = []
    for reg in df_bruto.to_dict("records"):
        # o pandas troca None por NaN; aqui volta tudo para None
        reg = {k: (None if pd.isna(v) else v) for k, v in reg.items()}
        o_cid, o_uf = separar_cidade_uf(reg["origem"])
        d_cid, d_uf = separar_cidade_uf(reg["destino"])
        data, ambigua = data_iso(reg["data_coleta"])
        linhas.append({
            "id_demanda": reg["id_demanda"],
            "canal": reg["canal"],
            "cliente_nome": reg["cliente_nome"],
            "cnpj": limpar_cnpj(reg["cnpj"]),
            "origem_cidade": o_cid,
            "origem_uf": o_uf,
            "destino_cidade": d_cid,
            "destino_uf": d_uf,
            "tipo_carga": tipo_carga(reg["tipo_carga"]),
            "qtd_unidades": quantidade(reg["qtd_unidades"]),
            "peso_kg": peso_para_kg(reg["peso"]),
            "valor_frete": valor_para_numero(reg["valor_frete"]),
            "data_coleta": data,
            "data_ambigua": ambigua,
            "status": status(reg["status"]),
        })
    df = pd.DataFrame(linhas)
    df["qtd_unidades"] = df["qtd_unidades"].astype("Int64")
    return df


def aplicar_exclusoes(df):
    """Separa base valida e descartes. Todo descarte sai com motivo."""
    motivos = []
    vistos = set()
    for reg in df.to_dict("records"):
        motivo = None
        if reg["id_demanda"] in vistos:
            motivo = "duplicata tecnica (id reenviado)"
        elif pd.isna(reg["origem_cidade"]) or pd.isna(reg["destino_cidade"]):
            motivo = "rota incompleta ou nao parseavel"
        elif pd.isna(reg["qtd_unidades"]):
            motivo = "quantidade de unidades invalida"
        vistos.add(reg["id_demanda"])
        motivos.append(motivo)

    df = df.assign(motivo=motivos)
    base = df[df["motivo"].isna()].drop(columns="motivo").reset_index(drop=True)
    descartes = df[df["motivo"].notna()][["id_demanda", "canal", "motivo"]].reset_index(drop=True)
    return base, descartes
