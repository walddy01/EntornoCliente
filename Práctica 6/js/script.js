window.onload = inicio;

// Identidicar los elementos html
const btnCargarImagen = document.getElementById("mostrarJS");
const contenedor = document.getElementById("container");
const cajaImagenes = document.getElementById("cajaImagenes");


function inicio() {

    // Evento click para cargar imágenes
    btnCargarImagen.addEventListener("click", cargarImagenes)

    function cargarImagenes() {

        // Eliminamos todos los hijos de cajaImagenes
        while (cajaImagenes.firstChild) {
            cajaImagenes.removeChild(cajaImagenes.firstChild);
        }

        for (let i = 0; i < 15; i++) {

            // Genera un número aleatorio para el avatar
            let num = Math.round(Math.random() * 98);

            // Crea un elemento de imagen
            let imagenes = document.createElement("img");

            // Establece el atributo src
            imagenes.setAttribute("src", "https://randomuser.me/api/portraits/men/" + num + ".jpg");

            // Añade la imagen a la caja de imágenes
            cajaImagenes.appendChild(imagenes);

        }


    }


}