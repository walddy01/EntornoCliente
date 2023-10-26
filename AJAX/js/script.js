/*MOSTRAR con javascript CONTENIDOS DE FORMA ASÍNCRONA DE UN FICHERO SITUADO EN UN SERVIDOR */
window.addEventListener("load",inicio);
let caja = document.getElementById("nose");
function inicio(){
              let btnMostrar= document.getElementById("mostrar");
              btnMostrar.addEventListener("click", mostrar);
              
        }  
 function mostrar() {

/*XMLHttpRequest es un objeto nativo del navegador que permite hacer solicitudes HTTP desde JavaScript*/
            var xhr = new XMLHttpRequest();

/*define una función que será llamada automáticamente cada vez que cambie su propiedad readystate*/

            xhr.onreadystatechange = cargar;
            function cargar() {

/*readyState: contiene un valor numérico que representa la situación de intercambio de datos a través del objeto.*/

/*status: código numérico devuelto por el servidor. Indica tipo de respuesta a la petición*/

                if (this.readyState == 4 && this.status == 200) {

/*respuesta del servidor en formato de texto*/


             var objeto = JSON.parse(this.responseText);
             objeto.foreach(recorrer);
             function recorrer(item, index){
               caja.innerHTML += "<p>"+item+"</p>";
             }
               }
             }
            }

/* .open: especifica la solicitud
             - GET/POST.
             - Archivo: txt, php, xml, json, etc.
             - true/false: método de envío. */

            xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);

/* .send: envía la solicitud al servidor.
       Si utilizamos POST debemos pasar los datos por parámetro */

            xhr.send();
       
        