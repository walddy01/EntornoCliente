window.addEventListener("load", inicio);
function inicio() {
  console.log("Estoy en la función inicio");
  document.getElementById("btn1").addEventListener("click", funcion1);
  ocument.getElementById("btn3").addEventListener("click", funcion2);
  ocument.getElementById("btn4").addEventListener("click", funcion3);
  ocument.getElementById("btn5").addEventListener("click", funcion4);
  ocument.getElementById("btn6").addEventListener("click", funcion5);
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
  function funcion2() {}
  function funcion3() {}
}
