function calcularArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(base) || isNaN(altura)) {
        document.getElementById("resultado").innerText = "Ingresa valores válidos";
        return;
    }

    let area = (base * altura) / 2;

    document.getElementById("resultado").innerText = "Área: " + area;
};