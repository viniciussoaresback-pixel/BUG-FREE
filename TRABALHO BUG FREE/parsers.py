# Leitores dos 5 canais.
# Regra: parser NAO limpa. Ele so acha o dado e coloca no campo certo do schema,
# do jeito que veio. Toda correcao fica no normalizacao.py.

import csv
import json
import re
from html.parser import HTMLParser
from pathlib import Path

import pdfplumber

from schema import registro_vazio

PASTA_RAW = Path(__file__).parent / "raw"


def _texto(valor):
    """None para vazio, senao a string sem espaco nas pontas."""
    if valor is None:
        return None
    valor = str(valor).strip()
    return valor or None


def _mapear(linha, mapa, canal, campo_id):
    """Aplica um de-para coluna_da_fonte -> campo_do_schema."""
    reg = registro_vazio(_texto(linha.get(campo_id)), canal)
    for coluna, campo in mapa.items():
        if coluna in linha:
            reg[campo] = _texto(linha[coluna])
    return reg


# ---------------------------------------------------------------- 1. WhatsApp
# Conversa exportada pelo celular. So interessam as linhas do cliente.
# Ex.: 12/04/2026 09:14 - Cliente: WA-0007 - oi, Frota Pampa aqui. preciso levar...

LINHA_WA = re.compile(r"^(\d{2}/\d{2}/\d{4}) (\d{2}:\d{2}) - Cliente: (WA-\d{4}) - (.*)$")

# texto livre
RE_ROTA = re.compile(
    r"\d+\s+(?:carros|veiculos|veículos|unidades)\s+(?:saindo\s+)?de\s+(.+?)\s+(?:pra|para)\s+(.+?)[,.]",
    re.I,
)
RE_SO_DESTINO = re.compile(r"\b(?:pra|para)\s+(.+?)[,.?]", re.I)
RE_SO_ORIGEM = re.compile(r"saindo de\s+(.+?)(?:\s+essa|\s+semana|[?,.]|$)", re.I)
RE_QTD = re.compile(r"(-?\d+)\s+(?:carros|veiculos|veículos|unidades)", re.I)
RE_VALOR = re.compile(r"(?:fecha em|pago|valor)\s+(R\$\s?[\d.,]*\d|[\d.,]*\d+k?)", re.I)
RE_DATA = re.compile(r"coleta\s+(?:dia\s+)?(\d{1,2}[/-]\w{2,3}[/-]\d{2,4})", re.I)
RE_NOME = [
    re.compile(r"^(?:oi|olá|ola),?\s+(.+?)\s+aqui\b", re.I),
    re.compile(r"aqui (?:é|e) da\s+(.+?)[,.!]", re.I),
    re.compile(r"^(?:boa tarde|bom dia),?\s+(.+?)\s+falando", re.I),
]

# template "#DEMANDA | Empresa: X | CNPJ: Y | ..."
CHAVES_TEMPLATE = {
    "empresa": "cliente_nome",
    "cnpj": "cnpj",
    "origem": "origem",
    "destino": "destino",
    "tipo": "tipo_carga",
    "qtd": "qtd_unidades",
    "peso": "peso",
    "valor": "valor_frete",
    "coleta": "data_coleta",
}


def _wa_template(msg, reg):
    for parte in msg.split("|"):
        chave, _, valor = parte.partition(":")
        campo = CHAVES_TEMPLATE.get(chave.strip().lower())
        if campo:
            reg[campo] = _texto(valor)


def _wa_texto_livre(msg, reg):
    for regex in RE_NOME:
        m = regex.search(msg)
        if m:
            reg["cliente_nome"] = _texto(m.group(1))
            break

    m = RE_ROTA.search(msg)
    if m:
        reg["origem"], reg["destino"] = _texto(m.group(1)), _texto(m.group(2))
    else:
        # mensagem incompleta: tenta pegar pelo menos um lado da rota
        m = RE_SO_ORIGEM.search(msg)
        if m:
            reg["origem"] = _texto(m.group(1))
        else:
            m = RE_SO_DESTINO.search(msg)
            if m:
                reg["destino"] = _texto(m.group(1))

    for campo, regex in (("qtd_unidades", RE_QTD), ("valor_frete", RE_VALOR), ("data_coleta", RE_DATA)):
        m = regex.search(msg)
        if m:
            reg[campo] = _texto(m.group(1))


def ler_whatsapp(caminho=PASTA_RAW / "whatsapp" / "conversa_exportada.txt"):
    registros = []
    with open(caminho, encoding="utf-8") as arq:
        for linha in arq:
            m = LINHA_WA.match(linha.strip())
            if not m:
                continue  # atendente, aviso do sistema, etc
            id_wa, msg = m.group(3), m.group(4)
            if "<Mídia oculta>" in msg:
                continue  # foto/audio, nao tem como ler
            reg = registro_vazio(id_wa, "whatsapp")
            if msg.upper().startswith("#DEMANDA"):
                _wa_template(msg, reg)
            else:
                _wa_texto_livre(msg, reg)
            registros.append(reg)
    return registros


# ---------------------------------------------------------------- 2. E-mail
# Cada e-mail tem uma tabela HTML de fretes.


class _LeitorTabelaHTML(HTMLParser):
    def __init__(self):
        super().__init__()
        self.linhas = []
        self._linha = None
        self._celula = None

    def handle_starttag(self, tag, attrs):
        if tag == "tr":
            self._linha = []
        elif tag in ("td", "th"):
            self._celula = ""

    def handle_endtag(self, tag):
        if tag in ("td", "th") and self._linha is not None:
            self._linha.append(self._celula.strip())
            self._celula = None
        elif tag == "tr" and self._linha:
            self.linhas.append(self._linha)
            self._linha = None

    def handle_data(self, data):
        if self._celula is not None:
            self._celula += data


MAPA_EMAIL = {
    "Cliente": "cliente_nome",
    "CNPJ": "cnpj",
    "Origem": "origem",
    "Destino": "destino",
    "Tipo carga": "tipo_carga",
    "Qtd": "qtd_unidades",
    "Peso": "peso",
    "Frete": "valor_frete",
    "Data coleta": "data_coleta",
    "Situação": "status",
}


def ler_emails(pasta=PASTA_RAW / "email"):
    registros = []
    for arquivo in sorted(pasta.glob("*.html")):
        leitor = _LeitorTabelaHTML()
        leitor.feed(arquivo.read_text(encoding="utf-8"))
        cabecalho, *linhas = leitor.linhas
        for linha in linhas:
            registros.append(_mapear(dict(zip(cabecalho, linha)), MAPA_EMAIL, "email", "Nº Pedido"))
    return registros


# ---------------------------------------------------------------- 3. Portal / API
# Eventos de webhook salvos em JSON. O mesmo id pode chegar mais de uma vez (reenvio).


def ler_api(caminho=PASTA_RAW / "api" / "webhook_demandas.json"):
    registros = []
    with open(caminho, encoding="utf-8") as arq:
        eventos = json.load(arq)
    for ev in eventos:
        p = ev.get("payload", {})
        cliente, rota, carga = p.get("customer", {}), p.get("route", {}), p.get("cargo", {})
        reg = registro_vazio(_texto(p.get("id")), "api")
        reg["cliente_nome"] = _texto(cliente.get("name"))
        reg["cnpj"] = _texto(cliente.get("document"))
        reg["origem"] = _texto(rota.get("from"))
        reg["destino"] = _texto(rota.get("to"))
        reg["tipo_carga"] = _texto(carga.get("type"))
        reg["qtd_unidades"] = _texto(carga.get("units"))
        reg["peso"] = _texto(carga.get("weight"))
        reg["valor_frete"] = _texto(p.get("price"))
        reg["data_coleta"] = _texto(p.get("pickup_date"))
        reg["status"] = _texto(p.get("status"))
        registros.append(reg)
    return registros


# ---------------------------------------------------------------- 4. Planilha legado
# CSV antigo, separado por ";" e salvo em latin-1 (Excel antigo).

MAPA_CSV = {
    "CLIENTE": "cliente_nome",
    "CNPJ_CPF": "cnpj",
    "ORIGEM": "origem",
    "DESTINO": "destino",
    "TIPO": "tipo_carga",
    "QTD": "qtd_unidades",
    "PESO": "peso",
    "VALOR": "valor_frete",
    "DT_COLETA": "data_coleta",
    "STATUS": "status",
}


def ler_planilha(caminho=PASTA_RAW / "planilha" / "fretes_legado.csv"):
    with open(caminho, encoding="latin-1", newline="") as arq:
        return [_mapear(linha, MAPA_CSV, "arquivo", "COD") for linha in csv.DictReader(arq, delimiter=";")]


# ---------------------------------------------------------------- 5. Ordem de coleta (PDF)

MAPA_PDF = {
    "Cliente": "cliente_nome",
    "CNPJ": "cnpj",
    "Origem": "origem",
    "Destino": "destino",
    "Tipo": "tipo_carga",
    "Qtd": "qtd_unidades",
    "Peso": "peso",
    "Valor": "valor_frete",
    "Coleta": "data_coleta",
    "Status": "status",
}


def ler_pdf(caminho=PASTA_RAW / "ordem_coleta" / "ordens_coleta.pdf"):
    registros = []
    with pdfplumber.open(caminho) as pdf:
        for pagina in pdf.pages:
            for tabela in pagina.extract_tables():
                # celula quebrada em duas linhas vem com \n
                tabela = [[(c or "").replace("\n", " ") for c in linha] for linha in tabela]
                cabecalho, *linhas = tabela
                for linha in linhas:
                    registros.append(_mapear(dict(zip(cabecalho, linha)), MAPA_PDF, "pdf", "OC"))
    return registros


# ----------------------------------------------------------------

LEITORES = {
    "whatsapp": ler_whatsapp,
    "email": ler_emails,
    "api": ler_api,
    "arquivo": ler_planilha,
    "pdf": ler_pdf,
}


def ler_todos():
    registros = []
    for leitor in LEITORES.values():
        registros.extend(leitor())
    return registros
