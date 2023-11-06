window.onload = inicio;

function inicio() {
    
    let equipo = document.querySelector("div.mt-5");
    console.log(equipo);

    

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);
            // equipo.forEach(recorrer);
            function recorrer(item, index) {
                let columna = document.createElement("div");
                columna.className = "col-lg-4";
                equipo.appendChild(columna);

                let colEquipo = document.createElement("div");
                colEquipo.className = "equipo";
                columna.appendChild(colEquipo);

                let equipoFoto = document.createElement("div");
                equipoFoto.className = "equipo_foto";
                colEquipo.appendChild(equipoFoto);

                let img = document.createElement("img");
                img.src = objeto[index].imagen;
                equipoFoto.appendChild(img);

                let textoh3 = document.createElement("h3");
                textoh3.textContent = objeto[index].nombre;
                equipoFoto.appendChild(textoh3);

                let textop = document.createElement("p");
                textop.textContent = objeto[index].cargo;
                equipoFoto.appendChild(textop);

                let equipoTexto = document.createElement("div");
                equipoTexto.className = "equipo_texto";
                colEquipo.appendChild(equipoTexto);

                let textoSpan = document.createElement("span");
                textoSpan.innerHTML = "Edad: " + objeto[index].edad + "<br>Dirección: " + objeto[index].direccion;
                equipoTexto.appendChild(textoSpan);

            }
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php", true);
    xhr.send();


}