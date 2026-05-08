function calcularCuadrado() {
    
    let lado = parseFloat(document.getElementById("lado").value);

    let area = lado * lado;

    document.getElementById("resultado").innerText = "Área: " + area;
};