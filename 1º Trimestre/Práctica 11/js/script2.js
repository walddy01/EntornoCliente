window.onload = inicio;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;

function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnJugar = document.createElement("buttom");
  // btnJugar.textContent = "SORTEO";
  cuerpo.appendChild(btnJugar);
  btnJugar.onclick = jugar;

  let vectorCajas = [];

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    let cont = 0;
    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;
      vectorCajas.push(caja);

      function marcar() {
        if (cont == 6) {
          vectorCajas.forEach(accion);

          function accion(item, index) {
            if (item.style.backgroundColor == "red") {
              console.log(item.textContent);
            }
          }
        } else {
          caja.style.backgroundColor = "red";
          cont++;
        }
      }
    }
  }
}

function jugar() {
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];
  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      let num = Math.round(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    box.appendChild(contenedorSorteo);
  }
}
