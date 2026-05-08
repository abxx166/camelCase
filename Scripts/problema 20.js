function calcularHotel() {
    
    let dias = parseInt(document.getElementById("dias").value);
    let costo = parseFloat(document.getElementById("costo").value);

    let total = dias * costo;

    document.getElementById("resultado").innerText = "Pago total: $" + total;
};