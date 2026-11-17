# Vinculo de cada demanda com o cadastro de clientes (CRM).
# 1o tenta pelo CNPJ (exato). Sem CNPJ valido, tenta pela razao social (fuzzy).
# Abaixo do limiar fica sem vinculo e vai para curadoria manual.

from difflib import SequenceMatcher

import pandas as pd

from normalizacao import chave

# Escolhido olhando a calibracao (output/03_calibracao_limiar.csv): o nome errado mais
# parecido ficou em 0,57 e o nome certo menos parecido em 0,78 ("Transp Rodosul").
# 0,75 fica no meio desse vao. Com 0,80 perdiamos um vinculo certo.
LIMIAR_PADRAO = 0.75

# palavras que nao ajudam a diferenciar empresa
PALAVRAS_IGNORADAS = {"LTDA", "SA", "S/A", "S.A.", "ME", "EPP", "EIRELI", "DE", "DA", "DO", "DAS", "DOS", "E", "CIA"}


def carregar_crm(caminho):
    crm = pd.read_csv(caminho, dtype=str)
    crm["cnpj"] = crm["cnpj"].str.replace(r"\D", "", regex=True)
    return crm


def _tokens(nome):
    palavras = chave(nome).replace(".", " ").split()
    # tira o plural simples (FROTAS -> FROTA) para "Frota Pampa" achar "Gestao de Frotas"
    return {p[:-1] if len(p) > 3 and p.endswith("S") else p for p in palavras if p not in PALAVRAS_IGNORADAS}


def similaridade(a, b):
    """Parecido com o token_set_ratio do fuzzywuzzy, feito com difflib.
    Compara as palavras em comum + o que sobra de cada lado; ordem das palavras nao importa."""
    ta, tb = _tokens(a), _tokens(b)
    if not ta or not tb:
        return 0.0
    comum = " ".join(sorted(ta & tb))
    resto_a = (comum + " " + " ".join(sorted(ta - tb))).strip()
    resto_b = (comum + " " + " ".join(sorted(tb - ta))).strip()
    pares = [(resto_a, resto_b)]
    if comum:
        pares += [(comum, resto_a), (comum, resto_b)]
    return max(SequenceMatcher(None, x, y).ratio() for x, y in pares)


def melhor_candidato(nome, crm):
    if not isinstance(nome, str) or not nome.strip():  # sem nome (ou NaN do pandas)
        return None, 0.0
    melhor_id, melhor_score = None, 0.0
    for cli in crm.itertuples():
        score = similaridade(nome, cli.razao_social)
        if score > melhor_score:
            melhor_id, melhor_score = cli.cliente_id, score
    return melhor_id, round(melhor_score, 3)


def vincular(base, crm, limiar=LIMIAR_PADRAO):
    por_cnpj = dict(zip(crm["cnpj"], crm["cliente_id"]))
    ids, metodos, scores = [], [], []
    for reg in base.itertuples():
        if reg.cnpj and reg.cnpj in por_cnpj:
            ids.append(por_cnpj[reg.cnpj])
            metodos.append("CNPJ")
            scores.append(1.0)
            continue
        cand, score = melhor_candidato(reg.cliente_nome, crm)
        if score >= limiar:
            ids.append(cand)
            metodos.append("FUZZY")
        else:
            ids.append(None)
            metodos.append("SEM_MATCH")
        scores.append(score)
    return base.assign(cliente_id=ids, metodo_vinculo=metodos, score_vinculo=scores)


def scores_sem_cnpj(base, crm):
    """Melhor candidato de cada demanda que nao achou o cliente pelo CNPJ."""
    sem_cnpj = base[~base["cnpj"].isin(set(crm["cnpj"]))]
    linhas = []
    for reg in sem_cnpj.itertuples():
        cand, score = melhor_candidato(reg.cliente_nome, crm)
        razao = crm.loc[crm["cliente_id"] == cand, "razao_social"].iloc[0] if cand else None
        linhas.append({"id_demanda": reg.id_demanda, "nome_na_demanda": reg.cliente_nome,
                       "melhor_candidato": razao, "score": score})
    return pd.DataFrame(linhas).sort_values("score", ascending=False)


def calibrar_limiar(base, crm, limiares=(0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90)):
    """Quantas demandas sem CNPJ seriam vinculadas em cada limiar.
    Usado para escolher o LIMIAR_PADRAO olhando onde a curva estabiliza."""
    scores = list(scores_sem_cnpj(base, crm)["score"])
    linhas = []
    for lim in limiares:
        vinculados = sum(s >= lim for s in scores)
        linhas.append({"limiar": lim, "vinculados_fuzzy": vinculados, "sem_match": len(scores) - vinculados})
    return pd.DataFrame(linhas)
