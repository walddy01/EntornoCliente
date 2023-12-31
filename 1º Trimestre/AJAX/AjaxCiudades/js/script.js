window.onload = inicio;

let cajaMostrar = document.getElementById("mostrarCiudades");




function inicio() {
    document.getElementById("btnInsertar").addEventListener("click", insertarCiudad);
    document.getElementById("btnEliminar").addEventListener("click", eliminarCiudad);
    document.getElementById("btnMostrar").addEventListener("click", mostrarCiudades);

    
    mostrarCiudades();

    

}

function eliminarCiudad() {
    console.log("eliminar");

    var id = document.getElementById("_id").value;

    $.ajax({
        url: 'http://moralo.atwebpages.com/menuAjax/ciudades/EliminarCiudades.php',
        type: 'GET',
        data: {
            id:id
        }
    })
}
function insertarCiudad() {
    console.log("insertar");

    var id = document.getElementById("_id").value;
    var nombre = document.getElementById("_nombre").value;
    var poblacion = document.getElementById("_poblacion").value;
    var densidad = document.getElementById("_densidad").value;
    var extension = document.getElementById("_superficie").value;
    

    $.ajax({
        url: 'http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php',
        type: 'POST',
        data: {
            id:id,
            nombre:nombre,
            poblacion:poblacion,
            densidad:densidad,
            extension:extension
        }
    });
}

function mostrarCiudades() {
    console.log("mostrar");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        
        let bloqueHTML = document.createElement("div");
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);

            function recorrer(item, index) {
                console.log(item);
                bloqueHTML.innerHTML += "<div class='row'>" +
                    "<div class='col-lg-2'>" + item.id + "</div>" +
                    "<div class='col-lg-2'>" + item.nombre + "</div>" +
                    "<div class='col-lg-2'>" + item.poblacion + "</div>" +
                    "<div class='col-lg-2'>" + item.densidad + "</div>" +
                    "<div class='col-lg-2'>" + item.extencion + "</div></div>";
            }
            cajaMostrar.innerHTML = "";
            cajaMostrar.appendChild(bloqueHTML);
        }
    }

    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php", true);
    xhr.send();
}