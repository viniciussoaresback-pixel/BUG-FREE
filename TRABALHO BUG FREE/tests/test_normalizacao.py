# Casos tirados dos proprios dados brutos (slide 7).
# Rodar: python -m pytest

import pandas as pd

import crm
import normalizacao as n
import parsers


def test_cidade_uf():
    assert n.separar_cidade_uf("CASCAVEL - PR") == ("Cascavel", "PR")
    assert n.separar_cidade_uf("cascavel  pr") == ("Cascavel", "PR")
    assert n.separar_cidade_uf("Floripa/SC") == ("Florianopolis", "SC")
    assert n.separar_cidade_uf("Foz do Iguaçu/PR") == ("Foz do Iguacu", "PR")
    assert n.separar_cidade_uf("Cidade Que Nao Existe/PR") == (None, None)
    assert n.separar_cidade_uf(None) == (None, None)


def test_valor():
    assert n.valor_para_numero("R$ 1.500,00") == 1500.0
    assert n.valor_para_numero("1,5k") == 1500.0
    assert n.valor_para_numero("8,3k") == 8300.0
    assert n.valor_para_numero("1500.00") == 1500.0
    assert n.valor_para_numero("1500") == 1500.0
    assert n.valor_para_numero("abc") is None


def test_peso():
    assert n.peso_para_kg("12 t") == 12000.0
    assert n.peso_para_kg("12000 kg") == 12000.0
    assert n.peso_para_kg("12,5 ton") == 12500.0
    assert n.peso_para_kg("12") == 12000.0  # sem unidade e pequeno = tonelada
    assert n.peso_para_kg("12000") == 12000.0


def test_data():
    assert n.data_iso("15-abr-2026") == ("2026-04-15", False)
    assert n.data_iso("2026-04-15T08:00:00Z") == ("2026-04-15", False)
    assert n.data_iso("04/25/2026") == ("2026-04-25", False)  # 25 nao pode ser mes
    assert n.data_iso("25/04/26") == ("2026-04-25", False)
    assert n.data_iso("05/04/2026") == ("2026-04-05", True)  # ambigua
    assert n.data_iso("31/02/2026") == (None, False)


def test_vocabulario():
    assert n.tipo_carga("cegonheira") == "CEGONHA"
    assert n.tipo_carga("baú") == "BAU"
    assert n.status("em análise") == "EM_ANALISE"
    assert n.status(None) == "NOVA"


def test_cnpj():
    assert n.limpar_cnpj("24.883.107") is None  # truncado
    assert n.limpar_cnpj("11.222.333/0001-81") == "11222333000181"
    assert n.limpar_cnpj("11.222.333/0001-80") is None  # digito errado


def test_quantidade():
    assert n.quantidade("7") == 7
    assert n.quantidade("0") is None
    assert n.quantidade("-1") is None


def test_fuzzy():
    assert crm.similaridade("Frota Pampa", "PAMPA GESTÃO DE FROTAS LTDA") == 1.0
    assert crm.similaridade("Transportes Boa Vista", "TRANSPORTADORA RODOSUL LTDA") < crm.LIMIAR_PADRAO


def test_exemplo_whatsapp_slide():
    regs = {r["id_demanda"]: r for r in parsers.ler_whatsapp()}
    bruto = regs["WA-0007"]
    assert bruto["cliente_nome"] == "Frota Pampa"
    limpo = n.normalizar(pd.DataFrame([bruto])).iloc[0]
    assert (limpo["origem_cidade"], limpo["destino_cidade"]) == ("Cascavel", "Florianopolis")
    assert limpo["valor_frete"] == 8300.0
    assert limpo["data_coleta"] == "2026-04-25"


def test_pipeline_numeros_do_slide():
    brutos = pd.DataFrame(parsers.ler_todos())
    assert len(brutos) == 113
    base, descartes = n.aplicar_exclusoes(n.normalizar(brutos))
    assert len(descartes) == 10
    assert len(base) == 103
    clientes = crm.carregar_crm(parsers.PASTA_RAW.parent / "crm" / "clientes.csv")
    vinc = crm.vincular(base, clientes)["metodo_vinculo"].value_counts()
    assert (vinc["CNPJ"], vinc["FUZZY"], vinc["SEM_MATCH"]) == (78, 15, 10)
