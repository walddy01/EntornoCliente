//Prueba Sincronización
window.addEventListener("load", inicio);
var interval1;
var interval2;
var color1;
var color2;
var contador;
var puntuacion;
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
  document.getElementById("btn9").addEventListener("click", funcion9);
  document.getElementById("btn10").addEventListener("click", funcion10);
  document.getElementById("btn11").addEventListener("click", funcion11);
  document.getElementById("btn12").addEventListener("click", funcion12);
  document.getElementById("btn13").addEventListener("click", funcion13);

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
      item.textContent = prompt("Introduce un número: ");
    }
  }

  function funcion9() {
    const listaComponentes = document.getElementsByClassName("caja");
    interval1 = setInterval(fRamdom, 500);
    function fRamdom() {
      for (let item of listaComponentes) {
        item.textContent = Math.round(Math.random() * 100);
      }
    }
  }

  function funcion10() {
    const colores = ["red", "green", "blue", "yellow", "purple"];
    const listaComponentes = document.getElementsByClassName("caja");
    let color;
    interval2 = setInterval(fRandom, 500);
    function fRandom() {
      for (let item of listaComponentes) {
        color = Math.round(Math.random() * 5);
        item.style.backgroundColor = colores[color];
      }
    }
  }

  function funcion11() {
    let btn11 = document.getElementById("btn11");
    // btn11.setAttribute("disabled", true);
    btn11.disabled = true;
    let countdown = setInterval(cuentaAtras, 1000);
    let reloj = 10;

    function cuentaAtras() {
      document.getElementById("c1").textContent = reloj;

      if (reloj == 0) {
        clearInterval(countdown);
        // btn11.removeAttribute("disabled");
        btn11.disabled = false;
      }
      reloj--;
    }
  }

  function funcion12() {
    //Puntuación
    puntuacion = 0;
    document.getElementById("c4").textContent = "Puntuación: " + puntuacion;
    document.getElementById("c1").addEventListener("click", fPuntuacion);
    function fPuntuacion() {
      if (color1 == color2) {
        puntuacion++;
        document.getElementById("c4").textContent = "Puntuación: " + puntuacion;
      } else {
        puntuacion--;
        document.getElementById("c4").textContent = "Puntuación: " + puntuacion;
      }
    }

    let btn12 = document.getElementById("btn12");
    btn12.disabled = true;
    //Contador
    contador = 30;
    countdown = setInterval(cuentaAtras, 1000);
    function cuentaAtras() {
      document.getElementById("c3").textContent = contador;
      if (contador == 0) {
        clearInterval(countdown);
        clearInterval(intervalColor);
        btn12.disabled = false;
      }
      contador--;
    }
    //Colores aleatorios
    const colores = ["red", "green", "blue", "yellow", "purple"];
    intervalColor = setInterval(cambioColor, 1000);
    function cambioColor() {
      color1 = Math.round(Math.random() * 4);
      color2 = Math.round(Math.random() * 4);
      document.getElementById("c1").style.backgroundColor = colores[color1];
      document.getElementById("c2").style.backgroundColor = colores[color2];
    }

    //Puntuación
    document.getElementById("c1").addEventListener("click", fPuntuacion);
  }
}
