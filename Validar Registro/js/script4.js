window.onload = inicio;

let bool = true;
function inicio() {

    
    let formulario = document.getElementById("accion");
    let expediente = document.getElementById("expediente").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dwec = document.getElementById("dwec").value;
    let dwes = document.getElementById("dwes").value;
    let ds = document.getElementById("ds").value;
    let eie = document.getElementById("eie").value;
    let diw = document.getElementById("diw").value;

    let smExpediente = document.getElementById("smExpediente");
    let smNombre = document.getElementById("smNombre");
    let smApellidos = document.getElementById("smApellidos");
    let smDWEC = document.getElementById("smDWEC");
    let smDWES = document.getElementById("smDWES");
    let smDS = document.getElementById("smDS");
    let smEIE = document.getElementById("smEIE");
    let smDIW = document.getElementById("smDIW");

    formulario.onsubmit = function() {
        alert("a");
        
        if (expediente == "" || nombre == "" || apellidos == "" || dwec == "" || dwes == "" || ds == "" || eie == "" || diw == "") {
            smExpediente.innerHTML = "* Campo obligatorio.";
            smNombre.innerHTML = "* Campo obligatorio.";
            smApellidos.innerHTML = "* Campo obligatorio.";
            smDWEC.innerHTML = "* Campo obligatorio.";
            smDWES.innerHTML = "* Campo obligatorio.";
            smDS.innerHTML = "* Campo obligatorio.";
            smEIE.innerHTML = "* Campo obligatorio.";
            smDIW.innerHTML = "* Campo obligatorio.";
            bool = false;
        }else {
            let cadena = String(expediente);
            if (cadena.length>6){
                bool = false;
            }else {
                for (let i = 0; i < cadena.length-1; i++) {
                    if (isNaN(cadena.charAt(i))) {
                        bool = false;
                    }
                }
                
            }
        }

        return bool;
    }
}