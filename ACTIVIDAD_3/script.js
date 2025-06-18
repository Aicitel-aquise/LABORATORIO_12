// Arreglo con imágenes de gestores de bases de datos
let gestores = ["mysql.png", "postgresql.png", "mongodb.png", "oracle.png", "sqlserver.png"];

// Opciones para cada gestor
let opciones = [];
opciones.push(["MySQL", "MongoDB", "PostgreSQL"]);
opciones.push(["Oracle", "PostgreSQL", "SQL Server"]);
opciones.push(["MongoDB", "Firebase", "MySQL"]);
opciones.push(["PostgreSQL", "SQL Server", "Oracle"]);
opciones.push(["SQL Server", "MongoDB", "MySQL"]);

// Índices de respuestas correctas
let correcta = [0, 1, 0, 2, 0];

// Posición y contador de aciertos
let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego() {
    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarGestor();
}

function cargarGestor() {
    if (gestores.length <= posActual) {
        terminarJuego();
    } else {
        limpiarOpciones();

        document.getElementById("imgLenguaje").src = "img/" + gestores[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) {
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else {
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }

    posActual++;
    setTimeout(cargarGestor, 1000);
}

function terminarJuego() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = gestores.length - cantidadAcertadas;
}

function volverAlInicio() {
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}