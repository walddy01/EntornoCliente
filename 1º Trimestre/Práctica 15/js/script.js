window.onload = inicio;

function inicio() {
    let imagenes = document.querySelectorAll("img");

    let temporizador = setInterval(tiempo, 500);

    function tiempo() {
        imagenes.forEach(accion);
        function accion(item, indice) {
            let num = Math.ceil(Math.random() * 3);
            let imgR = Math.ceil(Math.random() * 5);
            item.src = "img/img"+imgR+".jpg";
            item.className = "borde" + num;
        }
    }
}
