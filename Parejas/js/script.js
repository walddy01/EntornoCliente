//Errores solucionados:
  //Al pulsar las dos imagenes podias seguir pulsando mas y se quedaban mostradas
  //Podias volver a pulsar la imagen que ya habias acertado y quitar la imagen de acierto o sumarte puntos
  //La segunda imagen no se mostraba porque desaparecia instantaneamente

//Errores por solucionar:
  //Puedes pulsar la misma imagen 2 veces para conseguir puntos

window.addEventListener('load', inicio);
const ArrayImagenes = ['img/0.JPG','img/1.JPG','img/2.JPG','img/3.JPG','img/4.JPG','img/5.JPG','img/6.JPG','img/7.JPG','img/ok.png'];
//array con 16 números enteros entre 0 y 7

const ArrayFinal=[];

  function inicio(){
    console.log("entra en inicio")
    const pantallaJ = document.getElementById("pantallaJuego");
    pantallaJ.className="grid";
    const resultado = document.getElementById("resultado");

    let caja1;
    let contadorAciertos=0;
    let temp;
    let pararClick=false;
    crearPanel();
    

    //crear panel juego
    function crearPanel(){

      crearOrden();

      let contComprobar=0;

      for(let i=0;i<16;i++){

        let caja=document.createElement("img");
        caja.className=ArrayFinal[i];
        caja.src="img/question.png";
        pantallaJ.appendChild(caja);
        console.log(caja);

        caja.addEventListener("click", comprobar);

        function comprobar(){
          if(pararClick==false && caja.className!=8){
            caja.src=ArrayImagenes[caja.className];

            if(contComprobar==0){
              //Primera imagen
              caja1=caja;
              contComprobar++;
              console.log(caja1.className);

            }else{
              //Segunda imagen
              pararClick=true;
              var n1=caja1.className;
              var n2=caja.className;

              if(n1==n2){
                //Los numeros son iguales
                temp=setInterval(cargar, 1000);
                function cargar(){
                  caja.src="img/ok.png";
                  caja1.src="img/ok.png";
                  contadorAciertos++;
                  cargarPuntos();
                  clearInterval(temp);
                  pararClick=false;
                  caja.className=8;
                  caja1.className=8;
                }
              }else{
                //Los numeros son distintos
                temp=setInterval(cargar, 1000);
                function cargar(){
                  caja.src="img/question.png";
                  caja1.src="img/question.png";
                  clearInterval(temp);
                  pararClick=false;
                }
              }
              contComprobar=0;
            }

            function cargarPuntos(){
              resultado.textContent="Puntos: "+ contadorAciertos;
            }
          }
        }
      }

      //Creacion del array con los numeros aleatorios del 0 al 7 dos veces repetidos
      function crearOrden(){

        let array1=[];
        let array2=[];
        let num1;
        let num2;

        for(let i=0;i<8;i++){
          
          do{
            num1=Math.round(Math.random()*7);
          }while(array1.includes(num1));
          array1.push(num1);

          do{
            num2=Math.round(Math.random()*7);
          }while(array2.includes(num2));
          array2.push(num2);
        }
        console.log(array1);
        console.log(array2);

        array1.forEach(function(item, indice){
          ArrayFinal.push(item);
        });
        array2.forEach(function(item, indice){
          ArrayFinal.push(item);
        });
        console.log(ArrayFinal);

        for(let i=ArrayFinal.length-1;i>0;i--){
          var j = Math.round(Math.random()*(i+1));
          [ArrayFinal[i],ArrayFinal[j]] = [ArrayFinal[j],ArrayFinal[i]];
        }
        console.log(ArrayFinal);

      }

    }
  }
  

  
 
