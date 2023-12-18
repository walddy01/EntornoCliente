window.addEventListener('load', inicio);
const ArrayImagenes = ['img/0.JPG','img/1.JPG','img/2.JPG','img/3.JPG','img/4.JPG','img/5.JPG','img/6.JPG','img/7.JPG','img/ok.png'];
const ArrayFinal = [];

function inicio(){
  const pantallaJ = document.getElementById("pantallaJuego");
  pantallaJ.className = "grid";
  const resultado = document.getElementById("resultado");

  let caja1 = null;
  let contadorAciertos = 0;
  let pararClick = false;
  crearPanel();

  function crearPanel(){

    crearOrden();

    for(let i = 0; i < 16; i++){

      let caja = document.createElement("img");
      caja.className = ArrayFinal[i];
      caja.src = "img/question.png";
      pantallaJ.appendChild(caja);

      caja.addEventListener("click", comprobar);

      function comprobar(){
        if(!pararClick && caja.className != 8 && caja !== caja1){
          caja.src = ArrayImagenes[caja.className];

          if(caja1 === null){
            // Primera imagen
            caja1 = caja;
          } else {
            // Segunda imagen
            pararClick = true;
            var n1 = caja1.className;
            var n2 = caja.className;

            if(n1 === n2){
              // Los números son iguales
              setTimeout(function(){
                caja.src = "img/ok.png";
                caja1.src = "img/ok.png";
                contadorAciertos++;
                cargarPuntos();
                pararClick = false;
                caja.className = 8;
                caja1.className = 8;
                caja1 = null;
              }, 1000);
            } else {
              // Los números son distintos
              setTimeout(function(){
                caja.src = "img/question.png";
                caja1.src = "img/question.png";
                pararClick = false;
                caja1 = null;
              }, 1000);
            }
          }
        }
      }
    }

    function cargarPuntos(){
      resultado.textContent = "Puntos: " + contadorAciertos;
    }

    // Creación del array con los números aleatorios del 0 al 7 dos veces repetidos
    function crearOrden(){
      let array1 = [];
      let array2 = [];
      let num1;
      let num2;

      for(let i = 0; i < 8; i++){
        do{
          num1 = Math.floor(Math.random() * 8);
        } while(array1.includes(num1));
        array1.push(num1);

        do{
          num2 = Math.floor(Math.random() * 8);
        } while(array2.includes(num2));
        array2.push(num2);
      }

      array1.forEach(function(item){
        ArrayFinal.push(item);
      });
      array2.forEach(function(item){
        ArrayFinal.push(item);
      });

      // Barajar el array final
      for(let i = ArrayFinal.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        [ArrayFinal[i], ArrayFinal[j]] = [ArrayFinal[j], ArrayFinal[i]];
      }
    }
  }
}
