function calcularPotencia() {
    
    let resistencia = parseFloat(document.getElementById("resistencia").value);
    let corriente = parseFloat(document.getElementById("corriente").value);

    let voltaje = resistencia * corriente;
    let potencia = voltaje * corriente;

    document.getElementById("resultado").innerText = "Potencia: " + potencia;
};