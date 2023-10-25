window.onload = inicio;

let bool = true;

let ciclo = document.querySelector("input[name=radio]").value;
let modulos = document.querySelectorAll("input[name=modulos]");

let marcados = [];

let nomb = document.getElementById("nombre").value;
let curso = document.getElementById("selectCurso").value;
let horas = document.querySelectorAll("select[name=multipleselect]");
console.log(horas);
let horasMarcadas = [];
let comentario = document.getElementById("exampleFormControlTextarea1").value;


function inicio() {
  console.log("entro en inicio");
  let btnAceptar = document.getElementById("aceptar");
  btnAceptar.onclick = obtenerDatos;

  let accion = document.getElementById("cargar");

  accion.onsubmit= function(){

    let smCi = document.getElementById("smCiclo");
    let smMo = document.getElementById("smModulos");
    let smCu = document.getElementById("smCurso");
    let smNo = document.getElementById("smNombre");
    let smHo = document.getElementById("smHoras");


    if(ciclo=="" || modulos=="" || curso=="" || nomb == "" || horas == ""){
      bool=false;
      smCi.innerHTML="*Campo Obligatorio";
      smMo.innerHTML="*Campo Obligatorio";
      smCu.innerHTML="*Campo Obligatorio";
      smNo.innerHTML="*Campo Obligatorio";
      smHo.innerHTML="*Campo Obligatorio";
    }
  return bool;
  }
}

function obtenerDatos() {
  console.log("entro en obtenerDatos");



  modulos.forEach(obtenerMarcados);

  function obtenerMarcados(item, index) {
    if (item.checked) {
      marcados.push(item.value);
    }
  }



  for (let index = 0; index < horas[0].length; index++) {
    if (horas[0][index].selected) {
      horasMarcadas.push(horas[0][index].value);
    }
  }


  let mensaje =
    "Ciclo: " +
    ciclo +
    "\nModulos: " +
    marcados +
    "\nNombre: " +
    nomb +
    "\nCurso: " +
    curso +
    "\nHoras asistidas: " +
    horasMarcadas +
    "\nComentario: " +
    comentario;


}