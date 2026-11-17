# Esquema unico do hub.
# Todo parser devolve registros com essas chaves, com o valor ainda BRUTO (texto do jeito
# que veio do canal). Quem limpa e o normalizacao.py. Esse dict e o unico "contrato"
# entre as camadas: canal novo = um parser novo que devolve isso aqui.

CAMPOS = [
    "id_demanda",
    "canal",
    "cliente_nome",
    "cnpj",
    "origem",
    "destino",
    "tipo_carga",
    "qtd_unidades",
    "peso",
    "valor_frete",
    "data_coleta",
    "status",
]

# Fora do esquema: os leitores tambem guardam "trecho_original", o pedaco da fonte de onde
# o registro saiu (linha do WhatsApp, linha da tabela, evento JSON...). Serve so para
# conferir na pagina (site/); nao entra na base.


def registro_vazio(id_demanda, canal):
    reg = dict.fromkeys(CAMPOS)
    reg["id_demanda"] = id_demanda
    reg["canal"] = canal
    return reg
