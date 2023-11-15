window.onload = inicio;
let catalogo = document.getElementById("catalogo");
catalogo.innerHTML = "";

  let bloqueHtml = document.createElement("div");
  let objeto;

function inicio() {

  cargarContenido();
  cargarFrutas();
  }

  function cargarFrutas() {
    console.log("objeto.length");
    console.log(objeto[1].photo);
    for (let i = 0; i < objeto.length; i++) {
      bloqueHtml.innerHTML +=
        "<div class='card text-left'>" +
        "<img class='card-img-top' src='"+objeto[i].photo+"' alt=''>" +
        "<div class='card-body'>" +
        "<h4 class='card-title'>" + objeto[i].name + "</h4>" +
        "<p class='card-text'>" + objeto[i].price + "</p>" +
        "</div>" +
        "</div>";
    }
    catalogo.appendChild(bloqueHtml);
  }


  function cargarContenido() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
      if (this.readyState == 4 && this.status == 200) {
        objeto = JSON.parse(this.responseText);
        objeto.forEach(recorrer);

        function recorrer (item, index) {} 
        }
        
      }
      xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
      xhr.send();
    }