window.onload = inicio;

const btnInicio = document.getElementById("btnInicio");
const btnFin = document.getElementById("btnFin");
const multiplicando = document.getElementById("multiplicando");
const multiplicador = document.getElementById("multiplicador");
const cResultado = document.getElementById("cResultado");
const sppuntos = document.getElementById("sppuntos");
const spfallos = document.getElementById("spfallos");
const rCorrecta = document.getElementById("rCorrecta");
const respuesta = document.getElementById("respuesta");

// Variables
let puntos = 0;
let fallos = 0;

let num1;
let num2;
let numCorrecto;
function inicio() {

  btnInicio.addEventListener("click", empezar);
  btnFin.addEventListener("click", terminar);

  function empezar() {

    // Desactivar Inicio
    btnInicio.disabled = true;

    numerosAletorios();

    // Calcular
    cResultado.addEventListener("click", calcular);

    function calcular() {
      if (parseInt(respuesta.value) == numCorrecto) {
        puntos++;
        sppuntos.textContent = "Puntos: " + puntos;
        rCorrecta.textContent = "¡Correcto! Has acertado";
      } else {
        fallos++;
        spfallos.textContent = "Fallos: " + fallos;
        rCorrecta.textContent = "La respuesta correcta era: " + numCorrecto;
      }
      numerosAletorios();

    }
  }

  function numerosAletorios() {
    // Generar numeros aleatorios
    num1 = Math.round(Math.random() * 2);
    num2 = Math.round(Math.random() * 2);

    // Resultado correcto
    numCorrecto = num1 * num2;

    // Mostrar en pantalla los números aleatorios
    multiplicando.textContent = num1;
    multiplicador.textContent = num2;
  }

  function terminar() {
    btnInicio.disabled = false;
    multiplicando.textContent = "";
    multiplicador.textContent = "";

    fallos = 0;
    puntos = 0;

    spfallos.textContent = "";
    sppuntos.textContent = "";

    rCorrecta.textContent = "";
    respuesta.value = "";

  }
}