window.addEventListener("load", inicio);

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
      let caja = document.getElementById("caja");
      let numR = Math.round(Math.random() * 6);
      console.log(numR);
      
      var objeto = JSON.parse(this.responseText);
      console.log(objeto[numR].url);
      item = objeto[numR];
      caja.innerHTML = "<video src='" + item.url +"' width='200px' height='100px' autoplay loop></video>";
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
  xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
  xhr.send();
}
