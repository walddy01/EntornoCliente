window.onload = inicio;

function inicio() {
  console.log("Estoy en la función inicio");

  //Elementos
  document.getElementById("jugar").addEventListener("click", iniciar);
  document.getElementById("parar").addEventListener("click", detener);
  let btnJugar = document.getElementById("jugar");
  let btnParar = document.getElementById("parar");
  let caja = document.getElementById("fondo");
  let spTiempo = document.getElementById("spTiempo");
  let spPuntos = document.getElementById("spPuntos");
  var tiempo;
  var puntos = 0;
  //Colores
  const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  const nombres = ["Azul", "Verde", "Rojo", "Amarillo"];

  //Funciones
  function iniciar() {
    btnJugar.disabled = true;
    tiempo = setInterval(juego, 1000);
    console.log("jugar");
    let contadorSegundos = 5;

    function juego() {
      //Contador
      spTiempo.textContent = contadorSegundos;
      if (contadorSegundos == 0) {
        clearInterval(tiempo);
        btnJugar.disabled = false;
      }
      contadorSegundos--;
      //Colores random
      let num1 = Math.round(Math.random() * 3);
      let num2 = Math.round(Math.random() * 3);

      caja.style.backgroundColor = colores[num1];
      caja.textContent = nombres[num2];

      //Jugación
      caja.addEventListener("click", puntuar);
      let puntuacion = 0;
      function puntuar() {
        if (num1 == num2) {
          puntuacion++;
          spPuntos.textContent = puntuacion;
        } else {
          puntuacion--;
          spPuntos.textContent = puntuacion;
        }
      }
    }
  }

  function detener() {}
}
