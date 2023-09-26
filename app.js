function gerarNumeroFloat() {
    var minFloat = parseFloat(document.getElementById("minFloat").value);
    var maxFloat = parseFloat(document.getElementById("maxFloat").value);

    if (isNaN(minFloat) || isNaN(maxFloat)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    if (minFloat >= maxFloat) {
        alert("Os valores mínimos devem ser menores que os valores máximos.");
        return;
    }

    var numeroAleatorioFloat = (Math.random() * (maxFloat - minFloat)) + minFloat;

    document.getElementById("numeroGeradoFloat").innerHTML = "Número Float Gerado: " + numeroAleatorioFloat.toFixed(2);
}

function gerarNumeroInteiro() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    if (min >= max) {
        alert("Os valores mínimos devem ser menores que os valores máximos.");
        return;
    }

    var numeroAleatorioInteiro = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("numeroGeradoInteiro").innerHTML = "Número Inteiro Gerado: " + numeroAleatorioInteiro;
}
