# Gera os arquivos brutos (ficticios) dos 5 canais + o cadastro do CRM.
# Uso (na pasta do projeto): pip install fpdf2  e  python ferramentas/gerar_brutos.py .
import csv
import json
import random
import sys
from datetime import date, timedelta
from pathlib import Path

from fpdf import FPDF

random.seed(2026)
PROJ = Path(sys.argv[1])
RAW = PROJ / "raw"


# ---------------------------------------------------------------- CNPJ
def _dv(nums):
    pesos = list(range(len(nums) - 7, 1, -1)) + list(range(9, 1, -1))
    r = sum(n * p for n, p in zip(nums, pesos)) % 11
    return 0 if r < 2 else 11 - r


def cnpj_com_dv(base8):
    n = [int(c) for c in base8 + "0001"]
    n.append(_dv(n))
    n.append(_dv(n))
    return "".join(map(str, n))


def novo_cnpj():
    return cnpj_com_dv("".join(str(random.randint(0, 9)) for _ in range(8)))


def mascara(c):
    return f"{c[:2]}.{c[2:5]}.{c[5:8]}/{c[8:12]}-{c[12:]}"


# ---------------------------------------------------------------- CRM
CRM = [
    ("CLI001", "TRANSPORTADORA RODOSUL LTDA", "Cascavel", "PR", ["Rodosul", "Transp Rodosul"]),
    ("CLI002", "AUTOMOTIVA PARANÁ VEÍCULOS S.A.", "Curitiba", "PR", ["Automotiva Parana", "Automotiva Paraná Veículos"]),
    ("CLI003", "LOCADORA ESTRELA DO OESTE LTDA", "Toledo", "PR", ["Locadora Estrela", "Estrela do Oeste"]),
    ("CLI004", "CONCESSIONÁRIA VALE VERDE LTDA", "Maringá", "PR", ["Vale Verde", "Concessionaria Vale Verde"]),
    ("CLI005", "COOPERATIVA AGROINDUSTRIAL CAMPOS GERAIS", "Ponta Grossa", "PR", ["Cooperativa Campos Gerais", "Campos Gerais"]),
    ("CLI006", "MÁQUINAS E IMPLEMENTOS TOLEDO LTDA", "Toledo", "PR", ["Implementos Toledo", "Maquinas Implementos Toledo"]),
    ("CLI007", "PAMPA GESTÃO DE FROTAS LTDA", "Porto Alegre", "RS", ["Frota Pampa", "Pampa Frotas"]),
    ("CLI008", "LEILÕES IGUAÇU VEÍCULOS EIRELI", "Foz do Iguaçu", "PR", ["Leiloes Iguacu Veiculos", "Iguaçu Leilões"]),
]
CNPJS = {c[0]: cnpj_com_dv("24883107" if c[0] == "CLI005" else "".join(str(random.randint(0, 9)) for _ in range(8))) for c in CRM}

SEM_CADASTRO = [
    "Transportes Boa Vista", "Agropecuaria Santa Rita", "Marcos Particular", "Revenda Sul Motos",
    "Logistica Nova Era", "Auto Center Bom Jesus", "Fazenda Sao Jorge", "Mecanica Irmaos Kuhn",
    "Distribuidora Pecas Norte", "Tratores Planalto",
]

# ---------------------------------------------------------------- grafias (variantes)
ORIGENS = [
    "Cascavel/PR", "CASCAVEL - PR", "cascavel  pr",
    "Curitiba/PR", "CURITIBA - PR", "Ctba/PR",
    "Toledo/PR", "TOLEDO - PR",
    "Foz do Iguaçu/PR", "FOZ DO IGUACU - PR", "Foz/PR",
    "Maringá/PR", "MARINGA - PR",
    "Londrina/PR",
    "Ponta Grossa/PR", "PONTA GROSSA - PR",
    "Chapecó/SC", "CHAPECO - SC",
    "Joinville/SC",
    "Porto Alegre/RS", "POA/RS",
    "Caxias do Sul/RS",
    "São Paulo/SP",
    "Campinas/SP",
]
DESTINOS = [
    "Florianópolis/SC", "Floripa/SC", "FLORIANOPOLIS - SC",
    "São Paulo/SP", "SAO PAULO - SP", "Sampa/SP",
    "Curitiba/PR", "CURITIBA - PR",
    "Porto Alegre/RS", "POA/RS",
    "Campo Grande/MS",
    "Goiânia/GO",
    "Belo Horizonte/MG",
    "Rio de Janeiro/RJ",
]
TIPOS = ["CEGONHA", "cegonheira", "Cegonha", "PRANCHA", "prancha baixa", "GUINCHO", "Guincho/plataforma",
         "BAU", "baú", "SIDER", "GRANELEIRO", "FRIGORIFICO"]
VEICULO = {"CEGONHA", "cegonheira", "Cegonha", "PRANCHA", "prancha baixa", "GUINCHO", "Guincho/plataforma"}
STATUS = ["nova", "NOVO", "aberta", "em análise", "EM_ANALISE", "cotada", "COTADO", "aprovada", "agendada",
          "cancelada", "CONCLUIDA"]

_cont = {}


def proximo(lista, nome):
    i = _cont.get(nome, 0)
    _cont[nome] = i + 1
    return lista[i % len(lista)]


# ---------------------------------------------------------------- formatos
def br(v):
    return f"{v:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")


def fmt_valor(v, f):
    return {
        "rs": "R$ " + br(v),
        "br": br(v),
        "k": f"{v / 1000:.1f}k".replace(".", ","),
        "ponto": f"{v:.2f}",
        "int": str(int(v)),
    }[f]


def fmt_peso(kg, f):
    return {
        "t": f"{kg / 1000:.1f} t".replace(".", ",").replace(",0 t", " t"),
        "ton": f"{kg / 1000:.1f} ton".replace(".", ","),
        "kg": f"{int(kg)} kg",
        "nu": str(int(kg)),
        "nu_t": f"{kg / 1000:.0f}",
    }[f]


MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]


def fmt_data(d, f):
    return {
        "br": d.strftime("%d/%m/%Y"),
        "br2": d.strftime("%d/%m/%y"),
        "iso": d.isoformat(),
        "isoT": d.isoformat() + "T08:00:00Z",
        "mes": f"{d.day:02d}-{MESES[d.month - 1]}-{d.year}",
    }[f]


def demanda(link, canal):
    """Sorteia o conteudo canonico de uma demanda."""
    tipo = proximo(TIPOS, "tipo")
    qtd = random.randint(2, 11) if tipo.lower().startswith("cegon") else random.randint(1, 3)
    if tipo in VEICULO:
        kg = qtd * random.randrange(1100, 1700, 50)
    else:
        kg = random.randrange(6000, 28000, 500)
    if link in ("cnpj", "fuzzy"):
        cli = proximo(CRM, "cli")
    else:
        cli = None
    return {
        "link": link,
        "cli": cli,
        "nome_sem": proximo(SEM_CADASTRO, "sem") if link == "none" else None,
        "origem": proximo(ORIGENS, "origem"),
        "destino": proximo(DESTINOS, "destino"),
        "tipo": tipo,
        "qtd": qtd,
        "kg": kg,
        "valor": random.randrange(1500, 15000, 100),
        "data": date(2026, 4, 13) + timedelta(days=random.randint(0, 27)),
        "status": proximo(STATUS, "status") if canal != "whatsapp" else None,
    }


def nome_cliente(d, estilo="variante"):
    if d["link"] == "none":
        return d["nome_sem"]
    _, razao, _, _, variantes = d["cli"]
    if d["link"] == "fuzzy" or estilo == "variante":
        return random.choice(variantes)
    return razao


def cnpj_texto(d, estilo):
    """estilo: mask | cru | misto"""
    if d["link"] == "cnpj":
        c = CNPJS[d["cli"][0]]
        if estilo == "misto":
            estilo = random.choice(["mask", "cru"])
        return mascara(c) if estilo == "mask" else c
    if d["link"] == "fuzzy":
        c = CNPJS[d["cli"][0]]
        return random.choice([mascara(c)[:10], ""])  # truncado ou ausente
    return ""


# ================================================================ 1. WhatsApp
def gerar_whatsapp():
    descarte = {1, 4, 9, 13, 18, 22}
    template = {2, 5, 8, 11, 15, 17, 20, 24}
    fuzzy = {3, 6, 7, 10, 14, 19, 23}
    linhas = ["12/04/2026 07:58 - As mensagens e ligações são protegidas com a criptografia de ponta a ponta."]
    minuto = 8 * 60 + 2
    formatos_valor = ["rs", "k", "int", "br"]
    for i in range(1, 26):
        idw = f"WA-{i:04d}"
        link = "cnpj" if i in template else "fuzzy" if i in fuzzy else "none"
        d = demanda(link, "whatsapp")
        t = minuto + (i - 1) * 12 + (0 if i == 7 else random.randint(0, 5))
        dia = 12 + t // (24 * 60)
        hora = f"{dia:02d}/04/2026 {(t // 60) % 24:02d}:{t % 60:02d}"
        nome = nome_cliente(d)
        valor = fmt_valor(d["valor"], random.choice(formatos_valor))
        data = fmt_data(d["data"], random.choice(["br", "mes"]))
        q = d["qtd"]

        if i == 7:  # exemplo usado no slide de ingestao
            msg = ("oi, Frota Pampa aqui. preciso levar 7 carros de cascavel  pr pra Floripa/SC, "
                   "coleta 04/25/2026, fecha em 8,3k?")
        elif i in descarte:
            modelos = [
                f"oi, {nome} aqui. preciso levar {q} carros pra {d['destino']}, coleta {data}",
                f"Bom dia, tem caminhão saindo de {d['origem']} essa semana? aqui é da {nome}.",
                f"{nome} aqui, preciso cotar {q} carros, me liga por favor",
            ]
            msg = modelos[sorted(descarte).index(i) % 3]
        elif i in template:
            msg = (f"#DEMANDA | Empresa: {nome_cliente(d, 'razao')} | CNPJ: {cnpj_texto(d, 'mask')} | "
                   f"Origem: {d['origem']} | Destino: {d['destino']} | Tipo: {d['tipo']} | Qtd: {q} | "
                   f"Peso: {fmt_peso(d['kg'], random.choice(['t', 'kg']))} | Valor: {valor} | Coleta: {data}")
        else:
            modelos = [
                f"oi, {nome} aqui. preciso levar {q} carros de {d['origem']} pra {d['destino']}, coleta {data}, fecha em {valor}?",
                f"Bom dia! Aqui é da {nome}, tenho {q} veiculos saindo de {d['origem']} para {d['destino']}. Coleta dia {data}. Pago {valor}",
                f"boa tarde, {nome} falando. {q} unidades de {d['origem']} pra {d['destino']}, coleta {data}, valor {valor}",
            ]
            msg = random.choice(modelos)
        linhas.append(f"{hora} - Cliente: {idw} - {msg}")
        if i in (3, 11, 19):
            linhas.append(f"{hora} - Atendente: Bom dia! Vou verificar a disponibilidade e já retorno.")
        if i == 14:
            linhas.append(f"{hora} - Cliente: {idw} - <Mídia oculta>")
    (RAW / "whatsapp" / "conversa_exportada.txt").write_text("\n".join(linhas) + "\n", encoding="utf-8")


# ================================================================ 2. E-mail
def gerar_emails():
    fuzzy, sem = {6, 14}, {11}
    cab = ["Nº Pedido", "Cliente", "CNPJ", "Origem", "Destino", "Tipo carga", "Qtd", "Peso", "Frete",
           "Data coleta", "Situação"]
    remetentes = ["comercial@", "fretes@", "logistica@", "compras@"]
    for lote in range(4):
        linhas_html = []
        for j in range(1, 6):
            i = lote * 5 + j
            link = "fuzzy" if i in fuzzy else "none" if i in sem else "cnpj"
            d = demanda(link, "email")
            linha = [f"EM-{i:04d}", nome_cliente(d, "razao"), cnpj_texto(d, "mask"), d["origem"], d["destino"],
                     d["tipo"], str(d["qtd"]), fmt_peso(d["kg"], random.choice(["kg", "t"])),
                     fmt_valor(d["valor"], random.choice(["rs", "br"])),
                     fmt_data(d["data"], random.choice(["br", "br2"])), d["status"]]
            linhas_html.append("    <tr>" + "".join(f"<td>{c}</td>" for c in linha) + "</tr>")
        html = f"""<html>
<head><meta charset="utf-8"><title>Solicitação de fretes</title></head>
<body>
<p>De: {remetentes[lote]}cliente.com.br<br>Assunto: Programação de fretes - lote {lote + 1}</p>
<p>Prezados, boa tarde.</p>
<p>Segue abaixo a relação de veículos/cargas para cotação e programação.</p>
<table border="1" cellpadding="4">
    <tr>{"".join(f"<th>{c}</th>" for c in cab)}</tr>
{chr(10).join(linhas_html)}
</table>
<p>Att.,<br>Setor de Logística</p>
</body>
</html>
"""
        (RAW / "email" / f"email_{lote + 1:02d}.html").write_text(html, encoding="utf-8")


# ================================================================ 3. API
def gerar_api():
    eventos = []
    guardados = {}
    for i in range(1, 26):
        link = "none" if i == 13 else "cnpj"
        d = demanda(link, "api")
        doc = novo_cnpj() if link == "none" else CNPJS[d["cli"][0]]
        preco = random.choice([float(d["valor"]), d["valor"], fmt_valor(d["valor"], "ponto")])
        peso = random.choice([d["kg"], fmt_peso(d["kg"], "kg"), fmt_peso(d["kg"], "t")])
        ev = {
            "evento": "demanda.criada",
            "enviado_em": f"2026-04-{12 + i // 6:02d}T{8 + i % 9:02d}:{(i * 7) % 60:02d}:00-03:00",
            "payload": {
                "id": f"API-{i:04d}",
                "customer": {"name": nome_cliente(d, "razao"), "document": doc},
                "route": {"from": d["origem"], "to": d["destino"]},
                "cargo": {"type": d["tipo"], "units": d["qtd"], "weight": peso},
                "price": preco,
                "pickup_date": fmt_data(d["data"], random.choice(["iso", "isoT"])),
                "status": d["status"],
            },
        }
        eventos.append(ev)
        guardados[i] = ev
        # reenvio do webhook (timeout do lado deles) -> mesmo id duas vezes
        if i in (9, 20):
            orig = guardados[5 if i == 9 else 17]
            reenvio = json.loads(json.dumps(orig))
            reenvio["evento"] = "demanda.criada"
            reenvio["enviado_em"] = ev["enviado_em"].replace(":00-03:00", ":30-03:00")
            reenvio["tentativa"] = 2
            eventos.append(reenvio)
    with open(RAW / "api" / "webhook_demandas.json", "w", encoding="utf-8") as f:
        json.dump(eventos, f, ensure_ascii=False, indent=2)


# ================================================================ 4. Planilha legado
def gerar_csv():
    fuzzy, sem, qtd_ruim = {3, 10, 15, 23, 27}, {5, 12, 18, 26}, {8: "0", 21: "-1"}
    cab = ["COD", "CLIENTE", "CNPJ_CPF", "ORIGEM", "DESTINO", "TIPO", "QTD", "PESO", "VALOR", "DT_COLETA", "STATUS"]
    with open(RAW / "planilha" / "fretes_legado.csv", "w", encoding="latin-1", newline="") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(cab)
        for i in range(1, 30):
            link = "fuzzy" if i in fuzzy else "none" if i in sem else "cnpj"
            d = demanda(link, "arquivo")
            cnpj = cnpj_texto(d, "misto")
            if i == 18:  # cnpj digitado errado (digito verificador nao bate)
                cnpj = mascara(novo_cnpj())[:-1] + "0"
            nome = nome_cliente(d, "razao")
            w.writerow([
                f"CSV-{i:04d}", nome.upper() if i % 3 else nome, cnpj, d["origem"], d["destino"], d["tipo"],
                qtd_ruim.get(i, str(d["qtd"])),
                fmt_peso(d["kg"], random.choice(["ton", "kg", "nu", "nu_t"])),
                fmt_valor(d["valor"], random.choice(["rs", "br", "int"])),
                fmt_data(d["data"], random.choice(["br", "br2"])), d["status"],
            ])


# ================================================================ 5. PDF
def gerar_pdf():
    cab = ["OC", "Cliente", "CNPJ", "Origem", "Destino", "Tipo", "Qtd", "Peso", "Valor", "Coleta", "Status"]
    larg = [17, 48, 34, 30, 30, 28, 9, 18, 24, 20, 19]
    pdf = FPDF(orientation="L", unit="mm", format="A4")
    pdf.add_page()
    pdf.set_font("Helvetica", "B", 13)
    pdf.cell(0, 8, "ORDENS DE COLETA - RODOMAX", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 9)
    pdf.cell(0, 6, "Documento gerado pelo cliente - abril/2026. Conferir dados antes de programar.",
             new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)
    pdf.set_font("Helvetica", "", 7.5)
    with pdf.table(col_widths=larg, text_align="LEFT", line_height=4.5) as tabela:
        linha = tabela.row()
        for c in cab:
            linha.cell(c)
        for i in range(1, 13):
            link = "fuzzy" if i == 9 else "cnpj"
            d = demanda(link, "pdf")
            valores = [f"OC-{i:04d}", nome_cliente(d, "razao"), cnpj_texto(d, "mask"), d["origem"], d["destino"],
                       d["tipo"], str(d["qtd"]), fmt_peso(d["kg"], random.choice(["kg", "t"])),
                       fmt_valor(d["valor"], "rs"), fmt_data(d["data"], "br"), d["status"]]
            linha = tabela.row()
            for v in valores:
                linha.cell(v)
    pdf.output(str(RAW / "ordem_coleta" / "ordens_coleta.pdf"))


def gerar_crm():
    with open(PROJ / "crm" / "clientes.csv", "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["cliente_id", "razao_social", "cnpj", "cidade", "uf"])
        for cid, razao, cidade, uf, _ in CRM:
            w.writerow([cid, razao, mascara(CNPJS[cid]), cidade, uf])


if __name__ == "__main__":
    gerar_crm()
    gerar_whatsapp()
    gerar_emails()
    gerar_api()
    gerar_csv()
    gerar_pdf()
    print("ok")
