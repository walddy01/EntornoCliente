window.onload = inicio;

function inicio() {
  let btnAceptar = document.getElementById("aceptar");
  btnAceptar.onclick = obtenerDatos;
}

function obtenerDatos(){
  let ciclo = document.querySelector("input[name=radio]").value;
  let modulos = document.querySelectorAll("input[type=checkbox][name=modulos]");

  let marcados = [];

  modulos.forEach(obtenerMarcados);

  function obtenerMarcados(item, index){
    if(item.checked){
      marcados.push(item.value);
    }
  }
  let nombre = document.getElementById("nombre").value;
  let curso = document.getElementById("selectCurso").value;
  let horas = document.querySelectorAll("select[name=multipleselect]");

  let horasMarcadas = [];
  for(let i = 0; i < horas[0].length; i++){
    if (horas[0][i].selected){
      horasMarcadas.push(horas[0][i].value);
    }
  }
  console.log(horasMarcadas);

  let mensaje = "Ciclo: " + ciclo + "\nModulos: " + marcados + "\nNombre: " + nombre + "\nCurso: " + curso + "\nHoras: " + horasMarcadas.join(", ");
  alert(mensaje);
}