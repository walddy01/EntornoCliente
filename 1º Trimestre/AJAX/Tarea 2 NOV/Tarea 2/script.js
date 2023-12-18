window.onload = inicio;

function inicio() {

  platos = document.querySelectorAll("#menu-lunch .row .col-lg-4");
  console.log(platos);
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhr.responseText);
      platos.forEach(recorrerPlatos);
      function recorrerPlatos(item, index) {
    
        item.querySelector("h4").textContent = objeto[index].nombre;
        item.querySelector("p").textContent = objeto[index].ingredientes;
        item.querySelector("img").src = objeto[index].imagen;
        item.querySelector(".price").textContent = objeto[index].precio;
      }
    }
    
  }

  xhr.open("GET", "http://moralo.atwebpages.com/restaurante/getPlatos.php", true);
  xhr.send();
}
