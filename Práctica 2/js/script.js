//Prueba Sincronización
window.addEventListener("load", inicio);
function inicio() {
  console.log("Estoy en la función inicio");
  document.getElementById("btn1").addEventListener("click", funcion1);
  document.getElementById("btn2").addEventListener("click", funcion2);
  document.getElementById("btn3").addEventListener("click", funcion3);
  document.getElementById("btn4").addEventListener("click", funcion4);
  document.getElementById("btn5").addEventListener("click", funcion5);
  document.getElementById("btn6").addEventListener("click", funcion6);
  document.getElementById("btn7").addEventListener("click", funcion7);
  document.getElementById("btn8").addEventListener("click", funcion8);
  function funcion1() {
    let numero1 = Math.round(Math.random() * 100);

    //Primera opción
    /* document.getElementById("c1").textContent=numero1;
    document.getElementById("c1").style.backgroundColor="green"; */

    //Segunda opción
    let caja1 = document.getElementById("c1");
    caja1.textContent = numero1;
    caja1.style.backgroundColor = "green";

    //Tercera opción
    /* with (document.getElementById("c1")) {
      textContent=numero1;
      style.backgroundColor="green";
    } */
  }
  function funcion2() {
    const colores = ["red", "green", "blue", "yellow", "purple"];
    let indice = Math.round(Math.random() * 5);
    document.getElementById("c2").style.backgroundColor = colores[indice];

    let numero2 = Math.round(Math.random() * 100);
    document.getElementById("c2").textContent = numero2;
    document.getElementById("c2").style.fontSize = "50px";
  }
  function funcion3() {
    let num1 = prompt("Introduce un número: ");
    let num2 = prompt("Introduce otro número: ");
    document.getElementById("c3").textContent = parseInt(num1) + parseInt(num2);
    document.getElementById("c3").style.fontSize = "50px";
    document.getElementById("c3").style.backgroundColor = "orange";
  }

  function funcion4() {
    let randomNum = Math.round(Math.random() * 10);
    let intento;

    let final = false;
    while (!final) {
      intento = prompt("Introduce un número del 0 al 10: ");
      if (intento != randomNum) {
        if (intento > randomNum) {
          alert("El número es menor");
        } else {
          alert("El número es mayor");
        }
      } else {
        final = true;
        document.getElementById("c4").textContent =
          "Has acertado: " + randomNum;
        document.getElementById("c4").style.backgroundColor = "green";
        document.getElementById("c4").style.fontSize = "20px";
      }
    }
  }

  function funcion5() {
    let fecha = new Date();
    document.getElementById("c5").textContent = fecha.getFullYear();
  }

  function funcion6() {
    let fecha = new Date();
    let dia = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    let hora = fecha.getHours();
    let min = fecha.getMinutes();

    document.getElementById("c6").textContent =
      dia + "/" + mes + "/" + anio + " " + hora + ":" + min;
  }

  function funcion7() {
    const listaComponentes = document.getElementsByClassName("caja");
    for (let item of listaComponentes) {
      item.textContent = Math.round(Math.random() * 100);
    }
  }

  function funcion8() {
    const listaComponentes = document.getElementsByClassName("caja");
    for (let item of listaComponentes) {
      item.context=prompt("Introduce un número: ");
    }
  }
}
