window.onload=inicio;

let btn1=document.getElementById("avanzar");
let btn2=document.getElementById("avanzar2");
let cuerpo=document.querySelector("body");
const componentes2=[];

function inicio(){

    let contenedorP=document.createElement("div");
    contenedorP.className="container";
    let contenedorS=document.createElement("div");
    contenedorS.className="gallery";
    contenedorP.appendChild(contenedorS);
    cuerpo.appendChild(contenedorP);

    let contador1;
    let contador2;

    btn2.disabled=true;
    crearCajas();

    function crearCajas(){
        for(let i=0;i<40;i++){
            let caja=document.createElement("div");
            caja.className="fondo";
            console.log(caja);

            componentes2.push(caja);
            contenedorS.appendChild(caja);
        }
        console.log(componentes2);

    }

    btn1.onclick=avanzar1;
    btn2.onclick=avanzar2;

    function avanzar1(){

        componentes2.forEach(function(item, indice){
            item.style.backgroundColor="green";
        })

        clearInterval(contador2);

        btn1.disabled=true;
        btn2.disabled=false;

        var numeroCaja=0;

        contador1=setInterval(cambio1,500);

        function cambio1(){
            console.log(numeroCaja);
            //console.log(componentes);
            //console.log(componentes2[numeroCaja].style.backgroundColor);

            if(numeroCaja<componentes2.length){
                componentes2[numeroCaja].style.backgroundColor="red";
                if(numeroCaja>0){
                    componentes2[numeroCaja-1].style.backgroundColor="green";
                }
                numeroCaja++;
            } else{
                componentes2[numeroCaja-1].style.backgroundColor="green";
                numeroCaja=0;
            } 
           
        }

    }

    function avanzar2(){

        componentes2.forEach(function(item, indice){
            item.style.backgroundColor="green";
        })


        clearInterval(contador1);

        btn1.disabled=false;
        btn2.disabled=true;

        var numCaja=0;

        contador2=setInterval(cambio2,500);

        function cambio2(){

            if(numCaja<componentes2.length){

                if(componentes2[numCaja].style.backgroundColor=="green"){
                    componentes2[numCaja].style.backgroundColor="red";
                    numCaja++;
                }else{
                    componentes2[numCaja].style.backgroundColor="green";
                    numCaja++;
                }
            }else{
                numCaja=0;
            }

        }

    }



}