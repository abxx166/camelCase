function calcularPago() {
    let horas = Math.ceil(parseFloat(document.getElementById("horas").value));
    let tarifa = parseFloat(document.getElementById("tarifa").value);

    let total = horas * tarifa;

    document.getElementById("resultado").innerText = "Total a pagar: " + total;
};