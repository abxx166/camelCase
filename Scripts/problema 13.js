function calcularAhorro() {
    
    let sueldo = parseFloat(document.getElementById("sueldo").value);

    let ahorroSemana = sueldo * 0.15;
    let ahorroAnual = ahorroSemana * 4 * 12;

    document.getElementById("resultado").innerText =
    "Ahorro anual: $" + ahorroAnual;
};