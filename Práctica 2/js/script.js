window.addEventListener("load", inicio);
function inicio() {
  console.log("Estoy en la función inicio");
  document.getElementById("btn1").addEventListener("click", funcion1);
  ocument.getElementById("btn3").addEventListener("click", funcion2);
  ocument.getElementById("btn4").addEventListener("click", funcion3);
  ocument.getElementById("btn5").addEventListener("click", funcion4);
  ocument.getElementById("btn6").addEventListener("click", funcion5);
  function funcion1() {
    alert("Estoy en la función 1");
  }
  function funcion2() {}
  function funcion3() {}
}
