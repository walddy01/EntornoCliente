window.onload = inicio();



function inicio() {
    let elemento = document.querySelector("#btnAdd");
    elemento.addEventListener("click", insertarUsuario);

    

    cargarTabla();
}

function cargarTabla() {
    var tabla = document.querySelector("#cajaTabla");
    let bloqueHtml = document.createElement("div");
    bloqueHtml.innerHTML = "<div class='row'>"+
    "<div class='col-lg-2' text-center>DNI</div>"+
    "<div class='col-lg-2' text-center>NOMBRE</div>"+
    "<div class='col-lg-2' text-center>APELLIDO</div>"+
    "<div class='col-lg-2' text-center>ELIMINAR</div>"+
    "<div class='col-lg-2' text-center>MODIFICAR</div></div>";
    tabla.appendChild(bloqueHtml);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);
            function recorrer(item, index){
                
            }
        }
    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();

    
}

function insertarUsuario() {

}