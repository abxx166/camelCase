function calcularPintura() {
    let m2 = parseFloat(document.getElementById("metros").value);
    let costo = parseFloat(document.getElementById("costo").value);

    let total = m2 * costo;

    document.getElementById("resultado").innerText = "Costo total: " + total;
};