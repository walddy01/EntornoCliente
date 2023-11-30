window.onload = inicio;


function inicio() {
    const urlPaises = "https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    const base = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c="

    let contenido = document.getElementById("contenido");
    let paises = document.getElementById("paises");
    let cajaEquipos = document.getElementById("equipos");

    obtenerPaises();

    paises.onchange = cargar;

    function cargar() {
        mostrarEquipos();
    }

    async function obtenerPaises() {
        console.log("obtenerPaises");
        const response = await fetch(urlPaises);
        const objeto = await response.json();

        for (let i = 0; i < objeto.countries.length; i++) {
            let option = document.createElement("option");
            option.value = objeto.countries[i].name_en;
            option.textContent = objeto.countries[i].name_en;
            paises.appendChild(option);
        }
    }

    async function mostrarEquipos() {
        cajaEquipos.innerHTML = "";
        console.log("mostrarEquipos");
        const response = await fetch(base+paises.value);
        const objeto = await response.json();

        console.log(objeto);
        for (let i = 0; i < objeto.teams.length; i++) {
            let equipo = document.createElement("div");
            let equipoImg = document.createElement("img");
            let equipoNombre = document.createElement("h3");

            equipoImg.src = objeto.teams[i].strTeamBadge;
            equipoNombre.textContent = objeto.teams[i].strTeam;

            equipo.appendChild(equipoImg);
            equipo.appendChild(equipoNombre);
            
            cajaEquipos.appendChild(equipo);
        }
    }
}
