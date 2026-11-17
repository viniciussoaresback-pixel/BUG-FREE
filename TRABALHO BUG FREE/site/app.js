// Monta a pagina a partir de window.DADOS (arquivo dados.js, gerado pelo main.py).
// Nada aqui calcula resultado: tudo vem pronto do pipeline em Python.

(function () {
  "use strict";

  const D = window.DADOS;
  if (!D) {
    document.getElementById("aviso-dados").hidden = false;
    return;
  }

  // ---------------------------------------------------------------- utilitarios

  const nf = new Intl.NumberFormat("pt-BR");
  const nf2 = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (parte, total) => (100 * parte / total).toFixed(1).replace(".", ",") + "%";
  const nota = (v) => (v == null ? "—" : v.toFixed(2).replace(".", ","));
  const semAcento = (s) => (s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  const NOME_CANAL = {};
  const FORMATO_CANAL = {};
  D.canais.forEach((c) => {
    NOME_CANAL[c.canal] = c.nome;
    FORMATO_CANAL[c.canal] = c.formato;
  });

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto;
    return e;
  }

  // cada celula: [conteudo, classe]. conteudo pode ser texto, numero ou um elemento
  function linhaTabela(celulas) {
    const tr = el("tr");
    celulas.forEach(([conteudo, classe]) => {
      const td = el("td", classe);
      if (conteudo instanceof Node) td.appendChild(conteudo);
      else td.textContent = conteudo == null ? "—" : conteudo;
      tr.appendChild(td);
    });
    return tr;
  }

  function barraSimples(fracao) {
    const trilha = el("span", "trilha");
    const barra = el("span", "barra");
    barra.style.width = 100 * fracao + "%";
    trilha.appendChild(barra);
    return trilha;
  }

  function botaoRegistro(texto, indice) {
    const b = el("button", "link-registro", texto);
    b.type = "button";
    b.dataset.registro = String(indice);
    b.title = "ver o antes e depois desta demanda";
    return b;
  }

  // ---------------------------------------------------------------- 01 resultado

  function preencherNumeros() {
    document.querySelectorAll("[data-funil]").forEach((e) => {
      e.textContent = nf.format(D.funil[e.dataset.funil]);
    });
    document.getElementById("aproveitamento").textContent = pct(D.funil.base, D.funil.brutos);
  }

  // ---------------------------------------------------------------- 02 canais

  function montarCanais() {
    const corpo = document.querySelector("#tabela-canais tbody");
    const maior = Math.max(...D.canais.map((c) => c.registros));
    D.canais.forEach((c) => {
      corpo.appendChild(linhaTabela([
        [c.nome],
        [c.formato, "apagado"],
        [nf.format(c.registros), "num"],
        [barraSimples(c.registros / maior), "col-barra"],
        [nf.format(c.descartados), "num"],
        [nf.format(c.base), "num"],
        [nf.format(c.vinculados), "num"],
      ]));
    });
    const f = D.funil;
    document.querySelector("#tabela-canais tfoot").appendChild(linhaTabela([
      ["Total"], [""], [nf.format(f.brutos), "num"], [""],
      [nf.format(f.descartados), "num"], [nf.format(f.base), "num"], [nf.format(f.vinculados), "num"],
    ]));
  }

  // ---------------------------------------------------------------- 03 auditoria

  const NOME_COLUNA = { origem: "Origem", destino: "Destino", tipo_carga: "Tipo de carga", status: "Status" };

  function montarHalteres() {
    const caixa = document.getElementById("halteres");
    const maximo = Math.ceil(Math.max(...D.cardinalidade.map((c) => c.distintos)) / 5) * 5;
    const pos = (v) => 100 * v / maximo + "%";

    D.cardinalidade.forEach((c) => {
      const nome = NOME_COLUNA[c.coluna] || c.coluna;
      const linha = el("div", "halter");
      const trilha = el("div", "halter-trilha");

      const ligacao = el("span", "halter-ligacao");
      ligacao.style.left = pos(c.reais);
      ligacao.style.width = 100 * (c.distintos - c.reais) / maximo + "%";
      const bruto = el("span", "ponto ponto-claro");
      bruto.style.left = pos(c.distintos);
      bruto.dataset.tip = `${nome}: ${c.distintos} valores distintos no bruto`;
      const real = el("span", "ponto ponto-azul");
      real.style.left = pos(c.reais);
      real.dataset.tip = `${nome}: ${c.reais} valores reais`;
      trilha.append(ligacao, bruto, real);

      linha.append(el("span", "halter-nome", nome), trilha, el("span", "halter-valores", `${c.distintos} → ${c.reais}`));
      caixa.appendChild(linha);
    });

    const eixo = el("div", "halter");
    const marcas = el("div", "halter-trilha eixo");
    for (let v = 0; v <= maximo; v += 5) {
      const m = el("span", "marca", String(v));
      m.style.left = pos(v);
      marcas.appendChild(m);
    }
    eixo.append(el("span"), marcas, el("span"));
    caixa.appendChild(eixo);

    caixa.setAttribute(
      "aria-label",
      "Valores distintos no bruto e valores reais: " +
        D.cardinalidade.map((c) => `${NOME_COLUNA[c.coluna] || c.coluna} ${c.distintos} para ${c.reais}`).join(", "),
    );

    const o = D.cardinalidade.find((c) => c.coluna === "origem");
    if (o) document.getElementById("frase-origem").textContent = `${o.distintos} “cidades” de origem para ${o.reais} lugares reais.`;
  }

  const NOME_FORMATOS = { valor_frete: "Valor do frete", peso: "Peso", cnpj: "CNPJ", data_coleta: "Data de coleta" };

  function montarFormatos() {
    const caixa = document.getElementById("formatos");
    Object.keys(NOME_FORMATOS).forEach((coluna) => {
      // "ausente" vai para o fim da lista
      const itens = D.formatos
        .filter((f) => f.coluna === coluna)
        .sort((a, b) => (a.formato === "ausente") - (b.formato === "ausente"));
      const jeitos = itens.filter((f) => f.formato !== "ausente").length;

      const bloco = el("div", "formato");
      bloco.append(el("h4", null, NOME_FORMATOS[coluna]), el("p", "apagado", `chegou escrito de ${jeitos} jeitos`));
      const lista = el("ul");
      itens.forEach((f) => {
        const li = el("li", f.formato === "ausente" ? "apagado" : null);
        li.append(el("span", null, f.formato), el("span", "num", nf.format(f.qtd)));
        lista.appendChild(li);
      });
      bloco.appendChild(lista);
      caixa.appendChild(bloco);
    });
  }

  // ---------------------------------------------------------------- 05 antes e depois

  const seletor = document.getElementById("seletor-registro");
  let atual = 0;

  const indicePorId = (id) => Math.max(0, D.registros.findIndex((r) => r.id === id));

  // campo do registro bruto -> como mostrar o mesmo campo depois da limpeza
  const CAMPOS = [
    ["Cliente", "cliente_nome", (l) => l.cliente_nome],
    ["CNPJ", "cnpj", (l, b) => l.cnpj || (b.cnpj ? "nulo (truncado ou inválido)" : null)],
    ["Origem", "origem", (l, b) => (l.origem_cidade ? `${l.origem_cidade} / ${l.origem_uf}` : b.origem ? "nulo (não reconhecida)" : null)],
    ["Destino", "destino", (l, b) => (l.destino_cidade ? `${l.destino_cidade} / ${l.destino_uf}` : b.destino ? "nulo (não reconhecido)" : null)],
    ["Tipo de carga", "tipo_carga", (l) => l.tipo_carga],
    ["Unidades", "qtd_unidades", (l, b) => (l.qtd_unidades != null ? String(l.qtd_unidades) : b.qtd_unidades ? "nulo (inválida)" : null)],
    ["Peso", "peso", (l) => (l.peso_kg != null ? `${l.peso_kg.toFixed(1)} kg` : null)],
    ["Valor do frete", "valor_frete", (l) => (l.valor_frete != null ? l.valor_frete.toFixed(2) : null)],
    ["Data de coleta", "data_coleta", (l, b) => (l.data_coleta ? l.data_coleta + (l.data_ambigua ? " (ambígua)" : "") : b.data_coleta ? "nulo" : null)],
    ["Status", "status", (l) => l.status],
  ];

  function destinoDoRegistro(r) {
    if (r.motivo) {
      return ["fora", "Descartado", `motivo: ${r.motivo}. Fica registrado em descartes.csv.`];
    }
    const v = r.vinculo;
    if (v.metodo === "CNPJ") {
      return ["base", "Entrou na base final", `vinculado ao CRM pelo CNPJ: ${v.cliente_id} · ${v.razao_social}`];
    }
    if (v.metodo === "FUZZY") {
      return ["base", "Entrou na base final", `vinculado ao CRM pelo nome (nota ${nota(v.score)}): ${v.cliente_id} · ${v.razao_social}`];
    }
    return ["base", "Entrou na base final", `sem vínculo no CRM (melhor nota ${nota(v.score)}, abaixo do limiar). Vai para curadoria.`];
  }

  function selecionar(indice, rolar) {
    atual = indice;
    const r = D.registros[indice];
    seletor.value = String(indice);

    const [classe, titulo, texto] = destinoDoRegistro(r);
    const destino = document.getElementById("destino-registro");
    destino.className = "destino " + classe;
    destino.replaceChildren(el("strong", null, titulo), document.createTextNode(" · " + texto));

    document.getElementById("canal-registro").textContent = `· ${NOME_CANAL[r.canal]}, ${FORMATO_CANAL[r.canal]}`;
    document.getElementById("trecho-registro").textContent = r.trecho || "(sem trecho)";

    const corpo = document.querySelector("#tabela-registro tbody");
    corpo.replaceChildren();
    CAMPOS.forEach(([nome, campo, comoFicou]) => {
      const veio = r.bruto[campo];
      const ficou = comoFicou(r.limpo, r.bruto);
      const tr = el("tr");
      const th = el("th", null, nome);
      th.scope = "row";
      tr.append(
        th,
        el("td", veio == null ? "vazio" : null, veio == null ? "—" : veio),
        el("td", ficou == null ? "vazio" : null, ficou == null ? "—" : ficou),
      );
      if (String(veio ?? "") !== String(ficou ?? "")) tr.className = "mudou";
      corpo.appendChild(tr);
    });

    if (rolar) document.getElementById("ingestao").scrollIntoView({ block: "start" });
  }

  function montarExplorador() {
    D.canais.forEach((c) => {
      const grupo = el("optgroup");
      grupo.label = c.nome;
      D.registros.forEach((r, i) => {
        if (r.canal !== c.canal) return;
        const reenvio = r.motivo && r.motivo.startsWith("duplicata") ? " (reenvio)" : "";
        const op = el("option", null, `${r.id} · ${r.bruto.cliente_nome || "sem nome"}${reenvio}`);
        op.value = String(i);
        grupo.appendChild(op);
      });
      seletor.appendChild(grupo);
    });

    const total = D.registros.length;
    seletor.addEventListener("change", () => selecionar(Number(seletor.value)));
    document.getElementById("anterior").addEventListener("click", () => selecionar((atual - 1 + total) % total));
    document.getElementById("proximo").addEventListener("click", () => selecionar((atual + 1) % total));
    document.getElementById("exemplo").addEventListener("click", (e) => {
      e.preventDefault();
      selecionar(indicePorId("WA-0007"), true);
    });
    // qualquer codigo de demanda clicado em outra secao abre aqui
    document.addEventListener("click", (e) => {
      const b = e.target.closest("[data-registro]");
      if (b) selecionar(Number(b.dataset.registro), true);
    });
  }

  // ---------------------------------------------------------------- 06 descartes

  function montarDescartes() {
    const caixa = document.getElementById("motivos");
    const maior = Math.max(...D.motivos.map((m) => m.qtd));
    D.motivos.forEach((m) => {
      const linha = el("div", "medidor");
      linha.append(el("span", null, m.motivo), barraSimples(m.qtd / maior), el("span", "num", nf.format(m.qtd)));
      caixa.appendChild(linha);
    });

    const corpo = document.querySelector("#tabela-descartes tbody");
    D.registros.forEach((r, i) => {
      if (r.motivo) corpo.appendChild(linhaTabela([[botaoRegistro(r.id, i)], [NOME_CANAL[r.canal]], [r.motivo]]));
    });
    document.getElementById("frase-descartes").textContent =
      `${D.funil.descartados} de ${D.funil.brutos} registros excluídos · 100% deles com motivo rastreável`;
  }

  // ---------------------------------------------------------------- 07 crm

  const METODOS = [
    ["CNPJ", "seg-cnpj", "Pelo CNPJ (exato)"],
    ["FUZZY", "seg-nome", "Pelo nome (similaridade)"],
    ["SEM_MATCH", "seg-sem", "Sem vínculo, vai para curadoria"],
  ];

  function montarVinculo() {
    const barra = document.getElementById("segmentos");
    const legenda = document.getElementById("legenda-segmentos");
    const total = D.funil.base;
    const vaos = 2 * (METODOS.length - 1); // 2px entre os blocos
    METODOS.forEach(([metodo, classe, nome]) => {
      const qtd = D.vinculo[metodo];
      const seg = el("div", "seg " + classe);
      // largura exata da parte (o espaco interno nao pode distorcer a proporcao)
      seg.style.width = `calc((100% - ${vaos}px) * ${qtd / total})`;
      seg.dataset.tip = `${nome}: ${nf.format(qtd)} de ${nf.format(total)} (${pct(qtd, total)})`;
      seg.appendChild(el("span", null, pct(qtd, total)));
      barra.appendChild(seg);

      const li = el("li");
      li.append(el("i", "mk " + classe), document.createTextNode(`${nome} · ${nf.format(qtd)}`));
      legenda.appendChild(li);
    });
    barra.setAttribute(
      "aria-label",
      `Vínculo das ${total} demandas da base: ` + METODOS.map(([m, , nome]) => `${nome} ${D.vinculo[m]}`).join(", "),
    );
  }

  // so escreve o percentual dentro do bloco quando ele cabe
  function ajustarRotulos() {
    document.querySelectorAll(".seg").forEach((seg) => {
      const rotulo = seg.firstChild;
      rotulo.hidden = false;
      if (rotulo.offsetWidth > seg.clientWidth - 12) rotulo.hidden = true;
    });
  }

  function montarCalibracao() {
    const lim = D.limiar;
    const caixa = document.getElementById("notas");
    caixa.style.setProperty("--limiar", lim * 100 + "%");
    document.querySelectorAll("[data-limiar]").forEach((e) => {
      e.textContent = nota(lim);
    });

    D.scores.forEach((s) => {
      const acima = s.score >= lim;
      const linha = el("div", "nota-linha " + (acima ? "acima" : "abaixo"));
      const nome = el("span", "nota-nome");
      nome.append(el("strong", null, s.nome_na_demanda), document.createTextNode(` → ${s.melhor_candidato || "—"} `), el("small", "apagado", s.id_demanda));
      const trilha = el("span", "nota-trilha");
      const barra = el("span", "nota-barra");
      barra.style.width = s.score * 100 + "%";
      barra.dataset.tip = `${s.id_demanda}: nota ${nota(s.score)}, ${acima ? "vinculado pelo nome" : "abaixo do limiar"}`;
      trilha.appendChild(barra);
      linha.append(nome, trilha, el("span", "num", nota(s.score)));
      caixa.appendChild(linha);
    });

    const abaixo = D.scores.filter((s) => s.score < lim);
    const acima = D.scores.filter((s) => s.score >= lim);
    if (abaixo.length && acima.length) {
      const errado = abaixo.reduce((a, b) => (b.score > a.score ? b : a));
      const certo = acima.reduce((a, b) => (b.score < a.score ? b : a));
      document.getElementById("frase-limiar").textContent =
        `A maior nota abaixo do limiar foi ${nota(errado.score)} (“${errado.nome_na_demanda}”) e a menor acima foi ` +
        `${nota(certo.score)} (“${certo.nome_na_demanda}”); o limiar de ${nota(lim)} fica nesse vão.`;
    }

    const corpo = document.querySelector("#tabela-calibracao tbody");
    D.calibracao.forEach((c) => {
      const tr = linhaTabela([[nota(c.limiar), "num"], [nf.format(c.vinculados_fuzzy), "num"], [nf.format(c.sem_match), "num"]]);
      if (Math.abs(c.limiar - lim) < 1e-9) tr.className = "escolhido";
      corpo.appendChild(tr);
    });
  }

  // ---------------------------------------------------------------- 08 base final

  function textoVinculo(v) {
    if (v.metodo === "CNPJ") return "CNPJ";
    if (v.metodo === "FUZZY") return `nome (${nota(v.score)})`;
    return "sem vínculo";
  }

  function montarBase() {
    const filtroCanal = document.getElementById("filtro-canal");
    const filtroVinculo = document.getElementById("filtro-vinculo");
    const filtroBusca = document.getElementById("filtro-busca");
    D.canais.forEach((c) => {
      const op = el("option", null, c.nome);
      op.value = c.canal;
      filtroCanal.appendChild(op);
    });

    const linhas = [];
    D.registros.forEach((r, i) => {
      if (!r.motivo) linhas.push([r, i]);
    });
    const corpo = document.querySelector("#tabela-base tbody");
    const contador = document.getElementById("contador-base");

    function desenhar() {
      const canal = filtroCanal.value;
      const vinculo = filtroVinculo.value;
      const busca = semAcento(filtroBusca.value.trim());
      const pedaco = document.createDocumentFragment();
      let n = 0;
      linhas.forEach(([r, i]) => {
        const l = r.limpo;
        const v = r.vinculo;
        if (canal && r.canal !== canal) return;
        if (vinculo && v.metodo !== vinculo) return;
        const cliente = v.razao_social || r.bruto.cliente_nome;
        const origem = `${l.origem_cidade} / ${l.origem_uf}`;
        const destino = `${l.destino_cidade} / ${l.destino_uf}`;
        if (busca && !semAcento([r.id, cliente, r.bruto.cliente_nome, origem, destino].join(" ")).includes(busca)) return;
        pedaco.appendChild(linhaTabela([
          [botaoRegistro(r.id, i)],
          [NOME_CANAL[r.canal]],
          [cliente],
          [origem],
          [destino],
          [l.tipo_carga],
          [l.qtd_unidades, "num"],
          [l.peso_kg == null ? null : nf.format(Math.round(l.peso_kg)), "num"],
          [l.valor_frete == null ? null : nf2.format(l.valor_frete), "num"],
          [l.data_coleta],
          [l.status],
          [textoVinculo(v)],
        ]));
        n++;
      });
      if (!n) {
        const tr = el("tr");
        const td = el("td", "apagado", "Nenhuma demanda com esses filtros.");
        td.colSpan = 12;
        tr.appendChild(td);
        pedaco.appendChild(tr);
      }
      corpo.replaceChildren(pedaco);
      contador.textContent = `Mostrando ${n} de ${linhas.length} demandas`;
    }

    filtroCanal.addEventListener("change", desenhar);
    filtroVinculo.addEventListener("change", desenhar);
    filtroBusca.addEventListener("input", desenhar);
    desenhar();
  }

  function montarArquivos() {
    const saidas = document.getElementById("arquivos-saida");
    const brutos = document.getElementById("arquivos-brutos");
    D.arquivos.forEach((a) => {
      const link = el("a", null, a.nome);
      link.href = a.caminho;
      link.setAttribute("download", a.nome);
      const li = el("li");
      li.appendChild(link);
      (a.tipo === "bruto" ? brutos : saidas).appendChild(li);
    });
  }

  // ---------------------------------------------------------------- dica (tooltip)

  const dica = el("div", "dica");
  dica.setAttribute("role", "tooltip");
  dica.hidden = true;
  document.body.appendChild(dica);

  function mostrarDica(alvo) {
    dica.textContent = alvo.dataset.tip;
    dica.hidden = false;
    const r = alvo.getBoundingClientRect();
    const d = dica.getBoundingClientRect();
    const largura = document.documentElement.clientWidth;
    let x = r.left + r.width / 2 - d.width / 2;
    x = Math.max(8, Math.min(x, largura - d.width - 8));
    let y = r.top - d.height - 8;
    if (y < 8) y = r.bottom + 8;
    dica.style.left = x + window.scrollX + "px";
    dica.style.top = y + window.scrollY + "px";
  }

  document.addEventListener("mouseover", (e) => {
    const alvo = e.target.closest("[data-tip]");
    if (alvo) mostrarDica(alvo);
  });
  document.addEventListener("mouseout", (e) => {
    const alvo = e.target.closest("[data-tip]");
    if (alvo && !alvo.contains(e.relatedTarget)) dica.hidden = true;
  });

  // ---------------------------------------------------------------- inicio

  preencherNumeros();
  montarCanais();
  montarHalteres();
  montarFormatos();
  montarExplorador();
  montarDescartes();
  montarVinculo();
  montarCalibracao();
  montarBase();
  montarArquivos();
  selecionar(indicePorId("WA-0007"));
  ajustarRotulos();

  let espera;
  window.addEventListener("resize", () => {
    clearTimeout(espera);
    espera = setTimeout(ajustarRotulos, 100);
  });
})();
