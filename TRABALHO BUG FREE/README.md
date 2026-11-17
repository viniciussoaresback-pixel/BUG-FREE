# BUG FREE - HUB Integrador de Dados

Projeto Univel x Rodomax - Data Science e Inteligencia Artificial, 4º periodo.
Prof. Lucas Soares da Silva.

Alessandro L. Lorensi, Eduardo Reway, João G. Reis, Kauã Foscarini, Vinicius Soares.

MVP do motor que recebe as demandas de frete dos 5 canais (WhatsApp, e-mail, portal/API,
planilha legado e ordem de coleta em PDF), joga tudo num esquema unico, limpa, descarta o
que nao presta (anotando o motivo) e vincula cada demanda ao cadastro do CRM.

Fica de fora: o modelo de IA, interface, integracao com o ERP e carga incremental.

## Como rodar

```
cd "TRABALHO BUG FREE"
pip install -r requirements.txt
python main.py
```

Os resultados vao para a pasta `output/`. Para rodar os testes: `python -m pytest`.

## Estrutura

```
raw/                     dados brutos, um formato por canal
  whatsapp/              conversa exportada (.txt), texto livre ou template #DEMANDA
  email/                 e-mails com tabela HTML
  api/                   eventos de webhook (.json)
  planilha/              CSV antigo em latin-1, separado por ;
  ordem_coleta/          PDF com tabela
crm/clientes.csv         cadastro de clientes (8)

schema.py                esquema unico (o "contrato" entre as etapas)
parsers.py               02 - leitores: cada canal vira registro no schema, sem limpar
auditoria.py             03 - mede a bagunca antes de corrigir
normalizacao.py          04 - limpeza e exclusao direcionada
crm.py                   05 - vinculo por CNPJ e depois por razao social (fuzzy)
main.py                  roda tudo e gera a base final (06)
tests/                   testes das regras de limpeza
ferramentas/             script que gerou os dados ficticios de raw/
```

Parser nao limpa e limpador nao parseia. O unico ponto em comum entre as etapas e o
`schema.py`. Para entrar um canal novo basta escrever a funcao de leitura e colocar em
`LEITORES` no `parsers.py`. O PDF foi o ultimo canal que fizemos e nao precisou mudar nada
no `normalizacao.py`.

## Saidas (`output/`)

| arquivo | o que tem |
|---|---|
| `01_brutos_no_schema.csv` | os 113 registros como sairam dos leitores, ainda sujos |
| `02_auditoria_cardinalidade.csv` | valores distintos x valores reais por coluna |
| `02_auditoria_formatos.csv` | de quantos jeitos cada campo foi escrito |
| `02_auditoria_nulos_por_canal.csv` | campos vazios por canal |
| `descartes.csv` | id, canal e motivo de cada registro excluido |
| `03_calibracao_limiar.csv` | quantos vinculos o fuzzy faz em cada limiar |
| `03_scores_fuzzy.csv` | melhor candidato e nota de cada demanda sem CNPJ |
| `base_final.csv` | base unificada (103 registros) |
| `curadoria_sem_match.csv` | demandas sem cliente, para alguem revisar na mao |
| `relatorio.txt` | resumo do que o `main.py` imprime |

## Resultado do lote

| etapa | registros |
|---|---|
| brutos ingeridos | 113 (WhatsApp 25, e-mail 20, API 27, planilha 29, PDF 12) |
| descartados com motivo | 10 (6 rota incompleta, 2 qtd invalida, 2 duplicata) |
| base final | 103 (91,2% de aproveitamento) |
| vinculados ao CRM | 93 (78 por CNPJ, 15 por nome) |
| sem vinculo, para curadoria | 10 |

Auditoria antes da limpeza:

| coluna | distintos | reais |
|---|---|---|
| origem | 24 | 13 |
| destino | 14 | 8 |
| tipo_carga | 12 | 7 |
| status | 11 | 7 |

## Decisoes que tomamos

- **CNPJ truncado ou com digito errado vira nulo.** Um CNPJ pela metade pode ligar a demanda
  no cliente errado, e isso cai no faturamento. Sem CNPJ a demanda ainda tenta o nome, e se
  nao achar vai para a curadoria.
- **Peso sem unidade e menor que 100 e tonelada.** Ninguem pede frete de 12 kg.
- **Data:** se um dos numeros passa de 12 a leitura e certa (04/25/2026 so pode ser mes/dia).
  Se os dois sao ate 12 (05/04/2026) nao da para saber; assumimos dia/mes e marcamos a
  coluna `data_ambigua`.
- **Status vazio vira NOVA.** No WhatsApp ninguem manda status.
- **Cidade fora da lista de referencia nao e inventada**; o registro cai como rota nao parseavel.
- **Limiar do fuzzy em 0,75.** Na calibracao o nome errado mais parecido deu 0,57
  ("Transportes Boa Vista" contra a Rodosul) e o nome certo menos parecido deu 0,78
  ("Transp Rodosul"). Com 0,80 a gente perdia esse vinculo. Com 0,55 ou menos comeca a
  vincular cliente errado.
- **Duplicata:** o portal reenvia o webhook quando da timeout. Fica o primeiro, o reenvio
  vai para o `descartes.csv`.

## Limitacoes

1. O parser de texto livre do WhatsApp e feito com regex. Mensagem fora do padrao nao traz
   rota completa (sao os 6 descartes por rota). Proximo passo: extracao com NER ou LLM,
   validando a saida contra o schema.
2. O limiar foi calibrado com 8 clientes. Com centenas vai precisar de pares rotulados e
   curva de precisao/recall.
3. Data ambigua nao tem solucao no codigo. O certo e cada canal informar o formato (locale).
4. Nao tem carga incremental: todo lote e reprocessado. Em producao precisaria de
   marca d'agua e idempotencia por `id_demanda`.

## Sobre os dados

Os arquivos em `raw/` e `crm/` sao ficticios, montados para reproduzir os problemas que
vimos nos canais (grafias diferentes, formatos misturados, CNPJ cortado, reenvio de webhook).
Nenhum dado real de cliente esta no repositorio. Eles sao gerados pelo
`ferramentas/gerar_brutos.py` (precisa do `fpdf2` para montar o PDF).

Os nomes das empresas sao inventados. Os CNPJs foram sorteados so para passar na conta do
digito verificador; se algum coincidir com o de uma empresa de verdade, e por acaso e nao
tem relacao nenhuma com ela.
