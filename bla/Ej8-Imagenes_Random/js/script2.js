window.onload=inicio;

function inicio(){

    var imagenReferncia;

    //Variables de HTML
    let btn=document.getElementById("mostrarJS");
    let cajaPadre=document.getElementById("padre");
    let imagenes=document.getElementById("cajaImagenes");

    //Crear otros elementos 
    let caja2=document.createElement("fieldset");
    caja2.className="gallery";
    caja2.style.border="1px solid black";
    caja2.style.borderRadius="1rem";

    let leyenda=document.createElement("legend");
    leyenda.textContent="Practica 8";
    caja2.appendChild(leyenda);
    caja2.appendChild(imagenes);

    let info=document.createElement("span");
    info.textContent="Tiempo: 30 ---- Puntos:0";
    cajaPadre.appendChild(info);
    
    let contenedorR=document.createElement("div");
    contenedorR.className="gallery";
    cajaPadre.appendChild(contenedorR);

    cajaPadre.appendChild(caja2);

    btn.onclick=generar;

    function generar(){
        console.log("Entrar en la funcion generar");

        let contS=30;
        let puntos=0;

        juego();
        cargarImgReferencia();

        let temp = setInterval(tiempo, 1000);
        function tiempo(){
            contS--;
            cargarInfo();
            if(contS==0){
                clearInterval(temp);
            }
            if(contS%3==0){
                juego();
                cargarImgReferencia();
            }
        }

        function juego(){
            imagenes.innerHTML="";
            let contador=0;

            for(let i =0;i<20;i++){
                
                let caja=document.createElement("img");

                let num;

                do{
                    num = Math.round(Math.random()*190);
                } while(num==0);

                if(num>95){
                    num= num-95;
                    caja.src= "https://randomuser.me/api/portraits/women/"+num+".jpg";
                    imagenes.appendChild(caja);
                } else {
                    caja.src= "https://randomuser.me/api/portraits/men/"+num+".jpg";
                    imagenes.appendChild(caja);
                }

                caja.onmouseover=function(){
                    caja.style.transform="scale(1.5)";
                }

                caja.onmouseout=function(){
                    caja.style.transform="scale(1)";
                }

                caja.onclick=function(){
                    if(caja.className == "ponerBorde"){
                        caja.className="quitarBorde"
                        contador--;
                    } else{
                        if(contador==6){
                            return
                        }
                        caja.className="ponerBorde";
                        contador++;
                    }
                }
                
                caja.onclick=function(){
                    console.log(caja.src);
                    console.log(imagenReferncia);
                    if(caja.src==imagenReferncia){
                        puntos++;
                    }
                }
                
            }
        }

        function cargarImgReferencia(){
            contenedorR.innerHTML="";
            let imagenR=document.createElement("img");
            imagenR.className="gallery img";
            let num1=Math.round(Math.random()*2);

            if(num1==0){
                let num2=Math.round(Math.random()*95);
                imagenR.src= "https://randomuser.me/api/portraits/men/"+num2+".jpg";
            } else{
                let num2=Math.round(Math.random()*95);
                imagenR.src= "https://randomuser.me/api/portraits/women/"+num2+".jpg";
            }

            contenedorR.appendChild(imagenR);
            imagenReferncia = imagenR.src;

        }

        function cargarInfo(){
            info.textContent="Tiempo: "+contS+" ---- Puntos: "+puntos;
        }

    }



}