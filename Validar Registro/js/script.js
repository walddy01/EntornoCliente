window.onload = inicio;

let bool = true;
function inicio() {
    let formulario = document.getElementById("aceptar");

    formulario.onsubmit = function () {
        
        let pass1 = document.getElementById("password1").value;
        let smPass1 = document.getElementById("smPassword1");

        let pass2 = document.getElementById("password2").value;
        let smPass2 = document.getElementById("smPassword2");

        let email = document.getElementById("email").value;
        let smEmail = document.getElementById("smEmail");

        validarPassword(pass1, smPass1);
        comprobarPass(pass1, pass2, smPass2);

        return bool;
        
    }
}

function validarPassword(pass, sm) {
    let cadena = String(pass);
    let longitudCadena = cadena.length;
    if (cadena == ""){
        bool = false;
        sm.innerHTML = "* Este campo es obligatorio.";
    }else {
        if (longitudCadena < 8){
            bool = false;
            sm.innerHTML = "* La contraseña debe tener al menos 8 caracteres.";
        }else {
            // let mayus = false;
            // let indice = 0;
            // while (indice < longitudCadena && !mayus) {
            //     if (cadena.charAt(indice) === cadena.charAt(indice).toUpperCase()) {
            //         mayus = true;
            //     }
            //     indice++;
            // }

            // if (!mayus) {
            //     bool = false;
            //     sm.innerHTML = "* La contraseña debe tener al menos una letra mayúscula.";
            // } else {
            //     bool = true;
            //     sm.innerHTML = "";
            // }

            if (!/[A-Z]/.test(cadena) || !/[a-z]/.test(cadena) || !/[0-9]/.test(cadena) || !cadena.includes("$")) {
                bool = false;
                sm.innerHTML = "* La cadena debe contener al menos una letra mayúscula, una letra minúscula, un número y un $.";
            }else {
                bool = true;
                sm.innerHTML = "";
            }
        }
    }
}

function comprobarPass(pass1, pass2, sm) {
    if (pass1 != pass2) {
        bool = false;
        sm.innerHTML = "* Las contraseñas no coinciden.";
    }else {
        bool = true;
        sm.innerHTML = "";
    }
}