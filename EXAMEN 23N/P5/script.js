window.onload = inicio;

function inicio() {

    let carousel = document.querySelector(".carousel-inner");

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            

        }
    }
    
    xhr.open("POST", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
    xhr.send();
}