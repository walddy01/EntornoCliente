window.addEventListener("load", inicio);

//identificar componentes html
let btnJugar=document.getElementById("jugar");
let spPuntos=document.getElementById("sppuntos");
let cajaPrincipal=document.getElementById("contenedorP");

//Declarar vectores
const colores=["Red","Green","Blue","Yellow","Orange"];
const nombres=["Red","Green","Blue","Yellow","Orange"];

//Variables
let tiempo;
let contadorSeg = 30;
let puntos = 0;


function inicio(){
    console.log("entro en inicio");

    let campo=document.createElement("fieldset");
    //incorpora al nuevo componente creado el estilo de clase .container, que esta en el css
    campo.className="container";

    let leyenda=document.createElement("legend");
    leyenda.textContent="Juego 21 S";
    campo.appendChild(leyenda);

    let contenedorFlex=document.createElement("div");
    contenedorFlex.className="gallery";

    //15 botones de juego
    console.log("Bucle para crear las cajas");
    for (let i=0; i<15;i++){
        let divs=document.createElement("div");
        divs.className="fondo";
        divs.setAttribute("Name","cajasJuego");
        contenedorFlex.appendChild(divs);
    }
    campo.appendChild(contenedorFlex);

    //Añadir campos al contenedor principal
    cajaPrincipal.appendChild(campo);

    btnJugar.onclick=jugar;

    function jugar(){
        console.log("entrando en jugar");
        contadorSeg = 30;
        puntos = 0;
        btnJugar.disabled=true;
        cargarInfo();
        cargarColoresJuegos();
    
        //temporizador
        tiempo=setInterval(accion,1000);
        function accion(){
            if (contadorSeg == 0){
                cargarInfo();
                limpiardivs();
                alert("Fin de partida");
                btnJugar.disabled=false;
                clearInterval(tiempo);
            } else {
                cargarInfo();
                if(contadorSeg%5==0) cargarColoresJuegos();
            }
            contadorSeg--;
        }
    
    }
    
    function cargarInfo(){
        spPuntos.textContent= "Puntos: " + puntos + " --- Tiempo: " + contadorSeg;
    
    }
    
    function cargarColoresJuegos(){
        let arrayCajasJuego = document.getElementsByName("cajasJuego");
        //foreach
        arrayCajasJuego.forEach(function(item,posicion){
            let num1 = Math.round(Math.random()*4);
            let num2 = Math.round(Math.random()*4);
    
            item.style.backgroundColor=colores[num1];
            item.textContent=nombres[num2];
    
            item.onclick=comprobar;
            function comprobar(){
                if(num1==num2){
                    puntos++;
                    item.onclick=function(){};
                }else{
                    puntos--;
                }
            }
            
        });
    }
    
    function limpiardivs(){
        let arrayCajasJuego = document.getElementsByName("cajasJuego");
        arrayCajasJuego.forEach(function(item,posicion){
            item.onclick=function(){};
    
        });
    }

}

