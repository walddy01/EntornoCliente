window.onload = inicio;

let btnM = document.getElementById("btn1");
let cuerpo = document.querySelector("body");
const componentes = [];

function inicio(){

    console.log("inicio");

    btnM.onclick = mover;

    let contenedorP = document.createElement("div");
    let contenedorTodos = document.createElement("fieldset");
    let contenedorAzul = document.createElement("fieldset");
    let contenedorVerde = document.createElement("fieldset");
    let contenedorRojo = document.createElement("fieldset");
    let contenedorNaranja = document.createElement("fieldset");

    let leyendaTodos = document.createElement("legend");
    let leyendaAzul = document.createElement("legend");
    let leyendaVerde = document.createElement("legend");
    let leyendaRojo = document.createElement("legend");
    let leyendaNaranja = document.createElement("legend");

    cuerpo.appendChild(contenedorP);
    contenedorP.appendChild(contenedorTodos);
    contenedorP.appendChild(contenedorAzul);
    contenedorP.appendChild(contenedorVerde);
    contenedorP.appendChild(contenedorRojo);
    contenedorP.appendChild(contenedorNaranja);

    contenedorTodos.appendChild(leyendaTodos);
    contenedorAzul.appendChild(leyendaAzul);
    contenedorVerde.appendChild(leyendaVerde);
    contenedorRojo.appendChild(leyendaRojo);
    contenedorNaranja.appendChild(leyendaNaranja);

    leyendaTodos.textContent = "Todos";
    leyendaAzul.textContent = "Azules";
    leyendaVerde.textContent = "Verde";
    leyendaRojo.textContent = "Rojo";
    leyendaNaranja.textContent = "Naranja";

    contenedorP.className = "container";
    contenedorTodos.className = "gallery";

    let colores = ["Orange", "Blue", "Green", "Red"];
    let coloresT = ["Naranja", "Azul", "Verde", "Rojo"];

    for (let i=0;i<20;i++){
        let num1 = Math.round(Math.random()*3);

        let cajaColor = document.createElement("div");
        cajaColor.textContent = coloresT[num1];
        cajaColor.style.backgroundColor = colores[num1];
        cajaColor.className = "gallery";
        
        componentes.push(cajaColor);
        contenedorTodos.appendChild(cajaColor);

      
    }

    function mover(){
        componentes.forEach(accion);

        function accion(item, indice){
            console.log(item.style.backgroundColor);
            
            switch (item.style.backgroundColor) {
                case "orange":
                    contenedorNaranja.appendChild(item);
                    break;
                case "blue":
                    contenedorAzul.appendChild(item);
                    break;
                case "green":
                    contenedorVerde.appendChild(item);
                    break;
                case "red":
                    contenedorRojo.appendChild(item);
                    break;   
            
                default:
                    break;
            }
            
        }
    }




}