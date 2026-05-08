function calcularCheque() {
    
    let dias = parseInt(document.getElementById("dias").value);
    let hotel = parseFloat(document.getElementById("hotel").value);
    let comida = parseFloat(document.getElementById("comida").value);

    let otros = dias * 100;
    let total = hotel + comida + otros;

    document.getElementById("resultado").innerText =
    "Hotel: $" + hotel +
    " | Comida: $" + comida +
    " | Otros: $" + otros +
    " | Total: $" + total;
};