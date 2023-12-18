window.onload = inicio;



function inicio() {

    const genres = "genres.json";
    const base = "https://www.freetogame.com/api/games?category=";

    let genero = document.getElementById("genero");

    let cajaJuegos = document.getElementById("games");

    obtenerGeneros();
    

    genero.onchange = mostrarJuegos;


    
    async function obtenerGeneros() {
        console.log("obtenerGeneros");

        try {
            const response = await fetch("genres.json");
            const objeto = await response.json();

            for (let i = 0; i < objeto.genres.length; i++) {

                let option = document.createElement("option");
                option.value = objeto.genres[i];
                option.textContent = objeto.genres[i];
                genero.appendChild(option);
            }

            
        } catch (error) {
            console.log(error);
            let h4Error = document.createElement("h4");
            h4Error.textContent = "Ha ocurrido un error: " + error;
            h4Error.classList.add("error");
            cajaJuegos.appendChild(h4Error);
        }

    }

    async function mostrarJuegos() {
        console.log("mostrarJuegos");

        try {
            cajaJuegos.innerHTML = "";
            const response = await fetch(base + genero.value);
            const objeto = await response.json();

            // console.log(objeto);
            for (let i = 0; i < objeto.length; i++) {
                let juego = document.createElement("div");
                juego.classList.add("juego");

                let juegoImg = document.createElement("img");
                juegoImg.src = objeto[i].thumbnail;

                let juegoNombre = document.createElement("h2");
                juegoNombre.textContent = objeto[i].title;

                let juegoDescripcion = document.createElement("p");
                juegoDescripcion.textContent = objeto[i].short_description;

                let btnJugar = document.createElement("a");
                btnJugar.textContent = "Jugar";
                btnJugar.classList.add("btn");
                btnJugar.classList.add("btn-primary");
                btnJugar.href = objeto[i].game_url;


                juego.appendChild(juegoImg);
                juego.appendChild(juegoNombre);
                juego.appendChild(juegoDescripcion);
                juego.appendChild(btnJugar);

                cajaJuegos.appendChild(juego);
            }
        } catch (error) {
            console.log(error);
            let h4Error = document.createElement("h4");
            h4Error.textContent = "No existe un ningun juego con el genero: " + genero.value;
            h4Error.classList.add("error");
            cajaJuegos.appendChild(h4Error);
        }
    }

}
