window.addEventListener("load", inicio);

// Identificar componentes HTML
let btnJugar = document.getElementById("jugar");
let spPuntos = document.getElementById("sppuntos");
let contenedorPrincipal = document.getElementById("contenedorP");

// Declarar vectores
const colores = ["Red", "Green", "Blue", "Orange", "Yellow"];
const nombres = ["Red", "Green", "Blue", "Orange", "Yellow"];

// Variables
let tiempo;
let contadorSegundos = 30;
let puntos = 0;

function inicio() {
  console.log("entro en inicio");

  let campo = document.createElement("fieldset");

  // Incorporar al nuevo componente creado el estilo de clase .container que está en el CSS
  campo.className = "container";

  let leyenda = document.createElement("legend");
  leyenda.textContent = "Juegos 21 S";
  campo.appendChild(leyenda);

  // Contenedor de los 15 botones de juego
  let contenedorFlex = document.createElement("div");
  contenedorFlex.className = "gallery";

  // Crear los 15 botones
  for (let i = 0; i < 15; i++) {
    let divs = document.createElement("div");
    divs.className = "fondo";
    divs.setAttribute("Name", "cajasJuego");
    contenedorFlex.appendChild(divs);
  }

  // El campo se añade a un elemento padre
  campo.appendChild(contenedorFlex);

  // Añadir el campo al contenedor principal
  contenedorPrincipal.appendChild(campo);

  btnJugar.onclick = jugar;
}

function jugar() {
  console.log("Entro en jugar");

  contadorSegundos = 30;
  puntos = 0;
  btnJugar.disabled = true;

  cargaInfo();
  coloresJuego();

  // Temporizador
  tiempo = setInterval(accion, 1000);

  function accion() {
    if (contadorSegundos > 0) {
      if (contadorSegundos % 5 == 0) {
        coloresJuego();
      }

      contadorSegundos--;
      cargaInfo();
    } else {
      limpiarDivs();
      alert("Fin de partida");
      clearInterval(tiempo);
    }
  }
}

function cargaInfo() {
  spPuntos.textContent =
    "Puntos: " + puntos + " ----- Tiempo: " + contadorSegundos;
}

function coloresJuego() {
  let arrayCajasJuego = document.getElementsByName("cajasJuego");

  // Foreach
  arrayCajasJuego.forEach(function (item, posicion) {
    let numColorFondo = Math.floor(Math.random() * colores.length);
    let numTextoFondo = Math.floor(Math.random() * nombres.length);

    item.style.backgroundColor = colores[numColorFondo];
    item.textContent = nombres[numTextoFondo];

    item.onclick = comprobar;

    function comprobar() {
      if (numColorFondo == numTextoFondo) {
        puntos++;
        item.onclick = function () {};
      } else {
        puntos--;
      }

      cargaInfo();
    }
  });
}

function limpiarDivs() {
  let arrayCajasJuego = document.getElementsByName("cajasJuego");

  arrayCajasJuego.forEach(function (item, posicion) {
    item.onclick = function () {};
  });
}
