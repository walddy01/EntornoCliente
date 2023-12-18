window.onload = inicio;


function inicio() {
    const urlPaises = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    const base = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=";

    let paises = document.getElementById("paises");
    let deportes = document.getElementById("deportes");

    let cajaEquipos = document.getElementById("equipos");

    obtenerPaises();
    obtenerDeportes();
    

    paises.onchange = cargar;
    deportes.onchange = cargar;

    function cargar() {
        mostrarEquipos();
    }

    async function obtenerPaises() {
        console.log("obtenerPaises");

        try {
            const response = await fetch(urlPaises);
            const objeto = await response.json();

            for (let i = 0; i < objeto.countries.length; i++) {
                let option = document.createElement("option");
                option.value = objeto.countries[i].name_en;
                option.textContent = objeto.countries[i].name_en;
                paises.appendChild(option);
            }
        } catch (error) {
            console.log(error);
            let h4Error = document.createElement("h4");
            h4Error.textContent = "No existen equipos de " + deportes.value + " en " + paises.value;
            h4Error.classList.add("error");
            cajaEquipos.appendChild(h4Error);
        }

    }

    async function obtenerDeportes() {
        console.log("obtenerDeportes");

        try {
            const response = await fetch("deportes.json");
            const objeto = await response.json();

            for (let i = 0; i < objeto.sports.length; i++) {
                let option = document.createElement("option");
                option.value = objeto.sports[i].strSport;
                option.textContent = objeto.sports[i].strSport;
                deportes.appendChild(option);
            }
        } catch (error) {
            console.log(error);
            let h4Error = document.createElement("h4");
            h4Error.textContent = "No existen equipos de " + deportes.value + " en " + paises.value;
            h4Error.classList.add("error");
            cajaEquipos.appendChild(h4Error);
        }

    }


    async function mostrarEquipos() {
        console.log("mostrarEquipos");

        try {
            cajaEquipos.innerHTML = "";
            const response = await fetch(base + deportes.value + "&c=" + paises.value);
            const objeto = await response.json();

            console.log(objeto);
            for (let i = 0; i < objeto.teams.length; i++) {

                let equipo = document.createElement("div");
                equipo.classList.add("equipo");

                let equipoImg = document.createElement("img");
                equipoImg.src = objeto.teams[i].strTeamBadge;

                let equipoNombre = document.createElement("h3");
                equipoNombre.textContent = objeto.teams[i].strTeam;


                equipo.appendChild(equipoImg);
                equipo.appendChild(equipoNombre);

                cajaEquipos.appendChild(equipo);
            }
        } catch (error) {
            console.log(error);
            let h4Error = document.createElement("h4");
            h4Error.textContent = "No existen equipos de " + deportes.value + " en " + paises.value;
            h4Error.classList.add("error");
            cajaEquipos.appendChild(h4Error);
        }
    }

}
