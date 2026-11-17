// gerado pelo main.py (exportar_site.py) - nao editar na mao
window.DADOS = {
 "funil": {
  "brutos": 113,
  "descartados": 10,
  "base": 103,
  "vinculados": 93
 },
 "vinculo": {
  "CNPJ": 78,
  "FUZZY": 15,
  "SEM_MATCH": 10
 },
 "canais": [
  {
   "canal": "whatsapp",
   "nome": "WhatsApp",
   "formato": "texto livre ou template",
   "registros": 25,
   "descartados": 6,
   "base": 19,
   "vinculados": 15
  },
  {
   "canal": "email",
   "nome": "E-mail",
   "formato": "tabela HTML",
   "registros": 20,
   "descartados": 0,
   "base": 20,
   "vinculados": 19
  },
  {
   "canal": "api",
   "nome": "Portal / API",
   "formato": "webhook JSON",
   "registros": 27,
   "descartados": 2,
   "base": 25,
   "vinculados": 24
  },
  {
   "canal": "arquivo",
   "nome": "Planilha legado",
   "formato": "CSV latin-1",
   "registros": 29,
   "descartados": 2,
   "base": 27,
   "vinculados": 23
  },
  {
   "canal": "pdf",
   "nome": "Ordem de coleta",
   "formato": "PDF com tabela",
   "registros": 12,
   "descartados": 0,
   "base": 12,
   "vinculados": 12
  }
 ],
 "cardinalidade": [
  {
   "coluna": "origem",
   "distintos": 24,
   "reais": 13
  },
  {
   "coluna": "destino",
   "distintos": 14,
   "reais": 8
  },
  {
   "coluna": "tipo_carga",
   "distintos": 12,
   "reais": 7
  },
  {
   "coluna": "status",
   "distintos": 11,
   "reais": 7
  }
 ],
 "formatos": [
  {
   "coluna": "valor_frete",
   "formato": "R$ 1.500,00",
   "qtd": 35
  },
  {
   "coluna": "valor_frete",
   "formato": "1.500,00",
   "qtd": 27
  },
  {
   "coluna": "valor_frete",
   "formato": "1500",
   "qtd": 20
  },
  {
   "coluna": "valor_frete",
   "formato": "1500.00",
   "qtd": 19
  },
  {
   "coluna": "valor_frete",
   "formato": "ausente",
   "qtd": 6
  },
  {
   "coluna": "valor_frete",
   "formato": "1,5k",
   "qtd": 6
  },
  {
   "coluna": "peso",
   "formato": "toneladas",
   "qtd": 36
  },
  {
   "coluna": "peso",
   "formato": "kg",
   "qtd": 34
  },
  {
   "coluna": "peso",
   "formato": "sem unidade",
   "qtd": 26
  },
  {
   "coluna": "peso",
   "formato": "ausente",
   "qtd": 17
  },
  {
   "coluna": "cnpj",
   "formato": "mascarado",
   "qtd": 44
  },
  {
   "coluna": "cnpj",
   "formato": "cru (so numeros)",
   "qtd": 40
  },
  {
   "coluna": "cnpj",
   "formato": "ausente",
   "qtd": 25
  },
  {
   "coluna": "cnpj",
   "formato": "truncado",
   "qtd": 4
  },
  {
   "coluna": "data_coleta",
   "formato": "DD/MM/AAAA (ou MM/DD)",
   "qtd": 50
  },
  {
   "coluna": "data_coleta",
   "formato": "DD/MM/AA",
   "qtd": 24
  },
  {
   "coluna": "data_coleta",
   "formato": "AAAA-MM-DD",
   "qtd": 14
  },
  {
   "coluna": "data_coleta",
   "formato": "AAAA-MM-DDThh:mm",
   "qtd": 13
  },
  {
   "coluna": "data_coleta",
   "formato": "DD-mmm-AAAA",
   "qtd": 8
  },
  {
   "coluna": "data_coleta",
   "formato": "ausente",
   "qtd": 4
  }
 ],
 "motivos": [
  {
   "motivo": "rota incompleta ou nao parseavel",
   "qtd": 6
  },
  {
   "motivo": "duplicata tecnica (id reenviado)",
   "qtd": 2
  },
  {
   "motivo": "quantidade de unidades invalida",
   "qtd": 2
  }
 ],
 "limiar": 0.75,
 "calibracao": [
  {
   "limiar": 0.5,
   "vinculados_fuzzy": 17,
   "sem_match": 8
  },
  {
   "limiar": 0.55,
   "vinculados_fuzzy": 16,
   "sem_match": 9
  },
  {
   "limiar": 0.6,
   "vinculados_fuzzy": 15,
   "sem_match": 10
  },
  {
   "limiar": 0.65,
   "vinculados_fuzzy": 15,
   "sem_match": 10
  },
  {
   "limiar": 0.7,
   "vinculados_fuzzy": 15,
   "sem_match": 10
  },
  {
   "limiar": 0.75,
   "vinculados_fuzzy": 15,
   "sem_match": 10
  },
  {
   "limiar": 0.8,
   "vinculados_fuzzy": 14,
   "sem_match": 11
  },
  {
   "limiar": 0.85,
   "vinculados_fuzzy": 14,
   "sem_match": 11
  },
  {
   "limiar": 0.9,
   "vinculados_fuzzy": 14,
   "sem_match": 11
  }
 ],
 "scores": [
  {
   "id_demanda": "WA-0003",
   "nome_na_demanda": "Automotiva Parana",
   "melhor_candidato": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0006",
   "nome_na_demanda": "Concessionaria Vale Verde",
   "melhor_candidato": "CONCESSIONÁRIA VALE VERDE LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0007",
   "nome_na_demanda": "Frota Pampa",
   "melhor_candidato": "PAMPA GESTÃO DE FROTAS LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0010",
   "nome_na_demanda": "Pampa Frotas",
   "melhor_candidato": "PAMPA GESTÃO DE FROTAS LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0019",
   "nome_na_demanda": "Vale Verde",
   "melhor_candidato": "CONCESSIONÁRIA VALE VERDE LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "EM-0014",
   "nome_na_demanda": "Concessionaria Vale Verde",
   "melhor_candidato": "CONCESSIONÁRIA VALE VERDE LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "CSV-0003",
   "nome_na_demanda": "Campos Gerais",
   "melhor_candidato": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
   "score": 1.0
  },
  {
   "id_demanda": "EM-0006",
   "nome_na_demanda": "Cooperativa Campos Gerais",
   "melhor_candidato": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0023",
   "nome_na_demanda": "Maquinas Implementos Toledo",
   "melhor_candidato": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "OC-0009",
   "nome_na_demanda": "Vale Verde",
   "melhor_candidato": "CONCESSIONÁRIA VALE VERDE LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "CSV-0027",
   "nome_na_demanda": "Rodosul",
   "melhor_candidato": "TRANSPORTADORA RODOSUL LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "CSV-0015",
   "nome_na_demanda": "Frota Pampa",
   "melhor_candidato": "PAMPA GESTÃO DE FROTAS LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "CSV-0010",
   "nome_na_demanda": "ESTRELA DO OESTE",
   "melhor_candidato": "LOCADORA ESTRELA DO OESTE LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "CSV-0023",
   "nome_na_demanda": "IMPLEMENTOS TOLEDO",
   "melhor_candidato": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
   "score": 1.0
  },
  {
   "id_demanda": "WA-0014",
   "nome_na_demanda": "Transp Rodosul",
   "melhor_candidato": "TRANSPORTADORA RODOSUL LTDA",
   "score": 0.778
  },
  {
   "id_demanda": "EM-0011",
   "nome_na_demanda": "Transportes Boa Vista",
   "melhor_candidato": "TRANSPORTADORA RODOSUL LTDA",
   "score": 0.571
  },
  {
   "id_demanda": "CSV-0018",
   "nome_na_demanda": "Logistica Nova Era",
   "melhor_candidato": "PAMPA GESTÃO DE FROTAS LTDA",
   "score": 0.5
  },
  {
   "id_demanda": "WA-0012",
   "nome_na_demanda": "Revenda Sul Motos",
   "melhor_candidato": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
   "score": 0.489
  },
  {
   "id_demanda": "CSV-0012",
   "nome_na_demanda": "Revenda Sul Motos",
   "melhor_candidato": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
   "score": 0.489
  },
  {
   "id_demanda": "WA-0025",
   "nome_na_demanda": "Tratores Planalto",
   "melhor_candidato": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
   "score": 0.488
  },
  {
   "id_demanda": "API-0013",
   "nome_na_demanda": "Agropecuaria Santa Rita",
   "melhor_candidato": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
   "score": 0.459
  },
  {
   "id_demanda": "CSV-0005",
   "nome_na_demanda": "MARCOS PARTICULAR",
   "melhor_candidato": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
   "score": 0.444
  },
  {
   "id_demanda": "WA-0021",
   "nome_na_demanda": "Mecanica Irmaos Kuhn",
   "melhor_candidato": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
   "score": 0.35
  },
  {
   "id_demanda": "WA-0016",
   "nome_na_demanda": "Auto Center Bom Jesus",
   "melhor_candidato": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
   "score": 0.345
  },
  {
   "id_demanda": "CSV-0026",
   "nome_na_demanda": "AUTO CENTER BOM JESUS",
   "melhor_candidato": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
   "score": 0.345
  }
 ],
 "registros": [
  {
   "id": "WA-0001",
   "canal": "whatsapp",
   "trecho": "12/04/2026 08:06 - Cliente: WA-0001 - oi, Transportes Boa Vista aqui. preciso levar 10 carros pra Florianópolis/SC, coleta 25-abr-2026",
   "bruto": {
    "cliente_nome": "Transportes Boa Vista",
    "cnpj": null,
    "origem": null,
    "destino": "Florianópolis/SC",
    "tipo_carga": null,
    "qtd_unidades": "10",
    "peso": null,
    "valor_frete": null,
    "data_coleta": "25-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Transportes Boa Vista",
    "cnpj": null,
    "origem_cidade": null,
    "origem_uf": null,
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": null,
    "qtd_unidades": 10,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": "2026-04-25",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0002",
   "canal": "whatsapp",
   "trecho": "12/04/2026 08:14 - Cliente: WA-0002 - #DEMANDA | Empresa: TRANSPORTADORA RODOSUL LTDA | CNPJ: 15.881.399/0001-34 | Origem: CASCAVEL - PR | Destino: Floripa/SC | Tipo: cegonheira | Qtd: 11 | Peso: 15,9 t | Valor: 14,6k | Coleta: 29/04/2026",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "CASCAVEL - PR",
    "destino": "Floripa/SC",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "11",
    "peso": "15,9 t",
    "valor_frete": "14,6k",
    "data_coleta": "29/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 15900.0,
    "valor_frete": 14600.0,
    "data_coleta": "2026-04-29",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0003",
   "canal": "whatsapp",
   "trecho": "12/04/2026 08:29 - Cliente: WA-0003 - boa tarde, Automotiva Parana falando. 11 unidades de cascavel  pr pra FLORIANOPOLIS - SC, coleta 17-abr-2026, valor R$ 13.500,00",
   "bruto": {
    "cliente_nome": "Automotiva Parana",
    "cnpj": null,
    "origem": "cascavel  pr",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": null,
    "qtd_unidades": "11",
    "peso": null,
    "valor_frete": "R$ 13.500,00",
    "data_coleta": "17-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Automotiva Parana",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": null,
    "qtd_unidades": 11,
    "peso_kg": null,
    "valor_frete": 13500.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0004",
   "canal": "whatsapp",
   "trecho": "12/04/2026 08:41 - Cliente: WA-0004 - Bom dia, tem caminhão saindo de Curitiba/PR essa semana? aqui é da Agropecuaria Santa Rita.",
   "bruto": {
    "cliente_nome": "Agropecuaria Santa Rita",
    "cnpj": null,
    "origem": "Curitiba/PR",
    "destino": null,
    "tipo_carga": null,
    "qtd_unidades": null,
    "peso": null,
    "valor_frete": null,
    "data_coleta": null,
    "status": null
   },
   "limpo": {
    "cliente_nome": "Agropecuaria Santa Rita",
    "cnpj": null,
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": null,
    "destino_uf": null,
    "tipo_carga": null,
    "qtd_unidades": null,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": null,
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0005",
   "canal": "whatsapp",
   "trecho": "12/04/2026 08:52 - Cliente: WA-0005 - #DEMANDA | Empresa: LOCADORA ESTRELA DO OESTE LTDA | CNPJ: 09.114.170/0001-71 | Origem: CURITIBA - PR | Destino: SAO PAULO - SP | Tipo: prancha baixa | Qtd: 2 | Peso: 2800 kg | Valor: R$ 6.600,00 | Coleta: 22/04/2026",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "CURITIBA - PR",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "2",
    "peso": "2800 kg",
    "valor_frete": "R$ 6.600,00",
    "data_coleta": "22/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 2,
    "peso_kg": 2800.0,
    "valor_frete": 6600.0,
    "data_coleta": "2026-04-22",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0006",
   "canal": "whatsapp",
   "trecho": "12/04/2026 09:04 - Cliente: WA-0006 - Bom dia! Aqui é da Concessionaria Vale Verde, tenho 3 veiculos saindo de Ctba/PR para Sampa/SP. Coleta dia 19-abr-2026. Pago 10.700,00",
   "bruto": {
    "cliente_nome": "Concessionaria Vale Verde",
    "cnpj": null,
    "origem": "Ctba/PR",
    "destino": "Sampa/SP",
    "tipo_carga": null,
    "qtd_unidades": "3",
    "peso": null,
    "valor_frete": "10.700,00",
    "data_coleta": "19-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Concessionaria Vale Verde",
    "cnpj": null,
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": null,
    "qtd_unidades": 3,
    "peso_kg": null,
    "valor_frete": 10700.0,
    "data_coleta": "2026-04-19",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0007",
   "canal": "whatsapp",
   "trecho": "12/04/2026 09:14 - Cliente: WA-0007 - oi, Frota Pampa aqui. preciso levar 7 carros de cascavel  pr pra Floripa/SC, coleta 04/25/2026, fecha em 8,3k?",
   "bruto": {
    "cliente_nome": "Frota Pampa",
    "cnpj": null,
    "origem": "cascavel  pr",
    "destino": "Floripa/SC",
    "tipo_carga": null,
    "qtd_unidades": "7",
    "peso": null,
    "valor_frete": "8,3k",
    "data_coleta": "04/25/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Frota Pampa",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": null,
    "qtd_unidades": 7,
    "peso_kg": null,
    "valor_frete": 8300.0,
    "data_coleta": "2026-04-25",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0008",
   "canal": "whatsapp",
   "trecho": "12/04/2026 09:29 - Cliente: WA-0008 - #DEMANDA | Empresa: MÁQUINAS E IMPLEMENTOS TOLEDO LTDA | CNPJ: 81.518.844/0001-20 | Origem: TOLEDO - PR | Destino: CURITIBA - PR | Tipo: BAU | Qtd: 1 | Peso: 20 t | Valor: 14.600,00 | Coleta: 21-abr-2026",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81.518.844/0001-20",
    "origem": "TOLEDO - PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "BAU",
    "qtd_unidades": "1",
    "peso": "20 t",
    "valor_frete": "14.600,00",
    "data_coleta": "21-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "BAU",
    "qtd_unidades": 1,
    "peso_kg": 20000.0,
    "valor_frete": 14600.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0009",
   "canal": "whatsapp",
   "trecho": "12/04/2026 09:38 - Cliente: WA-0009 - Marcos Particular aqui, preciso cotar 3 carros, me liga por favor",
   "bruto": {
    "cliente_nome": null,
    "cnpj": null,
    "origem": null,
    "destino": null,
    "tipo_carga": null,
    "qtd_unidades": "3",
    "peso": null,
    "valor_frete": null,
    "data_coleta": null,
    "status": null
   },
   "limpo": {
    "cliente_nome": null,
    "cnpj": null,
    "origem_cidade": null,
    "origem_uf": null,
    "destino_cidade": null,
    "destino_uf": null,
    "tipo_carga": null,
    "qtd_unidades": 3,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": null,
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0010",
   "canal": "whatsapp",
   "trecho": "12/04/2026 09:50 - Cliente: WA-0010 - oi, Pampa Frotas aqui. preciso levar 1 carros de FOZ DO IGUACU - PR pra POA/RS, coleta 15/04/2026, fecha em R$ 1.800,00?",
   "bruto": {
    "cliente_nome": "Pampa Frotas",
    "cnpj": null,
    "origem": "FOZ DO IGUACU - PR",
    "destino": "POA/RS",
    "tipo_carga": null,
    "qtd_unidades": "1",
    "peso": null,
    "valor_frete": "R$ 1.800,00",
    "data_coleta": "15/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Pampa Frotas",
    "cnpj": null,
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": null,
    "qtd_unidades": 1,
    "peso_kg": null,
    "valor_frete": 1800.0,
    "data_coleta": "2026-04-15",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0011",
   "canal": "whatsapp",
   "trecho": "12/04/2026 10:06 - Cliente: WA-0011 - #DEMANDA | Empresa: LEILÕES IGUAÇU VEÍCULOS EIRELI | CNPJ: 61.698.716/0001-07 | Origem: Foz/PR | Destino: Campo Grande/MS | Tipo: GRANELEIRO | Qtd: 1 | Peso: 25,5 t | Valor: 2600 | Coleta: 07/05/2026",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "Foz/PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "1",
    "peso": "25,5 t",
    "valor_frete": "2600",
    "data_coleta": "07/05/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 1,
    "peso_kg": 25500.0,
    "valor_frete": 2600.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0012",
   "canal": "whatsapp",
   "trecho": "12/04/2026 10:19 - Cliente: WA-0012 - Bom dia! Aqui é da Revenda Sul Motos, tenho 2 veiculos saindo de Maringá/PR para Goiânia/GO. Coleta dia 05/05/2026. Pago 14,0k",
   "bruto": {
    "cliente_nome": "Revenda Sul Motos",
    "cnpj": null,
    "origem": "Maringá/PR",
    "destino": "Goiânia/GO",
    "tipo_carga": null,
    "qtd_unidades": "2",
    "peso": null,
    "valor_frete": "14,0k",
    "data_coleta": "05/05/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Revenda Sul Motos",
    "cnpj": null,
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": null,
    "qtd_unidades": 2,
    "peso_kg": null,
    "valor_frete": 14000.0,
    "data_coleta": "2026-05-05",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.489
   }
  },
  {
   "id": "WA-0013",
   "canal": "whatsapp",
   "trecho": "12/04/2026 10:26 - Cliente: WA-0013 - oi, Logistica Nova Era aqui. preciso levar 11 carros pra Belo Horizonte/MG, coleta 22/04/2026",
   "bruto": {
    "cliente_nome": "Logistica Nova Era",
    "cnpj": null,
    "origem": null,
    "destino": "Belo Horizonte/MG",
    "tipo_carga": null,
    "qtd_unidades": "11",
    "peso": null,
    "valor_frete": null,
    "data_coleta": "22/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Logistica Nova Era",
    "cnpj": null,
    "origem_cidade": null,
    "origem_uf": null,
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": null,
    "qtd_unidades": 11,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": "2026-04-22",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0014",
   "canal": "whatsapp",
   "trecho": "12/04/2026 10:41 - Cliente: WA-0014 - Bom dia! Aqui é da Transp Rodosul, tenho 4 veiculos saindo de Londrina/PR para Rio de Janeiro/RJ. Coleta dia 29/04/2026. Pago 9,3k",
   "bruto": {
    "cliente_nome": "Transp Rodosul",
    "cnpj": null,
    "origem": "Londrina/PR",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": null,
    "qtd_unidades": "4",
    "peso": null,
    "valor_frete": "9,3k",
    "data_coleta": "29/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Transp Rodosul",
    "cnpj": null,
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": null,
    "qtd_unidades": 4,
    "peso_kg": null,
    "valor_frete": 9300.0,
    "data_coleta": "2026-04-29",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "FUZZY",
    "score": 0.778
   }
  },
  {
   "id": "WA-0015",
   "canal": "whatsapp",
   "trecho": "12/04/2026 10:50 - Cliente: WA-0015 - #DEMANDA | Empresa: AUTOMOTIVA PARANÁ VEÍCULOS S.A. | CNPJ: 86.987.973/0001-81 | Origem: Ponta Grossa/PR | Destino: Florianópolis/SC | Tipo: Cegonha | Qtd: 2 | Peso: 2,3 t | Valor: 11400 | Coleta: 15/04/2026",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "Ponta Grossa/PR",
    "destino": "Florianópolis/SC",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "2",
    "peso": "2,3 t",
    "valor_frete": "11400",
    "data_coleta": "15/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 2,
    "peso_kg": 2300.0,
    "valor_frete": 11400.0,
    "data_coleta": "2026-04-15",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0016",
   "canal": "whatsapp",
   "trecho": "12/04/2026 11:04 - Cliente: WA-0016 - oi, Auto Center Bom Jesus aqui. preciso levar 3 carros de PONTA GROSSA - PR pra Floripa/SC, coleta 04-mai-2026, fecha em 9.800,00?",
   "bruto": {
    "cliente_nome": "Auto Center Bom Jesus",
    "cnpj": null,
    "origem": "PONTA GROSSA - PR",
    "destino": "Floripa/SC",
    "tipo_carga": null,
    "qtd_unidades": "3",
    "peso": null,
    "valor_frete": "9.800,00",
    "data_coleta": "04-mai-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Auto Center Bom Jesus",
    "cnpj": null,
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": null,
    "qtd_unidades": 3,
    "peso_kg": null,
    "valor_frete": 9800.0,
    "data_coleta": "2026-05-04",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.345
   }
  },
  {
   "id": "WA-0017",
   "canal": "whatsapp",
   "trecho": "12/04/2026 11:18 - Cliente: WA-0017 - #DEMANDA | Empresa: LOCADORA ESTRELA DO OESTE LTDA | CNPJ: 09.114.170/0001-71 | Origem: Chapecó/SC | Destino: FLORIANOPOLIS - SC | Tipo: prancha baixa | Qtd: 2 | Peso: 2900 kg | Valor: 5.800,00 | Coleta: 17-abr-2026",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "Chapecó/SC",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "2",
    "peso": "2900 kg",
    "valor_frete": "5.800,00",
    "data_coleta": "17-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 2,
    "peso_kg": 2900.0,
    "valor_frete": 5800.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0018",
   "canal": "whatsapp",
   "trecho": "12/04/2026 11:29 - Cliente: WA-0018 - Bom dia, tem caminhão saindo de CHAPECO - SC essa semana? aqui é da Fazenda Sao Jorge.",
   "bruto": {
    "cliente_nome": "Fazenda Sao Jorge",
    "cnpj": null,
    "origem": "CHAPECO - SC",
    "destino": null,
    "tipo_carga": null,
    "qtd_unidades": null,
    "peso": null,
    "valor_frete": null,
    "data_coleta": null,
    "status": null
   },
   "limpo": {
    "cliente_nome": "Fazenda Sao Jorge",
    "cnpj": null,
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": null,
    "destino_uf": null,
    "tipo_carga": null,
    "qtd_unidades": null,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": null,
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0019",
   "canal": "whatsapp",
   "trecho": "12/04/2026 11:42 - Cliente: WA-0019 - Bom dia! Aqui é da Vale Verde, tenho 3 veiculos saindo de Joinville/SC para SAO PAULO - SP. Coleta dia 03/05/2026. Pago 2.600,00",
   "bruto": {
    "cliente_nome": "Vale Verde",
    "cnpj": null,
    "origem": "Joinville/SC",
    "destino": "SAO PAULO - SP",
    "tipo_carga": null,
    "qtd_unidades": "3",
    "peso": null,
    "valor_frete": "2.600,00",
    "data_coleta": "03/05/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Vale Verde",
    "cnpj": null,
    "origem_cidade": "Joinville",
    "origem_uf": "SC",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": null,
    "qtd_unidades": 3,
    "peso_kg": null,
    "valor_frete": 2600.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0020",
   "canal": "whatsapp",
   "trecho": "12/04/2026 11:55 - Cliente: WA-0020 - #DEMANDA | Empresa: COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS | CNPJ: 24.883.107/0001-93 | Origem: Porto Alegre/RS | Destino: Sampa/SP | Tipo: BAU | Qtd: 3 | Peso: 27,5 t | Valor: 2,0k | Coleta: 17/04/2026",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24.883.107/0001-93",
    "origem": "Porto Alegre/RS",
    "destino": "Sampa/SP",
    "tipo_carga": "BAU",
    "qtd_unidades": "3",
    "peso": "27,5 t",
    "valor_frete": "2,0k",
    "data_coleta": "17/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 27500.0,
    "valor_frete": 2000.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0021",
   "canal": "whatsapp",
   "trecho": "12/04/2026 12:05 - Cliente: WA-0021 - Bom dia! Aqui é da Mecanica Irmaos Kuhn, tenho 2 veiculos saindo de POA/RS para Curitiba/PR. Coleta dia 30-abr-2026. Pago R$ 12.300,00",
   "bruto": {
    "cliente_nome": "Mecanica Irmaos Kuhn",
    "cnpj": null,
    "origem": "POA/RS",
    "destino": "Curitiba/PR",
    "tipo_carga": null,
    "qtd_unidades": "2",
    "peso": null,
    "valor_frete": "R$ 12.300,00",
    "data_coleta": "30-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Mecanica Irmaos Kuhn",
    "cnpj": null,
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": null,
    "qtd_unidades": 2,
    "peso_kg": null,
    "valor_frete": 12300.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.35
   }
  },
  {
   "id": "WA-0022",
   "canal": "whatsapp",
   "trecho": "12/04/2026 12:17 - Cliente: WA-0022 - Distribuidora Pecas Norte aqui, preciso cotar 1 carros, me liga por favor",
   "bruto": {
    "cliente_nome": null,
    "cnpj": null,
    "origem": null,
    "destino": null,
    "tipo_carga": null,
    "qtd_unidades": "1",
    "peso": null,
    "valor_frete": null,
    "data_coleta": null,
    "status": null
   },
   "limpo": {
    "cliente_nome": null,
    "cnpj": null,
    "origem_cidade": null,
    "origem_uf": null,
    "destino_cidade": null,
    "destino_uf": null,
    "tipo_carga": null,
    "qtd_unidades": 1,
    "peso_kg": null,
    "valor_frete": null,
    "data_coleta": null,
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "rota incompleta ou nao parseavel",
   "vinculo": null
  },
  {
   "id": "WA-0023",
   "canal": "whatsapp",
   "trecho": "12/04/2026 12:30 - Cliente: WA-0023 - boa tarde, Maquinas Implementos Toledo falando. 2 unidades de São Paulo/SP pra Porto Alegre/RS, coleta 23/04/2026, valor 6.000,00",
   "bruto": {
    "cliente_nome": "Maquinas Implementos Toledo",
    "cnpj": null,
    "origem": "São Paulo/SP",
    "destino": "Porto Alegre/RS",
    "tipo_carga": null,
    "qtd_unidades": "2",
    "peso": null,
    "valor_frete": "6.000,00",
    "data_coleta": "23/04/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Maquinas Implementos Toledo",
    "cnpj": null,
    "origem_cidade": "Sao Paulo",
    "origem_uf": "SP",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": null,
    "qtd_unidades": 2,
    "peso_kg": null,
    "valor_frete": 6000.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "WA-0024",
   "canal": "whatsapp",
   "trecho": "12/04/2026 12:39 - Cliente: WA-0024 - #DEMANDA | Empresa: PAMPA GESTÃO DE FROTAS LTDA | CNPJ: 72.940.557/0001-13 | Origem: Campinas/SP | Destino: POA/RS | Tipo: FRIGORIFICO | Qtd: 3 | Peso: 14500 kg | Valor: R$ 3.900,00 | Coleta: 10/05/2026",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72.940.557/0001-13",
    "origem": "Campinas/SP",
    "destino": "POA/RS",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "3",
    "peso": "14500 kg",
    "valor_frete": "R$ 3.900,00",
    "data_coleta": "10/05/2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Campinas",
    "origem_uf": "SP",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 3,
    "peso_kg": 14500.0,
    "valor_frete": 3900.0,
    "data_coleta": "2026-05-10",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "WA-0025",
   "canal": "whatsapp",
   "trecho": "12/04/2026 12:52 - Cliente: WA-0025 - boa tarde, Tratores Planalto falando. 7 unidades de Cascavel/PR pra Campo Grande/MS, coleta 13-abr-2026, valor 6,1k",
   "bruto": {
    "cliente_nome": "Tratores Planalto",
    "cnpj": null,
    "origem": "Cascavel/PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": null,
    "qtd_unidades": "7",
    "peso": null,
    "valor_frete": "6,1k",
    "data_coleta": "13-abr-2026",
    "status": null
   },
   "limpo": {
    "cliente_nome": "Tratores Planalto",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": null,
    "qtd_unidades": 7,
    "peso_kg": null,
    "valor_frete": 6100.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.488
   }
  },
  {
   "id": "EM-0001",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0001</td><td>LEILÕES IGUAÇU VEÍCULOS EIRELI</td><td>61.698.716/0001-07</td><td>CASCAVEL - PR</td><td>Goiânia/GO</td><td>cegonheira</td><td>11</td><td>16,5 t</td><td>R$ 7.000,00</td><td>16/04/26</td><td>nova</td></tr>",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "CASCAVEL - PR",
    "destino": "Goiânia/GO",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "11",
    "peso": "16,5 t",
    "valor_frete": "R$ 7.000,00",
    "data_coleta": "16/04/26",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 16500.0,
    "valor_frete": 7000.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0002",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0002</td><td>TRANSPORTADORA RODOSUL LTDA</td><td>15.881.399/0001-34</td><td>cascavel  pr</td><td>Belo Horizonte/MG</td><td>Cegonha</td><td>11</td><td>14,3 t</td><td>R$ 4.800,00</td><td>16/04/26</td><td>NOVO</td></tr>",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "cascavel  pr",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "11",
    "peso": "14,3 t",
    "valor_frete": "R$ 4.800,00",
    "data_coleta": "16/04/26",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 14300.0,
    "valor_frete": 4800.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0003",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0003</td><td>AUTOMOTIVA PARANÁ VEÍCULOS S.A.</td><td>86.987.973/0001-81</td><td>Curitiba/PR</td><td>Rio de Janeiro/RJ</td><td>PRANCHA</td><td>1</td><td>1,1 t</td><td>R$ 3.000,00</td><td>07/05/2026</td><td>aberta</td></tr>",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "Curitiba/PR",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "1",
    "peso": "1,1 t",
    "valor_frete": "R$ 3.000,00",
    "data_coleta": "07/05/2026",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 1,
    "peso_kg": 1100.0,
    "valor_frete": 3000.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0004",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0004</td><td>LOCADORA ESTRELA DO OESTE LTDA</td><td>09.114.170/0001-71</td><td>CURITIBA - PR</td><td>Florianópolis/SC</td><td>prancha baixa</td><td>3</td><td>4050 kg</td><td>8.500,00</td><td>01/05/26</td><td>em análise</td></tr>",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "CURITIBA - PR",
    "destino": "Florianópolis/SC",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "3",
    "peso": "4050 kg",
    "valor_frete": "8.500,00",
    "data_coleta": "01/05/26",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 4050.0,
    "valor_frete": 8500.0,
    "data_coleta": "2026-05-01",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0005",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0005</td><td>CONCESSIONÁRIA VALE VERDE LTDA</td><td>75.364.556/0001-66</td><td>Ctba/PR</td><td>Floripa/SC</td><td>GUINCHO</td><td>1</td><td>1300 kg</td><td>8.000,00</td><td>15/04/26</td><td>EM_ANALISE</td></tr>",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75.364.556/0001-66",
    "origem": "Ctba/PR",
    "destino": "Floripa/SC",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "1",
    "peso": "1300 kg",
    "valor_frete": "8.000,00",
    "data_coleta": "15/04/26",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 1,
    "peso_kg": 1300.0,
    "valor_frete": 8000.0,
    "data_coleta": "2026-04-15",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0006",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0006</td><td>Cooperativa Campos Gerais</td><td>24.883.107</td><td>Toledo/PR</td><td>FLORIANOPOLIS - SC</td><td>Guincho/plataforma</td><td>2</td><td>2,2 t</td><td>R$ 2.900,00</td><td>16/04/2026</td><td>cotada</td></tr>",
   "bruto": {
    "cliente_nome": "Cooperativa Campos Gerais",
    "cnpj": "24.883.107",
    "origem": "Toledo/PR",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "2",
    "peso": "2,2 t",
    "valor_frete": "R$ 2.900,00",
    "data_coleta": "16/04/2026",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "Cooperativa Campos Gerais",
    "cnpj": null,
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 2200.0,
    "valor_frete": 2900.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "EM-0007",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0007</td><td>MÁQUINAS E IMPLEMENTOS TOLEDO LTDA</td><td>81.518.844/0001-20</td><td>TOLEDO - PR</td><td>São Paulo/SP</td><td>BAU</td><td>3</td><td>23,5 t</td><td>R$ 10.400,00</td><td>23/04/26</td><td>COTADO</td></tr>",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81.518.844/0001-20",
    "origem": "TOLEDO - PR",
    "destino": "São Paulo/SP",
    "tipo_carga": "BAU",
    "qtd_unidades": "3",
    "peso": "23,5 t",
    "valor_frete": "R$ 10.400,00",
    "data_coleta": "23/04/26",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 23500.0,
    "valor_frete": 10400.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0008",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0008</td><td>PAMPA GESTÃO DE FROTAS LTDA</td><td>72.940.557/0001-13</td><td>Foz do Iguaçu/PR</td><td>SAO PAULO - SP</td><td>baú</td><td>2</td><td>25 t</td><td>7.000,00</td><td>02/05/2026</td><td>aprovada</td></tr>",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72.940.557/0001-13",
    "origem": "Foz do Iguaçu/PR",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "baú",
    "qtd_unidades": "2",
    "peso": "25 t",
    "valor_frete": "7.000,00",
    "data_coleta": "02/05/2026",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 25000.0,
    "valor_frete": 7000.0,
    "data_coleta": "2026-05-02",
    "data_ambigua": true,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0009",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0009</td><td>LEILÕES IGUAÇU VEÍCULOS EIRELI</td><td>61.698.716/0001-07</td><td>FOZ DO IGUACU - PR</td><td>Sampa/SP</td><td>SIDER</td><td>3</td><td>17,5 t</td><td>14.300,00</td><td>04/05/26</td><td>agendada</td></tr>",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "FOZ DO IGUACU - PR",
    "destino": "Sampa/SP",
    "tipo_carga": "SIDER",
    "qtd_unidades": "3",
    "peso": "17,5 t",
    "valor_frete": "14.300,00",
    "data_coleta": "04/05/26",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "SIDER",
    "qtd_unidades": 3,
    "peso_kg": 17500.0,
    "valor_frete": 14300.0,
    "data_coleta": "2026-05-04",
    "data_ambigua": true,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0010",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0010</td><td>TRANSPORTADORA RODOSUL LTDA</td><td>15.881.399/0001-34</td><td>Foz/PR</td><td>Curitiba/PR</td><td>GRANELEIRO</td><td>2</td><td>7,5 t</td><td>12.600,00</td><td>13/04/26</td><td>cancelada</td></tr>",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "Foz/PR",
    "destino": "Curitiba/PR",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "2",
    "peso": "7,5 t",
    "valor_frete": "12.600,00",
    "data_coleta": "13/04/26",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 2,
    "peso_kg": 7500.0,
    "valor_frete": 12600.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0011",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0011</td><td>Transportes Boa Vista</td><td></td><td>Maringá/PR</td><td>CURITIBA - PR</td><td>FRIGORIFICO</td><td>3</td><td>9,5 t</td><td>9.100,00</td><td>07/05/2026</td><td>CONCLUIDA</td></tr>",
   "bruto": {
    "cliente_nome": "Transportes Boa Vista",
    "cnpj": null,
    "origem": "Maringá/PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "3",
    "peso": "9,5 t",
    "valor_frete": "9.100,00",
    "data_coleta": "07/05/2026",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "Transportes Boa Vista",
    "cnpj": null,
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 3,
    "peso_kg": 9500.0,
    "valor_frete": 9100.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.571
   }
  },
  {
   "id": "EM-0012",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0012</td><td>AUTOMOTIVA PARANÁ VEÍCULOS S.A.</td><td>86.987.973/0001-81</td><td>MARINGA - PR</td><td>Porto Alegre/RS</td><td>CEGONHA</td><td>10</td><td>13500 kg</td><td>R$ 6.500,00</td><td>30/04/2026</td><td>nova</td></tr>",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "MARINGA - PR",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "10",
    "peso": "13500 kg",
    "valor_frete": "R$ 6.500,00",
    "data_coleta": "30/04/2026",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 10,
    "peso_kg": 13500.0,
    "valor_frete": 6500.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0013",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0013</td><td>LOCADORA ESTRELA DO OESTE LTDA</td><td>09.114.170/0001-71</td><td>Londrina/PR</td><td>POA/RS</td><td>cegonheira</td><td>11</td><td>12650 kg</td><td>4.500,00</td><td>14/04/26</td><td>NOVO</td></tr>",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "Londrina/PR",
    "destino": "POA/RS",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "11",
    "peso": "12650 kg",
    "valor_frete": "4.500,00",
    "data_coleta": "14/04/26",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 12650.0,
    "valor_frete": 4500.0,
    "data_coleta": "2026-04-14",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0014",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0014</td><td>Concessionaria Vale Verde</td><td></td><td>Ponta Grossa/PR</td><td>Campo Grande/MS</td><td>Cegonha</td><td>2</td><td>2,8 t</td><td>R$ 4.700,00</td><td>24/04/26</td><td>aberta</td></tr>",
   "bruto": {
    "cliente_nome": "Concessionaria Vale Verde",
    "cnpj": null,
    "origem": "Ponta Grossa/PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "2",
    "peso": "2,8 t",
    "valor_frete": "R$ 4.700,00",
    "data_coleta": "24/04/26",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "Concessionaria Vale Verde",
    "cnpj": null,
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 2,
    "peso_kg": 2800.0,
    "valor_frete": 4700.0,
    "data_coleta": "2026-04-24",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "EM-0015",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0015</td><td>COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS</td><td>24.883.107/0001-93</td><td>PONTA GROSSA - PR</td><td>Goiânia/GO</td><td>PRANCHA</td><td>3</td><td>3750 kg</td><td>4.700,00</td><td>18/04/26</td><td>em análise</td></tr>",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24.883.107/0001-93",
    "origem": "PONTA GROSSA - PR",
    "destino": "Goiânia/GO",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "3",
    "peso": "3750 kg",
    "valor_frete": "4.700,00",
    "data_coleta": "18/04/26",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 3750.0,
    "valor_frete": 4700.0,
    "data_coleta": "2026-04-18",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0016",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0016</td><td>MÁQUINAS E IMPLEMENTOS TOLEDO LTDA</td><td>81.518.844/0001-20</td><td>Chapecó/SC</td><td>Belo Horizonte/MG</td><td>prancha baixa</td><td>1</td><td>1,2 t</td><td>2.000,00</td><td>13/04/26</td><td>EM_ANALISE</td></tr>",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81.518.844/0001-20",
    "origem": "Chapecó/SC",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "1",
    "peso": "1,2 t",
    "valor_frete": "2.000,00",
    "data_coleta": "13/04/26",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 1,
    "peso_kg": 1200.0,
    "valor_frete": 2000.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0017",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0017</td><td>PAMPA GESTÃO DE FROTAS LTDA</td><td>72.940.557/0001-13</td><td>CHAPECO - SC</td><td>Rio de Janeiro/RJ</td><td>GUINCHO</td><td>2</td><td>2700 kg</td><td>R$ 5.000,00</td><td>03/05/2026</td><td>cotada</td></tr>",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72.940.557/0001-13",
    "origem": "CHAPECO - SC",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "2",
    "peso": "2700 kg",
    "valor_frete": "R$ 5.000,00",
    "data_coleta": "03/05/2026",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 2700.0,
    "valor_frete": 5000.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": true,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0018",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0018</td><td>LEILÕES IGUAÇU VEÍCULOS EIRELI</td><td>61.698.716/0001-07</td><td>Joinville/SC</td><td>Florianópolis/SC</td><td>Guincho/plataforma</td><td>3</td><td>4,5 t</td><td>R$ 8.200,00</td><td>23/04/2026</td><td>COTADO</td></tr>",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "Joinville/SC",
    "destino": "Florianópolis/SC",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "3",
    "peso": "4,5 t",
    "valor_frete": "R$ 8.200,00",
    "data_coleta": "23/04/2026",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Joinville",
    "origem_uf": "SC",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 3,
    "peso_kg": 4500.0,
    "valor_frete": 8200.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0019",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0019</td><td>TRANSPORTADORA RODOSUL LTDA</td><td>15.881.399/0001-34</td><td>Porto Alegre/RS</td><td>Floripa/SC</td><td>BAU</td><td>3</td><td>13500 kg</td><td>R$ 13.500,00</td><td>14/04/26</td><td>aprovada</td></tr>",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "Porto Alegre/RS",
    "destino": "Floripa/SC",
    "tipo_carga": "BAU",
    "qtd_unidades": "3",
    "peso": "13500 kg",
    "valor_frete": "R$ 13.500,00",
    "data_coleta": "14/04/26",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 13500.0,
    "valor_frete": 13500.0,
    "data_coleta": "2026-04-14",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "EM-0020",
   "canal": "email",
   "trecho": "<tr><th>Nº Pedido</th><th>Cliente</th><th>CNPJ</th><th>Origem</th><th>Destino</th><th>Tipo carga</th><th>Qtd</th><th>Peso</th><th>Frete</th><th>Data coleta</th><th>Situação</th></tr>\n<tr><td>EM-0020</td><td>AUTOMOTIVA PARANÁ VEÍCULOS S.A.</td><td>86.987.973/0001-81</td><td>POA/RS</td><td>FLORIANOPOLIS - SC</td><td>baú</td><td>3</td><td>17,5 t</td><td>7.400,00</td><td>30/04/2026</td><td>agendada</td></tr>",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "POA/RS",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "baú",
    "qtd_unidades": "3",
    "peso": "17,5 t",
    "valor_frete": "7.400,00",
    "data_coleta": "30/04/2026",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 17500.0,
    "valor_frete": 7400.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0001",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-12T09:07:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0001\",\n    \"customer\": {\n      \"name\": \"LOCADORA ESTRELA DO OESTE LTDA\",\n      \"document\": \"09114170000171\"\n    },\n    \"route\": {\n      \"from\": \"Caxias do Sul/RS\",\n      \"to\": \"São Paulo/SP\"\n    },\n    \"cargo\": {\n      \"type\": \"SIDER\",\n      \"units\": 2,\n      \"weight\": \"17 t\"\n    },\n    \"price\": 13200,\n    \"pickup_date\": \"2026-05-03T08:00:00Z\",\n    \"status\": \"cancelada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem": "Caxias do Sul/RS",
    "destino": "São Paulo/SP",
    "tipo_carga": "SIDER",
    "qtd_unidades": "2",
    "peso": "17 t",
    "valor_frete": "13200",
    "data_coleta": "2026-05-03T08:00:00Z",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Caxias do Sul",
    "origem_uf": "RS",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "SIDER",
    "qtd_unidades": 2,
    "peso_kg": 17000.0,
    "valor_frete": 13200.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0002",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-12T10:14:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0002\",\n    \"customer\": {\n      \"name\": \"CONCESSIONÁRIA VALE VERDE LTDA\",\n      \"document\": \"75364556000166\"\n    },\n    \"route\": {\n      \"from\": \"São Paulo/SP\",\n      \"to\": \"SAO PAULO - SP\"\n    },\n    \"cargo\": {\n      \"type\": \"GRANELEIRO\",\n      \"units\": 3,\n      \"weight\": \"24,5 t\"\n    },\n    \"price\": 9400.0,\n    \"pickup_date\": \"2026-04-19T08:00:00Z\",\n    \"status\": \"CONCLUIDA\"\n  }\n}",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem": "São Paulo/SP",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "3",
    "peso": "24,5 t",
    "valor_frete": "9400.0",
    "data_coleta": "2026-04-19T08:00:00Z",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Sao Paulo",
    "origem_uf": "SP",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 3,
    "peso_kg": 24500.0,
    "valor_frete": 9400.0,
    "data_coleta": "2026-04-19",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0003",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-12T11:21:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0003\",\n    \"customer\": {\n      \"name\": \"COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS\",\n      \"document\": \"24883107000193\"\n    },\n    \"route\": {\n      \"from\": \"Campinas/SP\",\n      \"to\": \"Sampa/SP\"\n    },\n    \"cargo\": {\n      \"type\": \"FRIGORIFICO\",\n      \"units\": 1,\n      \"weight\": \"21,5 t\"\n    },\n    \"price\": \"1600.00\",\n    \"pickup_date\": \"2026-04-24T08:00:00Z\",\n    \"status\": \"nova\"\n  }\n}",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem": "Campinas/SP",
    "destino": "Sampa/SP",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "1",
    "peso": "21,5 t",
    "valor_frete": "1600.00",
    "data_coleta": "2026-04-24T08:00:00Z",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Campinas",
    "origem_uf": "SP",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 1,
    "peso_kg": 21500.0,
    "valor_frete": 1600.0,
    "data_coleta": "2026-04-24",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0004",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-12T12:28:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0004\",\n    \"customer\": {\n      \"name\": \"MÁQUINAS E IMPLEMENTOS TOLEDO LTDA\",\n      \"document\": \"81518844000120\"\n    },\n    \"route\": {\n      \"from\": \"Cascavel/PR\",\n      \"to\": \"Curitiba/PR\"\n    },\n    \"cargo\": {\n      \"type\": \"CEGONHA\",\n      \"units\": 2,\n      \"weight\": \"3200 kg\"\n    },\n    \"price\": 5900,\n    \"pickup_date\": \"2026-04-15T08:00:00Z\",\n    \"status\": \"NOVO\"\n  }\n}",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem": "Cascavel/PR",
    "destino": "Curitiba/PR",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "2",
    "peso": "3200 kg",
    "valor_frete": "5900",
    "data_coleta": "2026-04-15T08:00:00Z",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 2,
    "peso_kg": 3200.0,
    "valor_frete": 5900.0,
    "data_coleta": "2026-04-15",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0005",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-12T13:35:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0005\",\n    \"customer\": {\n      \"name\": \"PAMPA GESTÃO DE FROTAS LTDA\",\n      \"document\": \"72940557000113\"\n    },\n    \"route\": {\n      \"from\": \"CASCAVEL - PR\",\n      \"to\": \"CURITIBA - PR\"\n    },\n    \"cargo\": {\n      \"type\": \"cegonheira\",\n      \"units\": 4,\n      \"weight\": 6600\n    },\n    \"price\": \"4000.00\",\n    \"pickup_date\": \"2026-04-13T08:00:00Z\",\n    \"status\": \"aberta\"\n  }\n}",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "CASCAVEL - PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "4",
    "peso": "6600",
    "valor_frete": "4000.00",
    "data_coleta": "2026-04-13T08:00:00Z",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 4,
    "peso_kg": 6600.0,
    "valor_frete": 4000.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0006",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T14:42:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0006\",\n    \"customer\": {\n      \"name\": \"LEILÕES IGUAÇU VEÍCULOS EIRELI\",\n      \"document\": \"61698716000107\"\n    },\n    \"route\": {\n      \"from\": \"cascavel  pr\",\n      \"to\": \"Porto Alegre/RS\"\n    },\n    \"cargo\": {\n      \"type\": \"Cegonha\",\n      \"units\": 11,\n      \"weight\": \"12,1 t\"\n    },\n    \"price\": \"11500.00\",\n    \"pickup_date\": \"2026-04-25\",\n    \"status\": \"em análise\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem": "cascavel  pr",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "11",
    "peso": "12,1 t",
    "valor_frete": "11500.00",
    "data_coleta": "2026-04-25",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 12100.0,
    "valor_frete": 11500.0,
    "data_coleta": "2026-04-25",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0007",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T15:49:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0007\",\n    \"customer\": {\n      \"name\": \"TRANSPORTADORA RODOSUL LTDA\",\n      \"document\": \"15881399000134\"\n    },\n    \"route\": {\n      \"from\": \"Curitiba/PR\",\n      \"to\": \"POA/RS\"\n    },\n    \"cargo\": {\n      \"type\": \"PRANCHA\",\n      \"units\": 3,\n      \"weight\": \"3450 kg\"\n    },\n    \"price\": \"3600.00\",\n    \"pickup_date\": \"2026-04-17T08:00:00Z\",\n    \"status\": \"EM_ANALISE\"\n  }\n}",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem": "Curitiba/PR",
    "destino": "POA/RS",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "3",
    "peso": "3450 kg",
    "valor_frete": "3600.00",
    "data_coleta": "2026-04-17T08:00:00Z",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 3450.0,
    "valor_frete": 3600.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0008",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T16:56:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0008\",\n    \"customer\": {\n      \"name\": \"AUTOMOTIVA PARANÁ VEÍCULOS S.A.\",\n      \"document\": \"86987973000181\"\n    },\n    \"route\": {\n      \"from\": \"CURITIBA - PR\",\n      \"to\": \"Campo Grande/MS\"\n    },\n    \"cargo\": {\n      \"type\": \"prancha baixa\",\n      \"units\": 3,\n      \"weight\": \"3,9 t\"\n    },\n    \"price\": \"9400.00\",\n    \"pickup_date\": \"2026-04-14\",\n    \"status\": \"cotada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem": "CURITIBA - PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "3",
    "peso": "3,9 t",
    "valor_frete": "9400.00",
    "data_coleta": "2026-04-14",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 3900.0,
    "valor_frete": 9400.0,
    "data_coleta": "2026-04-14",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0009",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T08:03:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0009\",\n    \"customer\": {\n      \"name\": \"LOCADORA ESTRELA DO OESTE LTDA\",\n      \"document\": \"09114170000171\"\n    },\n    \"route\": {\n      \"from\": \"Ctba/PR\",\n      \"to\": \"Goiânia/GO\"\n    },\n    \"cargo\": {\n      \"type\": \"GUINCHO\",\n      \"units\": 1,\n      \"weight\": \"1300 kg\"\n    },\n    \"price\": 9000,\n    \"pickup_date\": \"2026-04-30\",\n    \"status\": \"COTADO\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem": "Ctba/PR",
    "destino": "Goiânia/GO",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "1",
    "peso": "1300 kg",
    "valor_frete": "9000",
    "data_coleta": "2026-04-30",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 1,
    "peso_kg": 1300.0,
    "valor_frete": 9000.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0005",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T08:03:30-03:00\",\n  \"payload\": {\n    \"id\": \"API-0005\",\n    \"customer\": {\n      \"name\": \"PAMPA GESTÃO DE FROTAS LTDA\",\n      \"document\": \"72940557000113\"\n    },\n    \"route\": {\n      \"from\": \"CASCAVEL - PR\",\n      \"to\": \"CURITIBA - PR\"\n    },\n    \"cargo\": {\n      \"type\": \"cegonheira\",\n      \"units\": 4,\n      \"weight\": 6600\n    },\n    \"price\": \"4000.00\",\n    \"pickup_date\": \"2026-04-13T08:00:00Z\",\n    \"status\": \"aberta\"\n  },\n  \"tentativa\": 2\n}",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "CASCAVEL - PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "4",
    "peso": "6600",
    "valor_frete": "4000.00",
    "data_coleta": "2026-04-13T08:00:00Z",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 4,
    "peso_kg": 6600.0,
    "valor_frete": 4000.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": "duplicata tecnica (id reenviado)",
   "vinculo": null
  },
  {
   "id": "API-0010",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T09:10:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0010\",\n    \"customer\": {\n      \"name\": \"CONCESSIONÁRIA VALE VERDE LTDA\",\n      \"document\": \"75364556000166\"\n    },\n    \"route\": {\n      \"from\": \"Toledo/PR\",\n      \"to\": \"Belo Horizonte/MG\"\n    },\n    \"cargo\": {\n      \"type\": \"Guincho/plataforma\",\n      \"units\": 2,\n      \"weight\": \"2,5 t\"\n    },\n    \"price\": \"1700.00\",\n    \"pickup_date\": \"2026-05-10T08:00:00Z\",\n    \"status\": \"aprovada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem": "Toledo/PR",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "2",
    "peso": "2,5 t",
    "valor_frete": "1700.00",
    "data_coleta": "2026-05-10T08:00:00Z",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 2500.0,
    "valor_frete": 1700.0,
    "data_coleta": "2026-05-10",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0011",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-13T10:17:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0011\",\n    \"customer\": {\n      \"name\": \"COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS\",\n      \"document\": \"24883107000193\"\n    },\n    \"route\": {\n      \"from\": \"TOLEDO - PR\",\n      \"to\": \"Rio de Janeiro/RJ\"\n    },\n    \"cargo\": {\n      \"type\": \"BAU\",\n      \"units\": 2,\n      \"weight\": 17000\n    },\n    \"price\": \"5800.00\",\n    \"pickup_date\": \"2026-05-06\",\n    \"status\": \"agendada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem": "TOLEDO - PR",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "BAU",
    "qtd_unidades": "2",
    "peso": "17000",
    "valor_frete": "5800.00",
    "data_coleta": "2026-05-06",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 17000.0,
    "valor_frete": 5800.0,
    "data_coleta": "2026-05-06",
    "data_ambigua": false,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0012",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T11:24:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0012\",\n    \"customer\": {\n      \"name\": \"MÁQUINAS E IMPLEMENTOS TOLEDO LTDA\",\n      \"document\": \"81518844000120\"\n    },\n    \"route\": {\n      \"from\": \"Foz do Iguaçu/PR\",\n      \"to\": \"Florianópolis/SC\"\n    },\n    \"cargo\": {\n      \"type\": \"baú\",\n      \"units\": 2,\n      \"weight\": 23000\n    },\n    \"price\": 5200.0,\n    \"pickup_date\": \"2026-04-18\",\n    \"status\": \"cancelada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem": "Foz do Iguaçu/PR",
    "destino": "Florianópolis/SC",
    "tipo_carga": "baú",
    "qtd_unidades": "2",
    "peso": "23000",
    "valor_frete": "5200.0",
    "data_coleta": "2026-04-18",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 23000.0,
    "valor_frete": 5200.0,
    "data_coleta": "2026-04-18",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0013",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T12:31:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0013\",\n    \"customer\": {\n      \"name\": \"Agropecuaria Santa Rita\",\n      \"document\": \"38299321000101\"\n    },\n    \"route\": {\n      \"from\": \"FOZ DO IGUACU - PR\",\n      \"to\": \"Floripa/SC\"\n    },\n    \"cargo\": {\n      \"type\": \"SIDER\",\n      \"units\": 2,\n      \"weight\": \"8000 kg\"\n    },\n    \"price\": 10900,\n    \"pickup_date\": \"2026-04-22\",\n    \"status\": \"CONCLUIDA\"\n  }\n}",
   "bruto": {
    "cliente_nome": "Agropecuaria Santa Rita",
    "cnpj": "38299321000101",
    "origem": "FOZ DO IGUACU - PR",
    "destino": "Floripa/SC",
    "tipo_carga": "SIDER",
    "qtd_unidades": "2",
    "peso": "8000 kg",
    "valor_frete": "10900",
    "data_coleta": "2026-04-22",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "Agropecuaria Santa Rita",
    "cnpj": "38299321000101",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "SIDER",
    "qtd_unidades": 2,
    "peso_kg": 8000.0,
    "valor_frete": 10900.0,
    "data_coleta": "2026-04-22",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.459
   }
  },
  {
   "id": "API-0014",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T13:38:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0014\",\n    \"customer\": {\n      \"name\": \"PAMPA GESTÃO DE FROTAS LTDA\",\n      \"document\": \"72940557000113\"\n    },\n    \"route\": {\n      \"from\": \"Foz/PR\",\n      \"to\": \"FLORIANOPOLIS - SC\"\n    },\n    \"cargo\": {\n      \"type\": \"GRANELEIRO\",\n      \"units\": 3,\n      \"weight\": \"8000 kg\"\n    },\n    \"price\": \"11200.00\",\n    \"pickup_date\": \"2026-04-21\",\n    \"status\": \"nova\"\n  }\n}",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "Foz/PR",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "3",
    "peso": "8000 kg",
    "valor_frete": "11200.00",
    "data_coleta": "2026-04-21",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 3,
    "peso_kg": 8000.0,
    "valor_frete": 11200.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0015",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T14:45:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0015\",\n    \"customer\": {\n      \"name\": \"LEILÕES IGUAÇU VEÍCULOS EIRELI\",\n      \"document\": \"61698716000107\"\n    },\n    \"route\": {\n      \"from\": \"Maringá/PR\",\n      \"to\": \"São Paulo/SP\"\n    },\n    \"cargo\": {\n      \"type\": \"FRIGORIFICO\",\n      \"units\": 2,\n      \"weight\": \"21 t\"\n    },\n    \"price\": \"14200.00\",\n    \"pickup_date\": \"2026-04-16\",\n    \"status\": \"NOVO\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem": "Maringá/PR",
    "destino": "São Paulo/SP",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "2",
    "peso": "21 t",
    "valor_frete": "14200.00",
    "data_coleta": "2026-04-16",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 2,
    "peso_kg": 21000.0,
    "valor_frete": 14200.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0016",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T15:52:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0016\",\n    \"customer\": {\n      \"name\": \"TRANSPORTADORA RODOSUL LTDA\",\n      \"document\": \"15881399000134\"\n    },\n    \"route\": {\n      \"from\": \"MARINGA - PR\",\n      \"to\": \"SAO PAULO - SP\"\n    },\n    \"cargo\": {\n      \"type\": \"CEGONHA\",\n      \"units\": 7,\n      \"weight\": 11200\n    },\n    \"price\": 13100,\n    \"pickup_date\": \"2026-05-01\",\n    \"status\": \"aberta\"\n  }\n}",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem": "MARINGA - PR",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "7",
    "peso": "11200",
    "valor_frete": "13100",
    "data_coleta": "2026-05-01",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 7,
    "peso_kg": 11200.0,
    "valor_frete": 13100.0,
    "data_coleta": "2026-05-01",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0017",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-14T16:59:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0017\",\n    \"customer\": {\n      \"name\": \"AUTOMOTIVA PARANÁ VEÍCULOS S.A.\",\n      \"document\": \"86987973000181\"\n    },\n    \"route\": {\n      \"from\": \"Londrina/PR\",\n      \"to\": \"Sampa/SP\"\n    },\n    \"cargo\": {\n      \"type\": \"cegonheira\",\n      \"units\": 3,\n      \"weight\": 4350\n    },\n    \"price\": \"9400.00\",\n    \"pickup_date\": \"2026-04-21\",\n    \"status\": \"em análise\"\n  }\n}",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem": "Londrina/PR",
    "destino": "Sampa/SP",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "3",
    "peso": "4350",
    "valor_frete": "9400.00",
    "data_coleta": "2026-04-21",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 3,
    "peso_kg": 4350.0,
    "valor_frete": 9400.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0018",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T08:06:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0018\",\n    \"customer\": {\n      \"name\": \"LOCADORA ESTRELA DO OESTE LTDA\",\n      \"document\": \"09114170000171\"\n    },\n    \"route\": {\n      \"from\": \"Ponta Grossa/PR\",\n      \"to\": \"Curitiba/PR\"\n    },\n    \"cargo\": {\n      \"type\": \"Cegonha\",\n      \"units\": 7,\n      \"weight\": \"9800 kg\"\n    },\n    \"price\": 14400,\n    \"pickup_date\": \"2026-04-30T08:00:00Z\",\n    \"status\": \"EM_ANALISE\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem": "Ponta Grossa/PR",
    "destino": "Curitiba/PR",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "7",
    "peso": "9800 kg",
    "valor_frete": "14400",
    "data_coleta": "2026-04-30T08:00:00Z",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 7,
    "peso_kg": 9800.0,
    "valor_frete": 14400.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0019",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T09:13:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0019\",\n    \"customer\": {\n      \"name\": \"CONCESSIONÁRIA VALE VERDE LTDA\",\n      \"document\": \"75364556000166\"\n    },\n    \"route\": {\n      \"from\": \"PONTA GROSSA - PR\",\n      \"to\": \"CURITIBA - PR\"\n    },\n    \"cargo\": {\n      \"type\": \"PRANCHA\",\n      \"units\": 2,\n      \"weight\": 2700\n    },\n    \"price\": 6000,\n    \"pickup_date\": \"2026-04-19T08:00:00Z\",\n    \"status\": \"cotada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem": "PONTA GROSSA - PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "2",
    "peso": "2700",
    "valor_frete": "6000",
    "data_coleta": "2026-04-19T08:00:00Z",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 2,
    "peso_kg": 2700.0,
    "valor_frete": 6000.0,
    "data_coleta": "2026-04-19",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0020",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T10:20:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0020\",\n    \"customer\": {\n      \"name\": \"COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS\",\n      \"document\": \"24883107000193\"\n    },\n    \"route\": {\n      \"from\": \"Chapecó/SC\",\n      \"to\": \"Porto Alegre/RS\"\n    },\n    \"cargo\": {\n      \"type\": \"prancha baixa\",\n      \"units\": 2,\n      \"weight\": \"2800 kg\"\n    },\n    \"price\": 11200.0,\n    \"pickup_date\": \"2026-04-19\",\n    \"status\": \"COTADO\"\n  }\n}",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem": "Chapecó/SC",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "2",
    "peso": "2800 kg",
    "valor_frete": "11200.0",
    "data_coleta": "2026-04-19",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 2,
    "peso_kg": 2800.0,
    "valor_frete": 11200.0,
    "data_coleta": "2026-04-19",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0017",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T10:20:30-03:00\",\n  \"payload\": {\n    \"id\": \"API-0017\",\n    \"customer\": {\n      \"name\": \"AUTOMOTIVA PARANÁ VEÍCULOS S.A.\",\n      \"document\": \"86987973000181\"\n    },\n    \"route\": {\n      \"from\": \"Londrina/PR\",\n      \"to\": \"Sampa/SP\"\n    },\n    \"cargo\": {\n      \"type\": \"cegonheira\",\n      \"units\": 3,\n      \"weight\": 4350\n    },\n    \"price\": \"9400.00\",\n    \"pickup_date\": \"2026-04-21\",\n    \"status\": \"em análise\"\n  },\n  \"tentativa\": 2\n}",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem": "Londrina/PR",
    "destino": "Sampa/SP",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "3",
    "peso": "4350",
    "valor_frete": "9400.00",
    "data_coleta": "2026-04-21",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 3,
    "peso_kg": 4350.0,
    "valor_frete": 9400.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": "duplicata tecnica (id reenviado)",
   "vinculo": null
  },
  {
   "id": "API-0021",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T11:27:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0021\",\n    \"customer\": {\n      \"name\": \"MÁQUINAS E IMPLEMENTOS TOLEDO LTDA\",\n      \"document\": \"81518844000120\"\n    },\n    \"route\": {\n      \"from\": \"CHAPECO - SC\",\n      \"to\": \"POA/RS\"\n    },\n    \"cargo\": {\n      \"type\": \"GUINCHO\",\n      \"units\": 2,\n      \"weight\": \"2600 kg\"\n    },\n    \"price\": 9900.0,\n    \"pickup_date\": \"2026-05-09T08:00:00Z\",\n    \"status\": \"aprovada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem": "CHAPECO - SC",
    "destino": "POA/RS",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "2",
    "peso": "2600 kg",
    "valor_frete": "9900.0",
    "data_coleta": "2026-05-09T08:00:00Z",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 2600.0,
    "valor_frete": 9900.0,
    "data_coleta": "2026-05-09",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0022",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T12:34:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0022\",\n    \"customer\": {\n      \"name\": \"PAMPA GESTÃO DE FROTAS LTDA\",\n      \"document\": \"72940557000113\"\n    },\n    \"route\": {\n      \"from\": \"Joinville/SC\",\n      \"to\": \"Campo Grande/MS\"\n    },\n    \"cargo\": {\n      \"type\": \"Guincho/plataforma\",\n      \"units\": 2,\n      \"weight\": \"2600 kg\"\n    },\n    \"price\": \"5200.00\",\n    \"pickup_date\": \"2026-04-30\",\n    \"status\": \"agendada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "Joinville/SC",
    "destino": "Campo Grande/MS",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "2",
    "peso": "2600 kg",
    "valor_frete": "5200.00",
    "data_coleta": "2026-04-30",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Joinville",
    "origem_uf": "SC",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 2600.0,
    "valor_frete": 5200.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0023",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-15T13:41:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0023\",\n    \"customer\": {\n      \"name\": \"LEILÕES IGUAÇU VEÍCULOS EIRELI\",\n      \"document\": \"61698716000107\"\n    },\n    \"route\": {\n      \"from\": \"Porto Alegre/RS\",\n      \"to\": \"Goiânia/GO\"\n    },\n    \"cargo\": {\n      \"type\": \"BAU\",\n      \"units\": 2,\n      \"weight\": \"10,5 t\"\n    },\n    \"price\": 4600,\n    \"pickup_date\": \"2026-04-21T08:00:00Z\",\n    \"status\": \"cancelada\"\n  }\n}",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem": "Porto Alegre/RS",
    "destino": "Goiânia/GO",
    "tipo_carga": "BAU",
    "qtd_unidades": "2",
    "peso": "10,5 t",
    "valor_frete": "4600",
    "data_coleta": "2026-04-21T08:00:00Z",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 10500.0,
    "valor_frete": 4600.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0024",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-16T14:48:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0024\",\n    \"customer\": {\n      \"name\": \"TRANSPORTADORA RODOSUL LTDA\",\n      \"document\": \"15881399000134\"\n    },\n    \"route\": {\n      \"from\": \"POA/RS\",\n      \"to\": \"Belo Horizonte/MG\"\n    },\n    \"cargo\": {\n      \"type\": \"baú\",\n      \"units\": 3,\n      \"weight\": \"18,5 t\"\n    },\n    \"price\": \"11700.00\",\n    \"pickup_date\": \"2026-04-13T08:00:00Z\",\n    \"status\": \"CONCLUIDA\"\n  }\n}",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem": "POA/RS",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "baú",
    "qtd_unidades": "3",
    "peso": "18,5 t",
    "valor_frete": "11700.00",
    "data_coleta": "2026-04-13T08:00:00Z",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 18500.0,
    "valor_frete": 11700.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "API-0025",
   "canal": "api",
   "trecho": "{\n  \"evento\": \"demanda.criada\",\n  \"enviado_em\": \"2026-04-16T15:55:00-03:00\",\n  \"payload\": {\n    \"id\": \"API-0025\",\n    \"customer\": {\n      \"name\": \"AUTOMOTIVA PARANÁ VEÍCULOS S.A.\",\n      \"document\": \"86987973000181\"\n    },\n    \"route\": {\n      \"from\": \"Caxias do Sul/RS\",\n      \"to\": \"Rio de Janeiro/RJ\"\n    },\n    \"cargo\": {\n      \"type\": \"SIDER\",\n      \"units\": 3,\n      \"weight\": \"19000 kg\"\n    },\n    \"price\": \"10100.00\",\n    \"pickup_date\": \"2026-04-16\",\n    \"status\": \"nova\"\n  }\n}",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem": "Caxias do Sul/RS",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "SIDER",
    "qtd_unidades": "3",
    "peso": "19000 kg",
    "valor_frete": "10100.00",
    "data_coleta": "2026-04-16",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Caxias do Sul",
    "origem_uf": "RS",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "SIDER",
    "qtd_unidades": 3,
    "peso_kg": 19000.0,
    "valor_frete": 10100.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0001",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0001;LOCADORA ESTRELA DO OESTE LTDA;09114170000171;São Paulo/SP;Florianópolis/SC;GRANELEIRO;2;17000 kg;R$ 9.900,00;14/04/26;NOVO",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem": "São Paulo/SP",
    "destino": "Florianópolis/SC",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "2",
    "peso": "17000 kg",
    "valor_frete": "R$ 9.900,00",
    "data_coleta": "14/04/26",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Sao Paulo",
    "origem_uf": "SP",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 2,
    "peso_kg": 17000.0,
    "valor_frete": 9900.0,
    "data_coleta": "2026-04-14",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0002",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0002;CONCESSIONÁRIA VALE VERDE LTDA;75364556000166;Campinas/SP;Floripa/SC;FRIGORIFICO;3;14;4.800,00;23/04/26;aberta",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem": "Campinas/SP",
    "destino": "Floripa/SC",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "3",
    "peso": "14",
    "valor_frete": "4.800,00",
    "data_coleta": "23/04/26",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Campinas",
    "origem_uf": "SP",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 3,
    "peso_kg": 14000.0,
    "valor_frete": 4800.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0003",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0003;Campos Gerais;24.883.107;Cascavel/PR;FLORIANOPOLIS - SC;CEGONHA;2;2200;R$ 7.100,00;03/05/2026;em análise",
   "bruto": {
    "cliente_nome": "Campos Gerais",
    "cnpj": "24.883.107",
    "origem": "Cascavel/PR",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "2",
    "peso": "2200",
    "valor_frete": "R$ 7.100,00",
    "data_coleta": "03/05/2026",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "Campos Gerais",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 2,
    "peso_kg": 2200.0,
    "valor_frete": 7100.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0004",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0004;MÁQUINAS E IMPLEMENTOS TOLEDO LTDA;81518844000120;CASCAVEL - PR;São Paulo/SP;cegonheira;9;13,5 ton;8500;02/05/2026;EM_ANALISE",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem": "CASCAVEL - PR",
    "destino": "São Paulo/SP",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "9",
    "peso": "13,5 ton",
    "valor_frete": "8500",
    "data_coleta": "02/05/2026",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 9,
    "peso_kg": 13500.0,
    "valor_frete": 8500.0,
    "data_coleta": "2026-05-02",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0005",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0005;MARCOS PARTICULAR;;cascavel  pr;SAO PAULO - SP;Cegonha;10;11000;R$ 3.900,00;17/04/26;cotada",
   "bruto": {
    "cliente_nome": "MARCOS PARTICULAR",
    "cnpj": null,
    "origem": "cascavel  pr",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "10",
    "peso": "11000",
    "valor_frete": "R$ 3.900,00",
    "data_coleta": "17/04/26",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "MARCOS PARTICULAR",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 10,
    "peso_kg": 11000.0,
    "valor_frete": 3900.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.444
   }
  },
  {
   "id": "CSV-0006",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0006;PAMPA GESTÃO DE FROTAS LTDA;72940557000113;Curitiba/PR;Sampa/SP;PRANCHA;1;1,6 ton;5800;05/05/26;COTADO",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "Curitiba/PR",
    "destino": "Sampa/SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "1",
    "peso": "1,6 ton",
    "valor_frete": "5800",
    "data_coleta": "05/05/26",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 1,
    "peso_kg": 1600.0,
    "valor_frete": 5800.0,
    "data_coleta": "2026-05-05",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0007",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0007;LEILÕES IGUAÇU VEÍCULOS EIRELI;61.698.716/0001-07;CURITIBA - PR;Curitiba/PR;prancha baixa;3;4500;4.900,00;16/04/2026;aprovada",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "CURITIBA - PR",
    "destino": "Curitiba/PR",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "3",
    "peso": "4500",
    "valor_frete": "4.900,00",
    "data_coleta": "16/04/2026",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 4500.0,
    "valor_frete": 4900.0,
    "data_coleta": "2026-04-16",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0008",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0008;TRANSPORTADORA RODOSUL LTDA;15881399000134;Ctba/PR;CURITIBA - PR;GUINCHO;0;1500;14.600,00;20/04/26;agendada",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem": "Ctba/PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "0",
    "peso": "1500",
    "valor_frete": "14.600,00",
    "data_coleta": "20/04/26",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": null,
    "peso_kg": 1500.0,
    "valor_frete": 14600.0,
    "data_coleta": "2026-04-20",
    "data_ambigua": false,
    "status": "AGENDADA"
   },
   "motivo": "quantidade de unidades invalida",
   "vinculo": null
  },
  {
   "id": "CSV-0009",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0009;AUTOMOTIVA PARANÁ VEÍCULOS S.A.;86987973000181;Toledo/PR;Porto Alegre/RS;Guincho/plataforma;2;3100;13.700,00;21/04/2026;cancelada",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem": "Toledo/PR",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "2",
    "peso": "3100",
    "valor_frete": "13.700,00",
    "data_coleta": "21/04/2026",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 2,
    "peso_kg": 3100.0,
    "valor_frete": 13700.0,
    "data_coleta": "2026-04-21",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0010",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0010;ESTRELA DO OESTE;;TOLEDO - PR;POA/RS;BAU;3;21500;4.900,00;13/04/2026;CONCLUIDA",
   "bruto": {
    "cliente_nome": "ESTRELA DO OESTE",
    "cnpj": null,
    "origem": "TOLEDO - PR",
    "destino": "POA/RS",
    "tipo_carga": "BAU",
    "qtd_unidades": "3",
    "peso": "21500",
    "valor_frete": "4.900,00",
    "data_coleta": "13/04/2026",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "ESTRELA DO OESTE",
    "cnpj": null,
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "BAU",
    "qtd_unidades": 3,
    "peso_kg": 21500.0,
    "valor_frete": 4900.0,
    "data_coleta": "2026-04-13",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0011",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0011;CONCESSIONÁRIA VALE VERDE LTDA;75364556000166;Foz do Iguaçu/PR;Campo Grande/MS;baú;2;14500;R$ 14.600,00;09/05/2026;nova",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem": "Foz do Iguaçu/PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": "baú",
    "qtd_unidades": "2",
    "peso": "14500",
    "valor_frete": "R$ 14.600,00",
    "data_coleta": "09/05/2026",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 14500.0,
    "valor_frete": 14600.0,
    "data_coleta": "2026-05-09",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0012",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0012;Revenda Sul Motos;;FOZ DO IGUACU - PR;Goiânia/GO;SIDER;2;8000;14.500,00;04/05/2026;NOVO",
   "bruto": {
    "cliente_nome": "Revenda Sul Motos",
    "cnpj": null,
    "origem": "FOZ DO IGUACU - PR",
    "destino": "Goiânia/GO",
    "tipo_carga": "SIDER",
    "qtd_unidades": "2",
    "peso": "8000",
    "valor_frete": "14.500,00",
    "data_coleta": "04/05/2026",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "Revenda Sul Motos",
    "cnpj": null,
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "SIDER",
    "qtd_unidades": 2,
    "peso_kg": 8000.0,
    "valor_frete": 14500.0,
    "data_coleta": "2026-05-04",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.489
   }
  },
  {
   "id": "CSV-0013",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0013;COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS;24883107000193;Foz/PR;Belo Horizonte/MG;GRANELEIRO;3;22500;9.800,00;28/04/2026;aberta",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem": "Foz/PR",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "3",
    "peso": "22500",
    "valor_frete": "9.800,00",
    "data_coleta": "28/04/2026",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 3,
    "peso_kg": 22500.0,
    "valor_frete": 9800.0,
    "data_coleta": "2026-04-28",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0014",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0014;MÁQUINAS E IMPLEMENTOS TOLEDO LTDA;81518844000120;Maringá/PR;Rio de Janeiro/RJ;FRIGORIFICO;1;24;5900;07/05/2026;em análise",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem": "Maringá/PR",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "1",
    "peso": "24",
    "valor_frete": "5900",
    "data_coleta": "07/05/2026",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 1,
    "peso_kg": 24000.0,
    "valor_frete": 5900.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0015",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0015;Frota Pampa;72.940.557;MARINGA - PR;Florianópolis/SC;CEGONHA;11;14;2200;27/04/2026;EM_ANALISE",
   "bruto": {
    "cliente_nome": "Frota Pampa",
    "cnpj": "72.940.557",
    "origem": "MARINGA - PR",
    "destino": "Florianópolis/SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "11",
    "peso": "14",
    "valor_frete": "2200",
    "data_coleta": "27/04/2026",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "Frota Pampa",
    "cnpj": null,
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 11,
    "peso_kg": 14000.0,
    "valor_frete": 2200.0,
    "data_coleta": "2026-04-27",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0016",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0016;LEILÕES IGUAÇU VEÍCULOS EIRELI;61698716000107;Londrina/PR;Floripa/SC;cegonheira;10;12500 kg;8400;07/05/26;cotada",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem": "Londrina/PR",
    "destino": "Floripa/SC",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "10",
    "peso": "12500 kg",
    "valor_frete": "8400",
    "data_coleta": "07/05/26",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 10,
    "peso_kg": 12500.0,
    "valor_frete": 8400.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0017",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0017;TRANSPORTADORA RODOSUL LTDA;15.881.399/0001-34;Ponta Grossa/PR;FLORIANOPOLIS - SC;Cegonha;7;11200 kg;11500;30/04/2026;COTADO",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "Ponta Grossa/PR",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "7",
    "peso": "11200 kg",
    "valor_frete": "11500",
    "data_coleta": "30/04/2026",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 7,
    "peso_kg": 11200.0,
    "valor_frete": 11500.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0018",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0018;Logistica Nova Era;90.044.224/0001-90;PONTA GROSSA - PR;São Paulo/SP;PRANCHA;3;3600;R$ 4.800,00;08/05/26;aprovada",
   "bruto": {
    "cliente_nome": "Logistica Nova Era",
    "cnpj": "90.044.224/0001-90",
    "origem": "PONTA GROSSA - PR",
    "destino": "São Paulo/SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "3",
    "peso": "3600",
    "valor_frete": "R$ 4.800,00",
    "data_coleta": "08/05/26",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "Logistica Nova Era",
    "cnpj": null,
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 3600.0,
    "valor_frete": 4800.0,
    "data_coleta": "2026-05-08",
    "data_ambigua": true,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.5
   }
  },
  {
   "id": "CSV-0019",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0019;AUTOMOTIVA PARANÁ VEÍCULOS S.A.;86.987.973/0001-81;Chapecó/SC;SAO PAULO - SP;prancha baixa;1;1200 kg;2.800,00;07/05/26;agendada",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "Chapecó/SC",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "1",
    "peso": "1200 kg",
    "valor_frete": "2.800,00",
    "data_coleta": "07/05/26",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 1,
    "peso_kg": 1200.0,
    "valor_frete": 2800.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0020",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0020;LOCADORA ESTRELA DO OESTE LTDA;09114170000171;CHAPECO - SC;Sampa/SP;GUINCHO;3;3,3 ton;9.100,00;20/04/26;cancelada",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem": "CHAPECO - SC",
    "destino": "Sampa/SP",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "3",
    "peso": "3,3 ton",
    "valor_frete": "9.100,00",
    "data_coleta": "20/04/26",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Chapeco",
    "origem_uf": "SC",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 3,
    "peso_kg": 3300.0,
    "valor_frete": 9100.0,
    "data_coleta": "2026-04-20",
    "data_ambigua": false,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0021",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0021;CONCESSIONÁRIA VALE VERDE LTDA;75.364.556/0001-66;Joinville/SC;Curitiba/PR;Guincho/plataforma;-1;1;R$ 5.200,00;05/05/2026;CONCLUIDA",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75.364.556/0001-66",
    "origem": "Joinville/SC",
    "destino": "Curitiba/PR",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "-1",
    "peso": "1",
    "valor_frete": "R$ 5.200,00",
    "data_coleta": "05/05/2026",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Joinville",
    "origem_uf": "SC",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": null,
    "peso_kg": 1000.0,
    "valor_frete": 5200.0,
    "data_coleta": "2026-05-05",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": "quantidade de unidades invalida",
   "vinculo": null
  },
  {
   "id": "CSV-0022",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0022;COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS;24.883.107/0001-93;Porto Alegre/RS;CURITIBA - PR;BAU;1;17000 kg;8000;23/04/2026;nova",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24.883.107/0001-93",
    "origem": "Porto Alegre/RS",
    "destino": "CURITIBA - PR",
    "tipo_carga": "BAU",
    "qtd_unidades": "1",
    "peso": "17000 kg",
    "valor_frete": "8000",
    "data_coleta": "23/04/2026",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "BAU",
    "qtd_unidades": 1,
    "peso_kg": 17000.0,
    "valor_frete": 8000.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0023",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0023;IMPLEMENTOS TOLEDO;81.518.844;POA/RS;Porto Alegre/RS;baú;1;19500 kg;12500;19/04/26;NOVO",
   "bruto": {
    "cliente_nome": "IMPLEMENTOS TOLEDO",
    "cnpj": "81.518.844",
    "origem": "POA/RS",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "baú",
    "qtd_unidades": "1",
    "peso": "19500 kg",
    "valor_frete": "12500",
    "data_coleta": "19/04/26",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "IMPLEMENTOS TOLEDO",
    "cnpj": null,
    "origem_cidade": "Porto Alegre",
    "origem_uf": "RS",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "BAU",
    "qtd_unidades": 1,
    "peso_kg": 19500.0,
    "valor_frete": 12500.0,
    "data_coleta": "2026-04-19",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0024",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0024;PAMPA GESTÃO DE FROTAS LTDA;72940557000113;Caxias do Sul/RS;POA/RS;SIDER;1;18;5.500,00;30/04/26;aberta",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem": "Caxias do Sul/RS",
    "destino": "POA/RS",
    "tipo_carga": "SIDER",
    "qtd_unidades": "1",
    "peso": "18",
    "valor_frete": "5.500,00",
    "data_coleta": "30/04/26",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Caxias do Sul",
    "origem_uf": "RS",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "SIDER",
    "qtd_unidades": 1,
    "peso_kg": 18000.0,
    "valor_frete": 5500.0,
    "data_coleta": "2026-04-30",
    "data_ambigua": false,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0025",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0025;LEILÕES IGUAÇU VEÍCULOS EIRELI;61698716000107;São Paulo/SP;Campo Grande/MS;GRANELEIRO;3;12;R$ 9.400,00;03/05/2026;em análise",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem": "São Paulo/SP",
    "destino": "Campo Grande/MS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "3",
    "peso": "12",
    "valor_frete": "R$ 9.400,00",
    "data_coleta": "03/05/2026",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Sao Paulo",
    "origem_uf": "SP",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 3,
    "peso_kg": 12000.0,
    "valor_frete": 9400.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0026",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0026;AUTO CENTER BOM JESUS;;Campinas/SP;Goiânia/GO;FRIGORIFICO;3;12,0 ton;4.400,00;07/05/2026;EM_ANALISE",
   "bruto": {
    "cliente_nome": "AUTO CENTER BOM JESUS",
    "cnpj": null,
    "origem": "Campinas/SP",
    "destino": "Goiânia/GO",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "3",
    "peso": "12,0 ton",
    "valor_frete": "4.400,00",
    "data_coleta": "07/05/2026",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "AUTO CENTER BOM JESUS",
    "cnpj": null,
    "origem_cidade": "Campinas",
    "origem_uf": "SP",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 3,
    "peso_kg": 12000.0,
    "valor_frete": 4400.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": null,
    "razao_social": null,
    "metodo": "SEM_MATCH",
    "score": 0.345
   }
  },
  {
   "id": "CSV-0027",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0027;Rodosul;;Cascavel/PR;Belo Horizonte/MG;CEGONHA;3;4;R$ 6.700,00;03/05/2026;cotada",
   "bruto": {
    "cliente_nome": "Rodosul",
    "cnpj": null,
    "origem": "Cascavel/PR",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "3",
    "peso": "4",
    "valor_frete": "R$ 6.700,00",
    "data_coleta": "03/05/2026",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "Rodosul",
    "cnpj": null,
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 3,
    "peso_kg": 4000.0,
    "valor_frete": 6700.0,
    "data_coleta": "2026-05-03",
    "data_ambigua": true,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0028",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0028;AUTOMOTIVA PARANÁ VEÍCULOS S.A.;86.987.973/0001-81;CASCAVEL - PR;Rio de Janeiro/RJ;cegonheira;6;8;10800;25/04/26;COTADO",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "CASCAVEL - PR",
    "destino": "Rio de Janeiro/RJ",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "6",
    "peso": "8",
    "valor_frete": "10800",
    "data_coleta": "25/04/26",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Rio de Janeiro",
    "destino_uf": "RJ",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 6,
    "peso_kg": 8000.0,
    "valor_frete": 10800.0,
    "data_coleta": "2026-04-25",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "CSV-0029",
   "canal": "arquivo",
   "trecho": "COD;CLIENTE;CNPJ_CPF;ORIGEM;DESTINO;TIPO;QTD;PESO;VALOR;DT_COLETA;STATUS\nCSV-0029;LOCADORA ESTRELA DO OESTE LTDA;09.114.170/0001-71;cascavel  pr;Florianópolis/SC;Cegonha;6;8100 kg;13900;17/04/2026;aprovada",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "cascavel  pr",
    "destino": "Florianópolis/SC",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "6",
    "peso": "8100 kg",
    "valor_frete": "13900",
    "data_coleta": "17/04/2026",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Cascavel",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 6,
    "peso_kg": 8100.0,
    "valor_frete": 13900.0,
    "data_coleta": "2026-04-17",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0001",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0001 | CONCESSIONÁRIA VALE VERDE LTDA | 75.364.556/0001-66 | Curitiba/PR | Floripa/SC | PRANCHA | 2 | 2900 kg | R$ 11.100,00 | 02/05/2026 | agendada",
   "bruto": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75.364.556/0001-66",
    "origem": "Curitiba/PR",
    "destino": "Floripa/SC",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": "2",
    "peso": "2900 kg",
    "valor_frete": "R$ 11.100,00",
    "data_coleta": "02/05/2026",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "CONCESSIONÁRIA VALE VERDE LTDA",
    "cnpj": "75364556000166",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 2,
    "peso_kg": 2900.0,
    "valor_frete": 11100.0,
    "data_coleta": "2026-05-02",
    "data_ambigua": true,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0002",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0002 | COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS | 24.883.107/0001-93 | CURITIBA - PR | FLORIANOPOLIS - SC | prancha baixa | 3 | 4,8 t | R$ 9.800,00 | 07/05/2026 | cancelada",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24.883.107/0001-93",
    "origem": "CURITIBA - PR",
    "destino": "FLORIANOPOLIS - SC",
    "tipo_carga": "prancha baixa",
    "qtd_unidades": "3",
    "peso": "4,8 t",
    "valor_frete": "R$ 9.800,00",
    "data_coleta": "07/05/2026",
    "status": "cancelada"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Florianopolis",
    "destino_uf": "SC",
    "tipo_carga": "PRANCHA",
    "qtd_unidades": 3,
    "peso_kg": 4800.0,
    "valor_frete": 9800.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "CANCELADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0003",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0003 | MÁQUINAS E IMPLEMENTOS TOLEDO LTDA | 81.518.844/0001-20 | Ctba/PR | São Paulo/SP | GUINCHO | 3 | 3,5 t | R$ 13.300,00 | 27/04/2026 | CONCLUIDA",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81.518.844/0001-20",
    "origem": "Ctba/PR",
    "destino": "São Paulo/SP",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": "3",
    "peso": "3,5 t",
    "valor_frete": "R$ 13.300,00",
    "data_coleta": "27/04/2026",
    "status": "CONCLUIDA"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Curitiba",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 3,
    "peso_kg": 3500.0,
    "valor_frete": 13300.0,
    "data_coleta": "2026-04-27",
    "data_ambigua": false,
    "status": "CONCLUIDA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0004",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0004 | PAMPA GESTÃO DE FROTAS LTDA | 72.940.557/0001-13 | Toledo/PR | SAO PAULO - SP | Guincho/plataforma | 3 | 4,5 t | R$ 4.000,00 | 09/05/2026 | nova",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72.940.557/0001-13",
    "origem": "Toledo/PR",
    "destino": "SAO PAULO - SP",
    "tipo_carga": "Guincho/plataforma",
    "qtd_unidades": "3",
    "peso": "4,5 t",
    "valor_frete": "R$ 4.000,00",
    "data_coleta": "09/05/2026",
    "status": "nova"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "GUINCHO",
    "qtd_unidades": 3,
    "peso_kg": 4500.0,
    "valor_frete": 4000.0,
    "data_coleta": "2026-05-09",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0005",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0005 | LEILÕES IGUAÇU VEÍCULOS EIRELI | 61.698.716/0001-07 | TOLEDO - PR | Sampa/SP | BAU | 2 | 7000 kg | R$ 3.500,00 | 01/05/2026 | NOVO",
   "bruto": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61.698.716/0001-07",
    "origem": "TOLEDO - PR",
    "destino": "Sampa/SP",
    "tipo_carga": "BAU",
    "qtd_unidades": "2",
    "peso": "7000 kg",
    "valor_frete": "R$ 3.500,00",
    "data_coleta": "01/05/2026",
    "status": "NOVO"
   },
   "limpo": {
    "cliente_nome": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "cnpj": "61698716000107",
    "origem_cidade": "Toledo",
    "origem_uf": "PR",
    "destino_cidade": "Sao Paulo",
    "destino_uf": "SP",
    "tipo_carga": "BAU",
    "qtd_unidades": 2,
    "peso_kg": 7000.0,
    "valor_frete": 3500.0,
    "data_coleta": "2026-05-01",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI008",
    "razao_social": "LEILÕES IGUAÇU VEÍCULOS EIRELI",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0006",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0006 | TRANSPORTADORA RODOSUL LTDA | 15.881.399/0001-34 | Foz do Iguaçu/PR | Curitiba/PR | baú | 1 | 22500 kg | R$ 13.000,00 | 01/05/2026 | aberta",
   "bruto": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15.881.399/0001-34",
    "origem": "Foz do Iguaçu/PR",
    "destino": "Curitiba/PR",
    "tipo_carga": "baú",
    "qtd_unidades": "1",
    "peso": "22500 kg",
    "valor_frete": "R$ 13.000,00",
    "data_coleta": "01/05/2026",
    "status": "aberta"
   },
   "limpo": {
    "cliente_nome": "TRANSPORTADORA RODOSUL LTDA",
    "cnpj": "15881399000134",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "BAU",
    "qtd_unidades": 1,
    "peso_kg": 22500.0,
    "valor_frete": 13000.0,
    "data_coleta": "2026-05-01",
    "data_ambigua": true,
    "status": "NOVA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI001",
    "razao_social": "TRANSPORTADORA RODOSUL LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0007",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0007 | AUTOMOTIVA PARANÁ VEÍCULOS S.A. | 86.987.973/0001-81 | FOZ DO IGUACU - PR | CURITIBA - PR | SIDER | 2 | 26,5 t | R$ 13.100,00 | 02/05/2026 | em análise",
   "bruto": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86.987.973/0001-81",
    "origem": "FOZ DO IGUACU - PR",
    "destino": "CURITIBA - PR",
    "tipo_carga": "SIDER",
    "qtd_unidades": "2",
    "peso": "26,5 t",
    "valor_frete": "R$ 13.100,00",
    "data_coleta": "02/05/2026",
    "status": "em análise"
   },
   "limpo": {
    "cliente_nome": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "cnpj": "86987973000181",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Curitiba",
    "destino_uf": "PR",
    "tipo_carga": "SIDER",
    "qtd_unidades": 2,
    "peso_kg": 26500.0,
    "valor_frete": 13100.0,
    "data_coleta": "2026-05-02",
    "data_ambigua": true,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI002",
    "razao_social": "AUTOMOTIVA PARANÁ VEÍCULOS S.A.",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0008",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0008 | LOCADORA ESTRELA DO OESTE LTDA | 09.114.170/0001-71 | Foz/PR | Porto Alegre/RS | GRANELEIRO | 3 | 6500 kg | R$ 5.400,00 | 23/04/2026 | EM_ANALISE",
   "bruto": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09.114.170/0001-71",
    "origem": "Foz/PR",
    "destino": "Porto Alegre/RS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": "3",
    "peso": "6500 kg",
    "valor_frete": "R$ 5.400,00",
    "data_coleta": "23/04/2026",
    "status": "EM_ANALISE"
   },
   "limpo": {
    "cliente_nome": "LOCADORA ESTRELA DO OESTE LTDA",
    "cnpj": "09114170000171",
    "origem_cidade": "Foz do Iguacu",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "GRANELEIRO",
    "qtd_unidades": 3,
    "peso_kg": 6500.0,
    "valor_frete": 5400.0,
    "data_coleta": "2026-04-23",
    "data_ambigua": false,
    "status": "EM_ANALISE"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI003",
    "razao_social": "LOCADORA ESTRELA DO OESTE LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0009",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0009 | Vale Verde |  | Maringá/PR | POA/RS | FRIGORIFICO | 1 | 9000 kg | R$ 11.500,00 | 15/04/2026 | cotada",
   "bruto": {
    "cliente_nome": "Vale Verde",
    "cnpj": null,
    "origem": "Maringá/PR",
    "destino": "POA/RS",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": "1",
    "peso": "9000 kg",
    "valor_frete": "R$ 11.500,00",
    "data_coleta": "15/04/2026",
    "status": "cotada"
   },
   "limpo": {
    "cliente_nome": "Vale Verde",
    "cnpj": null,
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Porto Alegre",
    "destino_uf": "RS",
    "tipo_carga": "FRIGORIFICO",
    "qtd_unidades": 1,
    "peso_kg": 9000.0,
    "valor_frete": 11500.0,
    "data_coleta": "2026-04-15",
    "data_ambigua": false,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI004",
    "razao_social": "CONCESSIONÁRIA VALE VERDE LTDA",
    "metodo": "FUZZY",
    "score": 1.0
   }
  },
  {
   "id": "OC-0010",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0010 | COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS | 24.883.107/0001-93 | MARINGA - PR | Campo Grande/MS | CEGONHA | 2 | 3300 kg | R$ 3.300,00 | 07/05/2026 | COTADO",
   "bruto": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24.883.107/0001-93",
    "origem": "MARINGA - PR",
    "destino": "Campo Grande/MS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": "2",
    "peso": "3300 kg",
    "valor_frete": "R$ 3.300,00",
    "data_coleta": "07/05/2026",
    "status": "COTADO"
   },
   "limpo": {
    "cliente_nome": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "cnpj": "24883107000193",
    "origem_cidade": "Maringa",
    "origem_uf": "PR",
    "destino_cidade": "Campo Grande",
    "destino_uf": "MS",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 2,
    "peso_kg": 3300.0,
    "valor_frete": 3300.0,
    "data_coleta": "2026-05-07",
    "data_ambigua": true,
    "status": "COTADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI005",
    "razao_social": "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0011",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0011 | MÁQUINAS E IMPLEMENTOS TOLEDO LTDA | 81.518.844/0001-20 | Londrina/PR | Goiânia/GO | cegonheira | 7 | 11,6 t | R$ 5.400,00 | 22/04/2026 | aprovada",
   "bruto": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81.518.844/0001-20",
    "origem": "Londrina/PR",
    "destino": "Goiânia/GO",
    "tipo_carga": "cegonheira",
    "qtd_unidades": "7",
    "peso": "11,6 t",
    "valor_frete": "R$ 5.400,00",
    "data_coleta": "22/04/2026",
    "status": "aprovada"
   },
   "limpo": {
    "cliente_nome": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "cnpj": "81518844000120",
    "origem_cidade": "Londrina",
    "origem_uf": "PR",
    "destino_cidade": "Goiania",
    "destino_uf": "GO",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 7,
    "peso_kg": 11600.0,
    "valor_frete": 5400.0,
    "data_coleta": "2026-04-22",
    "data_ambigua": false,
    "status": "APROVADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI006",
    "razao_social": "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  },
  {
   "id": "OC-0012",
   "canal": "pdf",
   "trecho": "OC | Cliente | CNPJ | Origem | Destino | Tipo | Qtd | Peso | Valor | Coleta | Status\nOC-0012 | PAMPA GESTÃO DE FROTAS LTDA | 72.940.557/0001-13 | Ponta Grossa/PR | Belo Horizonte/MG | Cegonha | 5 | 6750 kg | R$ 13.400,00 | 05/05/2026 | agendada",
   "bruto": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72.940.557/0001-13",
    "origem": "Ponta Grossa/PR",
    "destino": "Belo Horizonte/MG",
    "tipo_carga": "Cegonha",
    "qtd_unidades": "5",
    "peso": "6750 kg",
    "valor_frete": "R$ 13.400,00",
    "data_coleta": "05/05/2026",
    "status": "agendada"
   },
   "limpo": {
    "cliente_nome": "PAMPA GESTÃO DE FROTAS LTDA",
    "cnpj": "72940557000113",
    "origem_cidade": "Ponta Grossa",
    "origem_uf": "PR",
    "destino_cidade": "Belo Horizonte",
    "destino_uf": "MG",
    "tipo_carga": "CEGONHA",
    "qtd_unidades": 5,
    "peso_kg": 6750.0,
    "valor_frete": 13400.0,
    "data_coleta": "2026-05-05",
    "data_ambigua": false,
    "status": "AGENDADA"
   },
   "motivo": null,
   "vinculo": {
    "cliente_id": "CLI007",
    "razao_social": "PAMPA GESTÃO DE FROTAS LTDA",
    "metodo": "CNPJ",
    "score": 1.0
   }
  }
 ],
 "arquivos": [
  {
   "nome": "base_final.csv",
   "caminho": "arquivos/base_final.csv",
   "tipo": "saida"
  },
  {
   "nome": "descartes.csv",
   "caminho": "arquivos/descartes.csv",
   "tipo": "saida"
  },
  {
   "nome": "curadoria_sem_match.csv",
   "caminho": "arquivos/curadoria_sem_match.csv",
   "tipo": "saida"
  },
  {
   "nome": "01_brutos_no_schema.csv",
   "caminho": "arquivos/01_brutos_no_schema.csv",
   "tipo": "saida"
  },
  {
   "nome": "02_auditoria_cardinalidade.csv",
   "caminho": "arquivos/02_auditoria_cardinalidade.csv",
   "tipo": "saida"
  },
  {
   "nome": "02_auditoria_formatos.csv",
   "caminho": "arquivos/02_auditoria_formatos.csv",
   "tipo": "saida"
  },
  {
   "nome": "03_calibracao_limiar.csv",
   "caminho": "arquivos/03_calibracao_limiar.csv",
   "tipo": "saida"
  },
  {
   "nome": "03_scores_fuzzy.csv",
   "caminho": "arquivos/03_scores_fuzzy.csv",
   "tipo": "saida"
  },
  {
   "nome": "relatorio.txt",
   "caminho": "arquivos/relatorio.txt",
   "tipo": "saida"
  },
  {
   "nome": "conversa_exportada.txt",
   "caminho": "arquivos/brutos/conversa_exportada.txt",
   "tipo": "bruto"
  },
  {
   "nome": "email_01.html",
   "caminho": "arquivos/brutos/email_01.html",
   "tipo": "bruto"
  },
  {
   "nome": "webhook_demandas.json",
   "caminho": "arquivos/brutos/webhook_demandas.json",
   "tipo": "bruto"
  },
  {
   "nome": "fretes_legado.csv",
   "caminho": "arquivos/brutos/fretes_legado.csv",
   "tipo": "bruto"
  },
  {
   "nome": "ordens_coleta.pdf",
   "caminho": "arquivos/brutos/ordens_coleta.pdf",
   "tipo": "bruto"
  }
 ]
};
