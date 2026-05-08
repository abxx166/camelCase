function calcularEdad() {
    let nacimiento = parseInt(document.getElementById("anio").value);
    let actual = new Date().getFullYear();

    let edad = actual - nacimiento;

    document.getElementById("resultado").innerText = "Edad: " + edad;
};