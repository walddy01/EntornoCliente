window.onload = inicio;

let bool = true;

function inicio() {
    let accion = document.getElementById("aceptar");

    accion.onsubmit = function () {
        let user = document.getElementById("user").value;
        let smUser = document.getElementById("smUser");

        let pass = document.getElementById("password").value;
        let smPass = document.getElementById("smPassword");

        comprobar(user, pass, smUser, smPass);

        return bool;
    }
}

function comprobar(user, pass, smUser, smPass) {
    if (user == "") {
        smUser.innerHTML = "* Este campo es obligatorio.";
        bool = false;
    }else {
        smUser.innerHTML = "";
        bool = true;
    }

    if (pass == "") {
        smPass.innerHTML = "* Este campo es obligatorio.";
        bool = false;
    }else {
        smUser.innerHTML = "";
        bool = true;
    }
}