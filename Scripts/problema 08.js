function calcularTiempo() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let velocidad = parseFloat(document.getElementById("velocidad").value);

    let tiempo = distancia / velocidad;

    document.getElementById("resultado").innerText = "Tiempo: " + tiempo + " horas";
};