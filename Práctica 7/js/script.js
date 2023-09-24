window.onload=inicio;
const cajaPadre=document.getElementById("cajaPadre");
const sppuntos=document.getElementById("sppuntos")

let arrayIndices = [];

function inicio(){

    console.log("entro en inicio");

    let btnJugar = document.getElementById("jugar");
    btnJugar.onclick=Jugar;
}

function Jugar(){

    while(cajaPadre.firstChild){
        cajaPadre.removeChild(cajaPadre.firstChild);
    }
    
    for(let i = 0; i < 5; i++){
        let numRamdom = Math.round(Math.random() * 18);
        let imagenes=document.createElement("img");
        cajaPadre.appendChild(imagenes);
        let rutaImg = "img/"+numRamdom+".jpg";
        imagenes.setAttribute("src", rutaImg);
        arrayIndices[i] = numRamdom;
    }

    // Comprobar si hay imagenes repetidas
    function hayDuplicados(arrayIndices) {
        const noDupli = new Set(arrayIndices);
        if (arrayIndices.length !== noDupli.size){
            sppuntos.textContent = "Hay imagenes repetidas";
        }else{
            sppuntos.textContent = "No hay imagenes repetidas";
        }
      }

      hayDuplicados(arrayIndices);


}
