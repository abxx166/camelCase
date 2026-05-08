function calcularAgua() {

    let metros = parseFloat(document.getElementById("metros").value);

    let costo = parseFloat(document.getElementById("costo").value);

    let total = metros * costo;

    document.getElementById("resultado").innerText = "Pago total: $" + total;

};