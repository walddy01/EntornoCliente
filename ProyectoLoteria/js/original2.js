window.onload = inicio;

cuerpo = document.body;

const NUM_COLUMNAS = 6;
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
  // Crear un contenedor para los números ganadores
  let contenedorGanadores = document.createElement("div");
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

  // Crear un contenedor "Bombo" separado para cada columna
  for (let i = 0; i < NUM_COLUMNAS; i++) {
    let columna = columnasNumeros[i];
    let numAciertosColumna = 0; // Para contar los aciertos de esta columna

    // Crear un contenedor "Bombo" para esta columna
    let contenedorBombo = document.createElement("div");
    contenedorBombo.className = "gallery2";
    cuerpo.appendChild(contenedorBombo);

    // Crear 6 divs con fondo amarillo para mostrar los números seleccionados de esta columna
    for (let j = 0; j < 6; j++) {
      let cajaSeleccionada = document.createElement("div");
      cajaSeleccionada.className = "gallery2 div";
      cajaSeleccionada.textContent = columna[j];
      cajaSeleccionada.style.backgroundColor = "yellow";
      contenedorBombo.appendChild(cajaSeleccionada);
    }

    // Crear el séptimo div con fondo verde para mostrar los aciertos de esta columna
    let aciertosColumna = document.createElement("div");
    aciertosColumna.className = "gallery2 div";
    aciertosColumna.textContent = numAciertosColumna;
    aciertosColumna.style.backgroundColor = "rgb(0, 160, 0)";
    contenedorBombo.appendChild(aciertosColumna);
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

