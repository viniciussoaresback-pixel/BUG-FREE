# Confere se a pagina (site/dados.js) esta de acordo com o pipeline.
# Se falhar depois de mudar dado ou regra: rode "python main.py" para atualizar a pagina.

import json
from pathlib import Path

PASTA = Path(__file__).parent.parent


def _dados():
    texto = (PASTA / "site" / "dados.js").read_text(encoding="utf-8")
    return json.loads(texto.split("window.DADOS = ", 1)[1].strip().rstrip(";"))


def test_numeros_da_pagina():
    d = _dados()
    assert d["funil"] == {"brutos": 113, "descartados": 10, "base": 103, "vinculados": 93}
    assert d["vinculo"] == {"CNPJ": 78, "FUZZY": 15, "SEM_MATCH": 10}
    assert len(d["registros"]) == 113
    assert sum(r["motivo"] is None for r in d["registros"]) == 103


def test_todo_registro_tem_trecho_original():
    assert all(r["trecho"] for r in _dados()["registros"])


def test_arquivos_da_pagina_existem():
    for arquivo in _dados()["arquivos"]:
        assert (PASTA / "site" / arquivo["caminho"]).exists(), arquivo["caminho"]
