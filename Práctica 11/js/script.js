window.onload = inicio;

cuerpo = document.body;
const NUM_COLUMNAS = 3;
const NUM_CAJAS = 50;
let columnas = [];

function inicio() {

    contenedorP = document.createElement("div");
    cuerpo.appendChild(contenedorP);
    contenedorP.className = "container";

    
    contenedorT = document.createElement("div");

    let vectorCajas = [];
    
    for (let i = 0; i < NUM_COLUMNAS; i++) {
        contenedorS = document.createElement("fieldset");
        contenedorS.className = "gallery";
        contenedorP.appendChild(contenedorS);

        let leyenda = document.createElement("legend");
        leyenda.textContent = "Columna " + (i + 1);
        contenedorS.appendChild(leyenda);

        columnas.push(contenedorS);
        let cont = 0;

        for (let j = 0; j < NUM_CAJAS; j++) {
            let cajas = document.createElement("div");
            cajas.className = "gallery div";
            cajas.textContent = j + 1;
    
            contenedorS.appendChild(cajas);
            //columnas[i].appendChild(cajas);

            cajas.onclick = marcar;
            vectorCajas.push(cajas);

            function marcar() {
                
                if (cont == 6) {
                    console.log("");
                }else {
                    if (cajas.className == "gallery div") {
                        cajas.style.backgroundColor = "red";
                        cont++;
                    }else {
                        cajas.style.backgroundColor = "green";
                        cont--;
                    }
                    
                }
                
                
                
            }
            
            
        }
    }

    

    
    


}