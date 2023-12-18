window.onload = inicio;

cuerpo = document.body;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;

let contadorRojos = 0;

function inicio() {
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    contenedorP.appendChild(contenedorS);

    leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);
    contenedorS.appendChild(leyenda);

    for (let j = 0; j < NUM_CAJAS; j++) {
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.style.backgroundColor = "green";
      caja.textContent = j + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;

      function marcar() {
        
          if (caja.style.backgroundColor == "green") {
            if (contadorRojos != 6) {
              console.log(caja.style.backgroundColor);
              caja.style.backgroundColor = "red";
              contadorRojos++;
              console.log(contadorRojos);
            }
          }else {
            if (caja.style.backgroundColor == "red"){
              caja.style.backgroundColor = "green";
              contadorRojos--;
              console.log(contadorRojos);
            }
          }
        
      }
    }
  }
}
