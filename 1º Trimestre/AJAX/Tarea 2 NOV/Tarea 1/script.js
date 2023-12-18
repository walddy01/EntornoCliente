window.onload = inicio;

function inicio() {
  let tabla = document.querySelector(".table tbody");
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhr.responseText);
      objeto.forEach(recorrer);
    }
  }

  function recorrer(item, index) {
    
    let fila = document.createElement("tr");

    
    let idciudadtd = document.createElement("td");
    idciudadtd.textContent = item.ciudad_ID;
    fila.appendChild(idciudadtd);

    let nombreciudadtd = document.createElement("td");
    nombreciudadtd.textContent = item.ciudad_nombre;
    fila.appendChild(nombreciudadtd);

    let poblaciontd = document.createElement("td");
    poblaciontd.textContent = item.ciudad_poblacion;
    fila.appendChild(poblaciontd);

    let videotd = document.createElement("td");
    videotd.innerHTML = item.video;
    fila.appendChild(videotd);

    let imagentd = document.createElement("td");
    let imagen = document.createElement("img");
    imagen.src = item.imagen;
    imagen.width = 200;
    imagentd.appendChild(imagen);
    fila.appendChild(imagentd);

    let mapatd = document.createElement("td");
    mapatd.innerHTML = item.mapa;
    fila.appendChild(mapatd);

    tabla.appendChild(fila);
  }

  xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
  xhr.send();
}
