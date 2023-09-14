window.addEventListener("load", inicio);
function inicio() {
  console.log("Estoy en la función inicio");
  document.getElementById("btn1").addEventListener("click", funcion1);
  document.getElementById("btn2").addEventListener("click", funcion2);
  document.getElementById("btn3").addEventListener("click", funcion3);
  document.getElementById("btn4").addEventListener("click", funcion4);
  document.getElementById("btn5").addEventListener("click", funcion5);
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
    const colores = ["red", "green", "blue", "yellow"];
    let indice = Math.round(Math.random() * 4);
    document.getElementById("c2").style.backgroundColor = colores[indice];

    let numero2 = Math.round(Math.random() * 100);
    document.getElementById("c2").textContent = numero2;
    document.getElementById("c2").style.fontSize = "50px";
  }
  function funcion3() {}
}
