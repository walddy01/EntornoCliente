window.onload = inicio;

let table = document.getElementById("tabla");

function inicio() {
  let btn = document.getElementById("listar");
  

  btn.onclick = function () {
    fetch("https://www.freetogame.com/api/games")
      .then((response) => response.json())
      .then((datos) => {
        // console.table(datos);
        cargarTabla(datos);
      });
  };
}
function cargarTabla(datos) {

  let fila = document.createElement("tr");
  table.appendChild(fila);

  let metadata = Object.keys(datos[0]);
  metadata.forEach(cargarTitulos);

  function cargarTitulos(item, index){
    let titulo = document.createElement("th");
    titulo.textContent = item;

    fila.appendChild(titulo);
  }

  datos.forEach(cargarDatos);

  function cargarDatos(item, index){

    let fila = document.createElement("tr");
    table.appendChild(fila);

    console.log(item[metadata[0]]);
    for (let i = 0; i < metadata.length; i++){
      let campo = metadata[i];

      console.log(item[campo]);

      let cdato = document.createElement("td");
      cdato.textContent = item[campo];

      fila.appendChild(cdato);
    }
  }

}
