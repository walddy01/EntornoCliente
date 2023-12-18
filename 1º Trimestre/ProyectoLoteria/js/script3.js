window.onload = inicio;

cuerpo = document.body;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let numAciertos = 0;
let numRojos = 0;

let vCajas = [];
let vNumeros = [];
let columnasNumeros = [];


function inicio() {

  // Creación contenedor principal
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  // Creación del botón sorteo
  let btnSorteo = document.createElement("button");
  btnSorteo.textContent = "SORTEO";
  cuerpo.appendChild(btnSorteo);
  btnSorteo.onclick = sortear;

  // Creación del botón reset
  let btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  cuerpo.appendChild(btnReset);
  btnReset.onclick = reset;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    // Creación de las columnas
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    columnasNumeros[i] = [];
    console.log(columnasNumeros);
    for (let x = 0; x < NUM_CAJAS; x++) {
      // Creación de las 50 cajas
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;
      function marcar() {
        let indiceColumna = Array.from(contenedorP.children).indexOf(this.parentElement);

        if (columnasNumeros[indiceColumna].length < 6 && !columnasNumeros[indiceColumna].includes(x + 1)) {
          console.log("Entro en marcar");
          vCajas.push(this);
          console.log("Soy X " + (x + 1));
          columnasNumeros[indiceColumna].push(x + 1);
          caja.style.backgroundColor = "red";
          // caja.onclick = desmarcar;
          numRojos++;
        }
      } // Acaba la función marcar

      function desmarcar() {
        console.log("Entro en desmarcar");

        if (caja.style.backgroundColor == "red") {
          console.log("ITEM " + caja.textContent);
          caja.style.backgroundColor = "green";
          let n = parseInt(caja.textContent);
          let posicion = vNumeros.indexOf(n);
          console.log("Posicion: " + posicion);
          vNumeros.splice(posicion, 1);
          numRojos--;
        }
        caja.onclick = marcar;
      } // Acaba la función desmarcar
    }
  }
} // Acaba la función inicio

function sortear() {
  //btnSorteo.disabled = true;
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

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
    contenedorSorteo.appendChild(box);
  }

  //vCajas.forEach(recorrido);
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "rgb(0,160,0)";
  contenedorSorteo.appendChild(resultado);
  console.log(vNumeros);
  console.log(numGanadores);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (vNumeros[i] == numGanadores[j]) {
        numAciertos++;
      }
    }
  }
  resultado.textContent = numAciertos;

  // --------------------------

  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let i = 0; i < vNumeros.length; i++) {
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = vNumeros[i];
    box.style.backgroundColor = "yellow";
    contenedorBombo.appendChild(box);

    if (numGanadores.includes(vNumeros[i])) {
      box.style.backgroundColor = "red";
    }
  }
}

function reset() {
  let resultado = prompt(
    "Elige la columna a resetear: \n - 0 todo \n - 1 columna 1 \n - 2 columna 2 \n - 3 columna 3"
  );

  if (resultado == 0) {
    // Resetear todas las columnas
    for (let i = 0; i < NUM_COLUMNAS; i++) {
      let cajasColumna = Array.from(contenedorP.children[i].querySelectorAll(".gallery.div"));
      cajasColumna.forEach(caja => {
        caja.style.backgroundColor = "green";
      });
      columnasNumeros[i] = [];
    }
  } else if (resultado >= 1 && resultado <= NUM_COLUMNAS) {
    // Resetear una columna específica
    let indiceColumna = resultado - 1; // El índice de la columna seleccionada
    let cajasColumna = Array.from(contenedorP.children[indiceColumna].querySelectorAll(".gallery.div"));
    cajasColumna.forEach(caja => {
      caja.style.backgroundColor = "green";
    });
    columnasNumeros[indiceColumna] = [];
  }
}
