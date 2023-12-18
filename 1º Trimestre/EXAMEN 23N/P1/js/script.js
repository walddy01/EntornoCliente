// El nuevo sistema electoral español dice que por cada provincia se pone en juego
// un número de representantes al congreso. El partido que saca más votos en una
// provincia se lleva todos los representantes.

window.onload = inicio;

let reprePA = 0;
let reprePB = 0;
let reprePC = 0;
let reprePD = 0;

let provGanadasPA = [];
let provGanadasPB = [];
let provGanadasPC = [];
let provGanadasPD = [];

let votosTotalesPA = 0;
let votosTotalesPB = 0;
let votosTotalesPC = 0;
let votosTotalesPD = 0;

let prueba = [];

function inicio() {

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(ejercicio1);

            function ejercicio1(provincia, index) {
                // Ejercicio 1

                // Partido A
                if (provincia.votosPA > provincia.votosPB) {
                    if (provincia.votosPA > provincia.votosPC){
                        if (provincia.votosPA > provincia.votosPD){
                            reprePA += parseInt(provincia.Representantes);
                            // Ejercicio 2
                            provGanadasPA.push(provincia.nombreProvincia);
                        }
                    }
                }

                // Partido B
                if (provincia.votosPB > provincia.votosPA) {
                    if (provincia.votosPB > provincia.votosPC){
                        if (provincia.votosPB > provincia.votosPD){
                            reprePB += parseInt(provincia.Representantes);
                            // Ejercicio 2
                            provGanadasPB.push(provincia.nombreProvincia);
                        }
                    }
                }

                // Partido C
                if (provincia.votosPC > provincia.votosPA) {
                    if (provincia.votosPC > provincia.votosPB){
                        if (provincia.votosPC > provincia.votosPD){
                            reprePC += parseInt(provincia.Representantes);
                            // Ejercicio 2
                            provGanadasPC.push(provincia.nombreProvincia);
                        }
                    }
                }

                // Partido D
                if (provincia.votosPD > provincia.votosPA) {
                    if (provincia.votosPD > provincia.votosPB){
                        if (provincia.votosPD > provincia.votosPC){
                            reprePD += parseInt(provincia.Representantes);
                            // Ejercicio 2
                            provGanadasPD.push(provincia.nombreProvincia);
                        }
                    }
                }
                
                // Ejercicio 3
                votosTotalesPA += parseInt(provincia.votosPA);
                votosTotalesPB += parseInt(provincia.votosPB);
                votosTotalesPC += parseInt(provincia.votosPC);
                votosTotalesPD += parseInt(provincia.votosPD);
                
            }

            console.log(reprePA);
            console.log(reprePB);
            console.log(reprePC);
            console.log(reprePD);

            console.log(provGanadasPA);
            console.log(provGanadasPB);
            console.log(provGanadasPC);
            console.log(provGanadasPD);

            console.log(votosTotalesPA);
            console.log(votosTotalesPB);
            console.log(votosTotalesPC);
            console.log(votosTotalesPD);

            // Ejercicio 1
            let enunciado1 = document.createElement("h4");
            enunciado1.textContent = "Muestra en pantalla cuántos representantes obtiene cada uno de los cuatro partidos.";

            let totalPA = document.createElement("p");
            let totalPB = document.createElement("p");
            let totalPC = document.createElement("p");
            let totalPD = document.createElement("p");


            totalPA.textContent = "Partido A: " + reprePA + " Representantes";
            totalPB.textContent = "Partido B: " + reprePB + " Representantes";
            totalPC.textContent = "Partido C: " + reprePC + " Representantes";
            totalPD.textContent = "Partido D: " + reprePD + " Representantes";


            document.body.appendChild(enunciado1);
            document.body.appendChild(totalPA);
            document.body.appendChild(totalPB);
            document.body.appendChild(totalPC);
            document.body.appendChild(totalPD);

            // Ejercicio 2 
            let enunciado2 = document.createElement("h4");
            enunciado2.textContent = "Saca un listado con las provincias que gana cada partido.";

            let ganadasPA = document.createElement("p");
            let ganadasPB = document.createElement("p");
            let ganadasPC = document.createElement("p");
            let ganadasPD = document.createElement("p");


            ganadasPA.textContent = "Partido A: " + provGanadasPA;
            ganadasPB.textContent = "Partido B: " + provGanadasPB;
            ganadasPC.textContent = "Partido C: " + provGanadasPC;
            ganadasPD.textContent = "Partido D: " + provGanadasPD;


            document.body.appendChild(enunciado2);
            document.body.appendChild(ganadasPA);
            document.body.appendChild(ganadasPB);
            document.body.appendChild(ganadasPC);
            document.body.appendChild(ganadasPD);

            // Ejercicio 3
            let enunciado3 = document.createElement("h4");
            enunciado3.textContent = "Saca un listado con los votos totales de cada partido.";

            let votosPA = document.createElement("p");
            let votosPB = document.createElement("p");
            let votosPC = document.createElement("p");
            let votosPD = document.createElement("p");

            votosPA.textContent = "Partido A: " + votosTotalesPA + " votos";
            votosPB.textContent = "Partido B: " + votosTotalesPB + " votos";
            votosPC.textContent = "Partido C: " + votosTotalesPC + " votos";
            votosPD.textContent = "Partido D: " + votosTotalesPD + " votos";


            document.body.appendChild(enunciado3);
            document.body.appendChild(votosPA);
            document.body.appendChild(votosPB);
            document.body.appendChild(votosPC);
            document.body.appendChild(votosPD);
            
            // Ejercicio 4

            prueba.push(votosTotalesPA);
            prueba.push(votosTotalesPB);
            prueba.push(votosTotalesPC);
            prueba.push(votosTotalesPD);

            console.log(prueba.sort(function (a, b){return a - b;}).reverse());

        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php", true);
    xhr.send();
}