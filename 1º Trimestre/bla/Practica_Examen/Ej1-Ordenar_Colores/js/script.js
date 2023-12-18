window.onload=inicio;

let btn=document.getElementById("ordenacion");
let cuerpo=document.querySelector("body");

function inicio(){

    const colores=["Blue","Red","Green","Orange"];
    const coloresT=["Azul","Rojo","Verde","Naranja"];
    const cajas=[];

    //Contenedor Principal
    let contenedorP=document.createElement("div");
    contenedorP.className="container";

    //Contenedor de cajas
    let contenedor2=document.createElement("fieldset");
    contenedor2.className="gallery";
    contenedor2.style.maxWidth="50%";
    let leyenda2=document.createElement("legend");
    leyenda2.textContent="Colores";
    contenedor2.appendChild(leyenda2);

    //Contenedor Azul
    let contenedorB=document.createElement("fieldset");
    contenedorB.className="gallery";
    let leyendaB=document.createElement("legend");
    leyendaB.textContent="Azul";
    contenedorB.appendChild(leyendaB);

    //Contenedor Rojo
    let contenedorR=document.createElement("fieldset");
    contenedorR.className="gallery"
    let leyendaR=document.createElement("legend");
    leyendaR.textContent="Rojo";
    contenedorR.appendChild(leyendaR);

    //Contenedor Verde
    let contenedorG=document.createElement("fieldset");
    contenedorG.className="gallery";
    let leyendaG=document.createElement("legend");
    leyendaG.textContent="Verde";
    contenedorG.appendChild(leyendaG);

    //Contenedor Naranja
    let contenedorO=document.createElement("fieldset");
    contenedorO.className="gallery";
    let leyendaO=document.createElement("legend");
    leyendaO.textContent="Naranja";
    contenedorO.appendChild(leyendaO);

    //Añadiendo contenedores
    contenedorP.appendChild(contenedor2);
    contenedorP.appendChild(contenedorB);
    contenedorP.appendChild(contenedorR);
    contenedorP.appendChild(contenedorG);
    contenedorP.appendChild(contenedorO);
    cuerpo.appendChild(contenedorP);

    for(let i=0;i<20;i++){

        let numR=Math.round(Math.random()*3);

        let caja=document.createElement("div");
        caja.className="gallery img";
        caja.style.backgroundColor=colores[numR];
        caja.style.minWidth="25%";
        caja.textContent=coloresT[numR];

        console.log(caja);

        cajas[i]=caja;

        console.log(cajas);

        contenedor2.appendChild(caja);
    }

    btn.onclick=mover;

    function mover(){

        console.log("Click en boton"); 
        console.log(cajas); 

        cajas.forEach(accion);

        function accion(item, indice){
            switch(item.style.backgroundColor){
                case "blue":
                    contenedorB.appendChild(item);
                    break;

                case "red":
                    contenedorR.appendChild(item);
                break;

                case "green":
                    contenedorG.appendChild(item);
                    break;

                case "orange":
                    contenedorO.appendChild(item);
                    break;
            }
        }

    }




}