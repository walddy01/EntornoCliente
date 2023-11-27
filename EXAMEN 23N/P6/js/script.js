window.onload = inicio;

let alumnos = [];
let notaMedia = [];
let aprobado = [];
let mismaNota = 0;
let algunoSupenso = 0;

function inicio() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhr.responseText);
            objeto.forEach(recorrer);

            function recorrer(item, index) {
                alumnos.push(item.alumno);
                let media = (parseInt(item.nota1) + parseInt(item.nota2)+ parseInt(item.nota3)) / 3 ;
                notaMedia.push(media);

                if (item.nota1 >= 5 && item.nota2 >= 5 && item.nota3 >= 5) {
                    aprobado.push(item.alumno);
                }

                if (item.nota1 == item.nota2 && item.nota3 == item.nota1) {
                    mismaNota++;
                }

                if (media >= 5) {
                    if (parseInt(item.nota1) < 5 || parseInt(item.nota2) < 5 || parseInt(item.nota3) < 5){
                        algunoSupenso++;
                    }
                }
           
            }

            console.log(alumnos);
            console.log(notaMedia);
            console.log(aprobado);
            console.log("Alumnos con la misma nota en los tres examenes: " + mismaNota);

            // A
            let mayor = -1;
            let pos = 0;
            for (let i = 0; i < notaMedia.length; i++) {
                if (notaMedia[i] > mayor) {
                    mayor = notaMedia[i];
                    pos = i;
                }
            }
            console.log("La nota más alta es: " + mayor);
            console.log("Posición nota más alta: " + pos);
            let enunciado1 = document.createElement("p");
            enunciado1.textContent = "A) Alumno con la nota media más alta: " + alumnos[pos] + " ["+mayor+"]";
            document.body.appendChild(enunciado1);

            // B
            let enunciado2 = document.createElement("p");
            enunciado2.textContent = "B) Número de alumnos que han aprovado todos los examenes: " + aprobado.length;
            document.body.appendChild(enunciado2);

            // C
            let enunciado3 = document.createElement("p");
            enunciado3.textContent = "C) Número de alumnos que sacan la misma nota en los tres examenes: " + mismaNota;
            document.body.appendChild(enunciado3);

            // D
            let enunciado4 = document.createElement("p");
            enunciado4.textContent = "D) Número de alumnos aprovados con algún examen suspenso: " + algunoSupenso;
            document.body.appendChild(enunciado4);

            
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php", true);
    xhr.send();
}