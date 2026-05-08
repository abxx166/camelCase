function calcularArticulo() {
    
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = precio * 0.20;
    let precioDescuento = precio - descuento;
    let iva = precioDescuento * 0.15;
    let final = precioDescuento + iva;

    document.getElementById("resultado").innerText = "Precio con descuento: $" + precioDescuento + " | Precio final: $" + final;
};