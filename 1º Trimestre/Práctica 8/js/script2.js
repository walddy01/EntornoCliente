window.onload=inicio;
function inicio(){
    let contenedorP=document.createElement("div");
    contenedorP.className="container";
    let cuerpo=document.querySelector("body");
    cuerpo.appendChild(contenedorP);

    let contenedorS=document.createElement("fieldset");
    contenedorS.className="gallery";
    let leyenda=document.createElement("legend");
    leyenda.textContent="Práctica 8";
    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);

    refrescar();
    var contadorBordesR=0;

    var segundos=30;
    var temporizador=setInterval(refrescar, 10000);

    function refrescar(){
        //contenedorS.innerHTML="";
        let arrayimg=document.querySelectorAll("img");
            console.log(arrayimg);
            arrayimg.forEach(function(item, indice){
                contenedorS.removeChild(item);
            });

    for(let i=0;i<20;i++){
    let numRandom=Math.floor(Math.random()*20);
    let rutaM="https://randomuser.me/api/portraits/men/";
    let rutaW="https://randomuser.me/api/portraits/women/";

    let imagen=document.createElement("img");
    imagen.className="gallery img";
    contenedorS.appendChild(imagen);

    if(i%2==0){
        imagen.src=rutaM+numRandom+".jpg";
    }else{
        imagen.src=rutaW+numRandom+".jpg";
    }
    imagen.onmouseover=expandir;
    imagen.onmouseleave=encoger;
    imagen.onclick=borde;


    function expandir(){
        imagen.style.transform="scale(2)";
    
    }
    function encoger(){
        imagen.style.transform="scale(1)";
    }

    function borde(){
        if(imagen.className=="ponerBorde"){
            imagen.className="quitarBorde";
            contadorBordesR--;
            console.log(contadorBordesR);
        }else{
            if(contadorBordesR==6){
            return;
        }
            imagen.className="ponerBorde";
            contadorBordesR++;
            console.log(contadorBordesR);
        }

        if(contadorBordesR==6){
            console.log("desactivar");
            let arrayimg=document.querySelectorAll("img");
            console.log(arrayimg);
            arrayimg.forEach(function(item, indice){
                item.disabled=true;
            });
        }
    }
    }
}

}