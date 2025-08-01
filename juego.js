let numeroPregunta = 0;
let aciertos = 0;
let fallos = 0;
const numeroPreguntas = preguntas.length;


function mostrarPregunta() {
    const preguntaActual = preguntas[numeroPregunta];
    document.getElementById("pregunta").textContent = preguntaActual.pregunta;
    document.getElementById("respuesta1").textContent = preguntaActual.respuesta1;
    document.getElementById("respuesta2").textContent = preguntaActual.respuesta2;
    document.getElementById("respuesta3").textContent = preguntaActual.respuesta3;
    // Quitamos las clases de animación que puedan tener las respuestas
    // Para no andar comprobando si tienen la clase acierto, fallo o ninguna,
    // las eliminamos todads que no pasa nada si no las tiene
    document.querySelectorAll("#preguntas p").forEach( p => {p.classList.remove("acierto", "fallo"); p.offsetWidth;});
}

function comprobarRespuesta(evt) {
    // Para saber si se hizo clic en los p de respuesta y no en la pregunta 
    // o en el section
    //if(evt.target.id.startsWith("respuesta")) {
    if(evt.target.nodeName.toLowerCase() == "p") {
        // Como en el array de preguntas tenemos guardado el id
        // de la correcta, podemos comparar así
        if(preguntas[numeroPregunta].correcta == evt.target.id) {
            evt.target.classList.add("acierto");
            aciertos++;
            document.getElementById("aciertos").textContent = aciertos;
        } else {
            fallos++;
            document.getElementById("fallos").textContent = fallos;
            evt.target.classList.add("fallo");
        }
        evt.target.addEventListener("animationend", () => {
            numeroPregunta++;
            // ver si llegó a la última pregunta
            if(numeroPregunta < numeroPreguntas) {
                mostrarPregunta();
            } else {
                mostrarFin();
            }
        })
    }
}


function mostrarFin() {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("resumenAciertos").textContent = aciertos;
    document.getElementById("resumenFallos").textContent = fallos;
    const porcentaje = (aciertos / numeroPreguntas * 100).toFixed(0);    
    document.getElementById("porcentajeAciertos").textContent = porcentaje;
    const mensaje =  document.getElementById("mensaje");
    if(porcentaje == 0) {
        mensaje.value = "dedícate a otra cosa";
    } else if(porcentaje < 10) {
        mensaje.value = "Debes estudiar mucho más";
    } else if(porcentaje < 50) {
        mensaje.value = "Debes estudiar algo más";
    } else if(porcentaje < 75) {
        mensaje.value = "Bastante bien";
    } else if(porcentaje < 100) {
        mensaje.value = "Muy bien";
    } else {
        mensaje.value = "Posiblemente hayas hecho trampas"
    }
    document.getElementById("preguntas").removeEventListener("click", comprobarRespuesta );
}

function cerrar() {
    numeroPregunta = 0;
    aciertos = 0;
    fallos = 0;
    document.getElementById("aciertos").textContent = "0";
    document.getElementById("fallos").textContent = "0";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("preguntas").addEventListener("click", comprobarRespuesta );
    mostrarPregunta();
}

mostrarPregunta();

document.getElementById("preguntas").addEventListener("click", comprobarRespuesta );
document.getElementById("cerrar").addEventListener("click", cerrar);
