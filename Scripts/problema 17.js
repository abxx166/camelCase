function calcularPromedio() {
    
    let e1 = parseFloat(document.getElementById("e1").value);
    let e2 = parseFloat(document.getElementById("e2").value);
    let e3 = parseFloat(document.getElementById("e3").value);

    let promedio = (e1 * 0.25) + (e2 * 0.25) + (e3 * 0.50);

    document.getElementById("resultado").innerText = "Promedio final: " + promedio;
};