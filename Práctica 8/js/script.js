window.onload = inicio;

function inicio() {
    console.log("Cargando la página");

    let contenedorP = document.createElement("div");
    contenedorP.className = "container";

    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);

    let contenedorF = document.createElement("fieldset");
    contenedorF.className = "gallery";

    let leyenda = document.createElement("legend");
    leyenda.textContent = "Práctica 8";
    contenedorF.appendChild(leyenda);

    contenedorP.appendChild(contenedorF);
    let contadorBordes = 0;

    let segundos = 30;
    let temporizador = setInterval(refrescar, 1000);
    function refrescar() {
        
        let numR = Math.floor(Math.random() * 99);
        let imagen = document.createElement("img");
        imagen.className = "gallery img";
        contenedorF.appendChild(imagen);



        if (i % 2 == 0) {
            imagen.src = "https://randomuser.me/api/portraits/men/" + numR + ".jpg";
        } else {
            imagen.src = "https://randomuser.me/api/portraits/women/" + numR + ".jpg";
        }

        imagen.onmouseover = expandir;
        imagen.onmouseleave = encoger;
        imagen.onclick = borde;

        function expandir() {
            imagen.style.transform = "scale(1.5)";
        }

        function encoger() {
            imagen.style.transform = "scale(1)";
        }

        function borde() {
            if (imagen.className == "ponerBorde") {
                imagen.className = "quitarBorde";
                if (contadorBordes > 0) {
                    contadorBordes--;
                    console.log(contadorBordes);
                }
            } else {
                if (contadorBordes == 6) {
                    return;
                }
                imagen.className = "ponerBorde";
                contadorBordes++;
                console.log(contadorBordes);
            }

            /* if (contadorBordes == 6) {
                      console.log("Has alcanzado el máximo de bordes");
                      let arrayimg = document.querySelectorAll("img");
                      console.log(arrayimg);
                  } */
        }
    }
}

