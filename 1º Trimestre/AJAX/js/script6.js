window.addEventListener("load", inicio);
let contador = 0;
function inicio() {
  let btnMostrar = document.getElementById("mostrar");
  btnMostrar.addEventListener("click", mostrar);
}

function mostrar() {
  // Crear un objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    // Control de estado de la petisión de datos y del estado del servidor
    if (this.readyState == 4 && this.status == 200) {
      // He accedido al fichero de datos y está habierto el servidor
      // Tengo que averiguar en que formato estoy recibiendo los datos para hacer el parseo
      let video = document.getElementById("video");
      let idV = document.getElementById("idVideo");
      if (contador == 7){
        contador = 0;
    }
      console.log(contador);
      
      var objeto = JSON.parse(this.responseText);
      console.log(objeto[contador].url);
      item = objeto[contador];
      idV.innerHTML = "ID: " + item.id;
      video.setAttribute("src", item.url); //video.innerHTML = "<video src='" + item.url +"' width='200px' height='100px' autoplay loop></video>";
    //   objeto.forEach(recorrer);
    //   function recorrer(item, index) {
    //     let divX = document.createElement("div");
    //     divX.className = "col-lg-3";
        // divX.innerHTML =
        //   "<video src='" +
        //   item.url +
        //   "' width='200px' height='100px' autoplay loop></video>";
    //     fila.appendChild(divX);
    //   }
    }
  }
  
  
  // Primero hay que hacer la petición
  xhr.open("GET", "js/getWebcam.json", true);
  xhr.send();
  contador++;
}
