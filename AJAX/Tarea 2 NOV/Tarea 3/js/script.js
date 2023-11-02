window.onload = inicio;

function inicio() {
  let contenedorP = document.getElementById("cajaX");
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = cargar;

  function cargar() {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(xhr.responseText);
      objeto.forEach(recorrer);
    }
  }

  function recorrer(item, index) {
    
    let cajaS = document.createElement("div");
    cajaS.className = "card";


    let img = document.createElement("img");
    img.src = item.imagen;
    cajaS.appendChild(img);

    let texto = document.createElement("span");
    texto.className = "info";
    texto.innerHTML = item.texto;
    cajaS.appendChild(texto);

    let subtexto = document.createElement("span");
    subtexto.className = "info";
    subtexto.innerHTML = item.subtexto;
    cajaS.appendChild(subtexto);

    contenedorP.appendChild(cajaS);
  }

  xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
  xhr.send();
}
