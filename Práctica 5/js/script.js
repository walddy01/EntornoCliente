window.onload = inicio;

const btnInicio = document.getElementById("btnInicio");
const btnFin = document.getElementById("btnFin");
const multiplicando = document.getElementById("multiplicando");
const multiplicador = document.getElementById("multiplicador");
const cResultado = document.getElementById("cResultado");
const sppuntos = document.getElementById("sppuntos");
const spfallos = document.getElementById("spfallos");
const rCorrecta = document.getElementById("rCorrecta");

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
      //cResultado.disabled = true;
      if (parseInt(respuesta.value) == numCorrecto){
        puntos++;
        sppuntos.textContent = "Puntos: " + puntos;
        //cResultado.disabled = false;
        numerosAletorios();
      }else{
        fallos++;
        spfallos.textContent = "Fallos: " + fallos;
      }
      rCorrecta.textContent = "Respuesta correcta: " + numCorrecto;
    }

    


    respuesta.value = "";
    sppuntos.textContent = "Puntos: " + puntos;
    spfallos.textContent = "Fallos: " + fallos;

    

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
}

