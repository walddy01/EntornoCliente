window.onload=inicio();

let bool=true;
function inicio(){
    let expediente=document.getElementById("expediente").value;
    let nombre=document.getElementById("nombre").value;
    let apellidos=document.getElementById("apellidos").value;
    let dwec=document.getElementById("dwec").value;
    let dwes=document.getElementById("dwes").value;
    let ds=document.getElementById("ds").value;
    let eie=document.getElementById("eie").value;
    let diw=document.getElementById("diw").value;

    let smExpediente=document.getElementById("smExpediente");
    let smNombre=document.getElementById("smNombre");
    let smApellidos=document.getElementById("smApellidos");
    let smDwec=document.getElementById("smDwec");
    let smDwes=document.getElementById("smDwes");
    let smDs=document.getElementById("smDs");
    let smEie=document.getElementById("smEie");
    let smDiw=document.getElementById("smDiw");

    let btnAccion=document.getElementById("btnAccion");
    let accion=document.getElementById("accion");

    accion.onsubmit= function(){
        if(expediente=="" || nombre=="" || apellidos=="" 
        || dwec == "" || dwes == "" || ds=="" || eie=="" || diw==""){
            bool=false;
            smExpediente.innerHTML="*Campo Obligatorio";
            smNombre.innerHTML="*Campo Obligatorio";
            smApellidos.innerHTML="*Campo Obligatorio";
            smDwec.innerHTML="*Campo Obligatorio";
            smDwes.innerHTML="*Campo Obligatorio";
            smDs.innerHTML="*Campo Obligatorio";
            smEie.innerHTML="*Campo Obligatorio";
            smDiw.innerHTML="*Campo Obligatorio";

          }else{
            console.log("entra en else");
            let cadena=String(expediente);
            if(cadena.length!=6){
                bool=false;
                smExpediente.innerHTML="* Cadena debe tener 6 caracteres";
            }else{
            for(let i; i<cadena.length-1; i++){
                let caracter=cadena.charAt(i);
                if(isNaN(caracter)){
                    smExpediente.innerHTML="* Los 5 primeros tienen que ser números"
                    bool=false;
                }
            }
            let caracter=cadena.charAt(cadena.length-1);
            if(!/[A-Z]/.test(caracter) && bool != false){
                console.log(caracter);
                smExpediente.innerHTML="* Último carácter letra mayúscula";
                bool=false;
            }
            if(dwec<1 || dwec>10){
                bool=false;
                smDwec.innerHTML="* No cumple con el rango";
            }
        }
            
          }
          return bool;
    }
}