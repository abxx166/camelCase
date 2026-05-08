function calcularVida() {
    
    let edad = parseInt(document.getElementById("edad").value);

    let meses = edad * 12;
    let semanas = edad * 52;
    let dias = edad * 365;
    let horas = dias * 24;

    document.getElementById("resultado").innerText =
    "Meses: " + meses +
    " | Semanas: " + semanas +
    " | Días: " + dias +
    " | Horas: " + horas;
};