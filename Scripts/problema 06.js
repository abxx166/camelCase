function calcularHipotenusa() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    let c = Math.sqrt(a*a + b*b);

    document.getElementById("resultado").innerText = "Hipotenusa: " + c;
};