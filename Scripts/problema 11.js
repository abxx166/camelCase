function calcularLuz() {
    
    let kw = parseFloat(document.getElementById("kw").value);
    let costo = parseFloat(document.getElementById("costo").value);

    let total = kw * costo;

    document.getElementById("resultado").innerText = "Pago de luz: " + total;
};