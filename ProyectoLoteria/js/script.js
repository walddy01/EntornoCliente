window.onload = inicio;

const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let vectorCajas = [];
let v_numeros = [];
let contAciertos = 0;
function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  let btnJugar = document.createElement("button");
  btnJugar.textContent = "SORTEO";
  cuerpo.appendChild(btnJugar);
  btnJugar.onclick = jugar;

  let btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  cuerpo.appendChild(btnReset);
  btnReset.onclick = reset;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);
    let contRojos = 0;

    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      caja.className = "gallery div";
      caja.textContent = x + 1;

      contenedorS.appendChild(caja);

      caja.onclick = marcar;

      function marcar() {
        // if (contRojos == 6) {
        // //   vectorCajas.forEach(accion);

        // //   function accion(item, index) {
        // //     if (item.style.backgroundColor == "red") {
        // //       console.log(item.textContent);
        // //       item.style.backgroundColor = "green";
        // //       v_numeros.slice(contRojos,1);
        // //     }
        //  // }
        // } else {
        //     vectorCajas.push(caja);
        //     console.log("Soy X "+x);
        //     v_numeros.push(x+1);
        //   caja.style.backgroundColor = "red";
        //   contRojos++;
        // }
        if (v_numeros.length < 6 && !v_numeros.includes(x + 1)) {
          console.log("Entro en marcar");
          vectorCajas.push(caja);
          console.log("Soy X " + (x + 1));
          v_numeros.push(x + 1);
          caja.style.backgroundColor = "red";
          // caja.onclick = desmarcar;
          contRojos++;
        }
      }

      function desmarcar() {
        console.log("Entro en desmarcar");

        // vectorCajas.forEach(accion);

        // function accion(item, index) {
        //   console.log("Entro en desmarcar bucle");
        //   if (item.style.backgroundColor == "red") {
        //     console.log("ITEM " + item.textContent);
        //     item.style.backgroundColor = "green";
        //     let n = parseInt(item.textContent);
        //     let posicion = v_numeros.indexOf(n);
        //     console.log("Posicion: " + posicion);
        //     v_numeros.slice(posicion, 1);
        //     contRojos--;
        //     caja.onclick = marcar;
        //   }
        // }
        if (caja.style.backgroundColor == "red") {
          console.log("ITEM " + caja.textContent);
          caja.style.backgroundColor = "green";
          let n = parseInt(caja.textContent);
          let posicion = v_numeros.indexOf(n);
          console.log("Posicion: " + posicion);
          v_numeros.splice(posicion, 1);
          contRojos--;
        }
        caja.onclick = marcar;
      }
    }
  }
}

function jugar() {
  //btnJugar.disabled = true;
  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);

  let vectorN = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.ceil(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    vectorN.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorSorteo.appendChild(box);
  }

  //vectorCajas.forEach(recorrido);
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "rgb(0,160,0)";
  contenedorSorteo.appendChild(resultado);
  console.log(v_numeros);
  console.log(vectorN);
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (v_numeros[i] == vectorN[j]) {
        contAciertos++;
      }
    }
  }
  //   function recorrido(item, index) {

  //     vectorN.forEach(accion2);

  //     function accion2(item2, index2) {

  //       if (item.textContent == item2.textContent) {
  //         console.log(item.textContent);
  //         contAciertos++;

  //       }

  //     //  resultado.textContent = cont;
  //     }

  //   }
  resultado.textContent = contAciertos;

  // --------------------------

  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);

  for (let i = 0; i < v_numeros.length; i++) {
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = v_numeros[i];
    box.style.backgroundColor = "yellow";
    contenedorBombo.appendChild(box);

    if (vectorN.includes(v_numeros[i])) {
      box.style.backgroundColor = "red";
    }
  }
}

function reset() {
  let resultado = prompt(
    "Elige la columna a resetear: - 0 todo \n - 1 columna 1 \n - 2 columna 2 \n - 3 columna 3"
  );

  if (resultado == 1) {
    vectorCajas.forEach(accion1);

    function accion1(item, index) {
      item.style.backgroundColor = "green";
    }
    v_numeros = [];
  }
}
