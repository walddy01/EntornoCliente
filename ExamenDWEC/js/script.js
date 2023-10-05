window.onload = inicio;

cuerpo = document.body;

const NUM_COLUMNAS = 6;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;

let numAciertos = 0;
let numRojos = 0;

let columnasNumeros = [];
let contenedorBombo;
let contenedorGanadores;
function inicio() {

  // Contenedor principal
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  // Contenedor de botones
  contenedorB = document.createElement("div");
  contenedorB.className = "container";
  cuerpo.appendChild(contenedorB);


  // Botón sorteo
  let btnSorteo = document.createElement("button");
  btnSorteo.textContent = "SORTEO";
  contenedorB.appendChild(btnSorteo);
  btnSorteo.onclick = sortear;

  // Botón reset
  let btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  contenedorB.appendChild(btnReset);
  btnReset.onclick = reset;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    columnasNumeros[i] = [];
    
    console.log(columnasNumeros);
    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);
      caja.onclick = marcar;
      function marcar() {
        let indiceColumna = Array.from(contenedorP.children).indexOf(this.parentElement);

        if (columnasNumeros[indiceColumna].length < 6 && !columnasNumeros[indiceColumna].includes(x + 1)) {
          console.log("Entro en marcar");
          console.log("Soy X " + (x + 1));
          columnasNumeros[indiceColumna].push(x + 1);
          caja.style.backgroundColor = "red";
          numRojos++;
        } else {
          if (caja.style.backgroundColor == "red") {
            caja.style.backgroundColor = "green";
            columnasNumeros[indiceColumna].splice(columnasNumeros[indiceColumna].indexOf(x + 1),1);
            numRojos--;
            console.log(numRojos);
            console.log(columnasNumeros);
          }
        } 
      }
    }
  }
}

function sortear() {

  contenedorGanadores = document.createElement("div");
  contenedorGanadores.className = "gallery2";
  cuerpo.appendChild(contenedorGanadores);

  let numGanadores = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.ceil(Math.random() * 50);
    } while (numGanadores.includes(num));

    numGanadores.push(num);
    numGanadores.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorGanadores.appendChild(box);
  }
  let box = document.createElement("div");
  box.className = "gallery2 div";
  box.textContent = "Sorteo Ganador Aciertos";
  contenedorGanadores.appendChild(box);

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let columna = columnasNumeros[i];
    let numAciertosColumna = 0;

    contenedorBombo = document.createElement("div");
    contenedorBombo.className = "gallery2";
    cuerpo.appendChild(contenedorBombo);

    for (let j = 0; j < 6; j++) {
      let cajaSeleccionada = document.createElement("div");
      cajaSeleccionada.className = "gallery2 div";
      let numeroSeleccionado = columna[j];
      cajaSeleccionada.textContent = numeroSeleccionado;
      cajaSeleccionada.style.backgroundColor = "yellow";
      contenedorBombo.appendChild(cajaSeleccionada);

      if (numGanadores.includes(numeroSeleccionado)) {
        cajaSeleccionada.style.backgroundColor = "pink";
        numAciertosColumna++;
      }
    }

    let aciertosColumna = document.createElement("div");
    aciertosColumna.className = "gallery2 div";
    aciertosColumna.textContent = numAciertosColumna;
    aciertosColumna.style.backgroundColor = "rgb(0, 160, 0)";
    contenedorBombo.appendChild(aciertosColumna);
  }
}

function reset() {
  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let cajasColumna = Array.from(contenedorP.children[i].querySelectorAll(".gallery.div"));
    cajasColumna.forEach((caja) => {caja.style.backgroundColor = "green";});
    columnasNumeros[i] = [];
  }
}
