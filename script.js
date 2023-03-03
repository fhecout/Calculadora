function adicionarValor(valor) {
    document.getElementById("resultado").value += valor;
}

function limpar() {
    document.getElementById("resultado").value = "";
}

function calcular() {
    var resultado = eval(document.getElementById("resultado").value);
    document.getElementById("resultado").value = resultado;
}
