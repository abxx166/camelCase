function convertir() {
    let pesos = parseFloat(document.getElementById("pesos").value);
    let tipoCambio = parseFloat(document.getElementById("cambio").value);

    let dolares = pesos / tipoCambio;

    document.getElementById("resultado").innerText = "Dólares: " + dolares;
};