window.onload = inicio;

let cajaFruta = document.getElementById("cajaFruta");
let bloqueHTML = document.createElement("div");

let objeto;

function inicio() {
    console.log("inicio");
    
    cargarContenido();
}

function cargarContenido() {
    console.log("Cargar Contenido")

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(xhr.responseText);
            cargarFruta();
        }
    };

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos/index.php", true);
    xhr.send();
}

function cargarFruta() {
    for (let i = 0; i < objeto.length; i++) {
        bloqueHTML.innerHTML += "<div class='card text-left col-lg-6'>" +
        "<img class='card-img-top' src='"+objeto[i].photo+"' alt=''>" +
        "<div class='card-body'>" +
        "<h4 class='card-title'>" + objeto[i].name + "</h4>" +
        "<p class='card-text'>" + objeto[i].price + "</p>" +
        "</div>" +
        "</div>";
        console.log(objeto[i]);
    }

    cajaFruta.appendChild(bloqueHTML);
}
