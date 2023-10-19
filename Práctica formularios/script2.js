var formulario = document.getElementById('cargar');
var modulos = formulario.querySelectorAll('input[type="checkbox"][name="modulos"]');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  var ciclo = document.querySelector('input[name="radio"]:checked').value;
  var nombre = document.getElementById('nombre').value;
  var curso = document.getElementById('selectCurso').value;

  var seleccionados = [];

  modulos.forEach(function(checkbox) {
    if (checkbox.checked) {
      seleccionados.push(checkbox.value);
    }
  });

  if (seleccionados.length > 0) {
    alert('Nombre: ' + nombre + '\nCurso: ' + curso + '\nCiclo seleccionado: ' + ciclo + '\nMódulos seleccionados: ' + seleccionados.join(', '));
  } else {
    alert('Nombre: ' + nombre + '\nCurso: ' + curso + '\nNo has seleccionado ningún módulo.');
  }
});