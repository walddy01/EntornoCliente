window.onload = inicio;

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let cuerpo = document.querySelector("body");
const componentes = [];

function inicio() {
    let contenedorP = document.createElement("div");
    contenedorP.className = "contaniner";
    let contenedorS = document.createElement("div");
    contenedorS.className = "gallery";
    contenedorP.appendChild(contenedorS);
    cuerpo.appendChild(contenedorP);

    

    function crearCajas() {
        for (let i = 0; i < 41; i++) {
            let caja = document.createElement("div");
            caja.className = "fondo";
            console.log(i);
            componentes.push(caja);
            
            contenedorS.appendChild(caja);
        }
    }

    crearCajas();

    btn2.disabled = true;
    btn1.onclick = avanzar1;

    function avanzar1() {
        
        let numeroCaja = 0;
        let contenedor1 = setInterval(cambioR, 500);

        function cambioR() {
            if(componentes[0].style.backgroundColor == "green") {
                if (numeroCaja == componentes.length) {
                    numeroCaja = 0;
                } else {
                    console.log(numeroCaja);
                    componentes[numeroCaja].style.backgroundColor = "red";
                }
            }else{
                if(numeroCaja==componentes.length){
                    numeroCaja=0
                }else{
                    componentes[numeroCaja].style.backgroundColor = "green";
                }
            }
            
            numeroCaja++;
        }
    }
}
