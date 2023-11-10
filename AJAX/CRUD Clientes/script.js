window.onload = inicio();



function inicio() {
    let elemento = document.querySelector("#btnAdd");
    elemento.addEventListener("click", insertarUsuario);

    

    cargarTabla();
}

function cargarTabla() {
    var tabla = document.querySelector("#cajaTabla");
    let bloqueHtml = document.createElement("tr");
    bloqueHtml.innerHTML = "<tr>"+ 
    "<th class='col-lg-2' text-center>DNI</th>"+
    "<th class='col-lg-2' text-center>NOMBRE</th>"+
    "<th class='col-lg-2' text-center>APELLIDO</th>"+
    "<th class='col-lg-2' text-center>ELIMINAR</th>"+
    "<th class='col-lg-2' text-center>MODIFICAR</th>"+ "</tr>";
    
    tabla.appendChild(bloqueHtml);
   

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);
            function recorrer(item, index){
                cajaTabla.innerHTML += "<tr> " +
                "<td>" + item.dni + "</td>" +
                "<td>" + item.nombre + "</td>" +
                "<td>" + item.apellidos + "</td>" +
                "<td><a class='btn btn-danger btn-md' href='javascript:void(0)' 'onclick=eliminar(\'"+item.dni+"\')>Eliminar</a> </td>" +
                "<td><a class='btn btn-info btn-md' href='javascript:void(0)' 'onclick=modificar("+vector+")>Modificar</a></td>" +
                "</tr>";
            }
        }
    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php", true);
    xhr.send();

    
}

function insertarUsuario() {

}