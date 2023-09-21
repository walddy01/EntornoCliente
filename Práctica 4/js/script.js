window.onload = inicio;

//Identificar elementos html
let btnJugar = document.getElementById("jugar");
let spPuntos = document.getElementById("sppuntos");
let contenedorP = document.getElementById("contenedorP");

//Declarar vectores
const COLORES = ["Red", "Green", "Blue", "Orange", "Yellow"];
const NOMBRES = ["Red", "Green", "Blue", "Orange", "Yellow"];

//Variable
let tiempo;
let contadorSegundos = 30;
let puntos = 0;

function inicio() {
  //Comprobación de inicio
  console.log("inicio");

  //Creación de elementos
  let campo = document.createElement("fieldset");
  campo.className = "container";

  //Incorporamos el elemento campo dentro del contenedor principal
  contenedorP.appendChild(campo);

  //Creamos la leyenda
  let leyenda = document.createElement("legend");
  leyenda.textContent = "Juegos";

  //Incorporar la leyenda dentro del elemento campo
  campo.appendChild(leyenda);

  //Contenedor de los botones
  let contenedorFlex = document.createElement("div");
  contenedorFlex.className = "gallery";

  //Incorporamos el contenedor flex dentro del elemento campo
  campo.appendChild(contenedorFlex);

  //Creación de los botones de juego
  for (let i = 0; i < 15; i++) {
    divs = document.createElement("div");
    divs.className = "fondo";
    divs.setAttribute("Name", "cajasJuego");

    //Incorporamos los botones dentro del elemento campo
    contenedorFlex.appendChild(divs);
  }

  btnJugar.onclick = jugar;

  function jugar() {
    //Comprobación de jugar
    console.log("jugar");

    contadorSegundos = 30;
    puntos = 0;
    btnJugar.disabled = false;

    //Temporizador
    tiempo = setInterval(accion, 1000);
    function accion() {
      if (contadorSegundos > 0) {
        contadorSegundos--;
        //cargaInfo();
      } else {
        //limpiarDivs();
        alert("Fin de la Partida");
        clearInterval(tiempo);
      }
    }

    function ColoresJuego() {
      let arrayCajasJuego = document.getElementsByName("cajasJuego");
      //foreach
      arrayCajasJuego.forEach(function(item,posicion){
        let numColorFondo = Math.floor(Math.random()*COLORES.length);
        let numTextoFondo= Math.floor(Math.random()*NOMBRES.length);

    })
  }
}
}
