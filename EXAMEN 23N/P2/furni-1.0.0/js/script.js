window.onload = inicio;

function inicio() {
    let slider = document.querySelector(".testimonial-slider");
    console.log(slider);


    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);

            function recorrer(item, index){
                let cajaItem = document.createElement("div");
                cajaItem.className = "item";

                let row = document.createElement("div");
                row.className = "row justify-content-center";
                cajaItem.appendChild(row);

                let col = document.createElement("div");
                col.className = "col-lg-8 mx-auto";
                row.appendChild(col);

                let block = document.createElement("div");
                block.className = "testimonial-block text-center";
                col.appendChild(block);

                let blockQuote = document.createElement("blockquote");
                blockQuote.className = "mb-5";
                block.appendChild(blockQuote);

                let p = document.createElement("p");
                p.innerHTML = "Temporal";
                blockQuote.appendChild(p);

                let authorInfo = document.createElement("div");
                authorInfo.className = "author-info";
                block.appendChild(authorInfo);

                let authorPic = document.createElement("div");
                authorPic.className = "author-pic";
                authorInfo.appendChild(authorPic);

                let img = document.createElement("img");
                img.src = item.imagen;
                img.alt = item.nombre;
                img.className = "img-fluid";
                authorPic.appendChild(img);

                let h3 = document.createElement("h3");
                h3.className = "font-weight-bold";
                h3.innerHTML = item.nombre;
                authorInfo.appendChild(h3);

                let span = document.createElement("span");
                span.className = "position d-block mb-3";
                span.innerHTML = item.cargo;
                authorInfo.appendChild(span);

                slider.appendChild(cajaItem);
            }
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/Empleados/getEmpleados.php", true);
    xhr.send();
}

