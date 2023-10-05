window.onload=inicio;

let btnJugar=document.getElementById("jugar");
const caja=document.getElementById("cajaPadre");
let puntos=document.getElementById("sppuntos");


function inicio(){

    btnJugar.onclick=jugar

    function jugar(){ 
        console.log("Entrando en jugar");

        caja.innerHTML = "";

        let totalCajas = document.getElementsByName("imagen");
        const numeros = [];

        for(let i = 0;i<5;i++){
            let foto=document.createElement("img");
            caja.appendChild(foto);

            let num = Math.round(Math.random()*19);
            numeros[i]=num;

            //let src = "img/"+num+".jpg";
            foto.src= "img/"+num+".JPG";
        }


        if(numeros[0]==numeros[1] || numeros[0]==numeros[2] || numeros[0]==numeros[3] || numeros[0]==numeros[4]){
            puntos.textContent="HAY REPETIDAS";
         }else if(numeros[1]==numeros[2] || numeros[1]==numeros[3] || numeros[1]==numeros[4] || numeros[1]==numeros[0]){
            puntos.textContent="HAY REPETIDAS";
         }else if(numeros[2]==numeros[1] || numeros[2]==numeros[3] || numeros[2]==numeros[4] || numeros[2]==numeros[0]){
            puntos.textContent="HAY REPETIDAS";
         }else if(numeros[3]==numeros[1] || numeros[3]==numeros[2] || numeros[3]==numeros[4] || numeros[3]==numeros[0]){
            puntos.textContent="HAY REPETIDAS";
         }else if(numeros[4]==numeros[1] || numeros[4]==numeros[2] || numeros[4]==numeros[3] || numeros[4]==numeros[0]){
            puntos.textContent="HAY REPETIDAS";
         }else{
            puntos.textContent="NO HAY REPETIDAS";
         }

    }
}