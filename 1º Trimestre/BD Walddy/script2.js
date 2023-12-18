let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {
  bool = false;

  //Declaramos el valor que tenga el input y el small para el mensaje de error
  let texto1 = document.getElementById("idTexto1").value;
  let smTexto1 = document.getElementById("smTexto1");

  let texto2 = document.getElementById("idTexto2").value;
  let smTexto2 = document.getElementById("smTexto2");

  let n1 = document.getElementById("idNumero1").value;
  let smNum1 = document.getElementById("smNumero1");

  let n2 = document.getElementById("idNumero2").value;
  let smNum2 = document.getElementById("smNumero2");

  //Validamos:
  //  1º Que no esté vacío.
  //  2º Que sea un número.
  //  3º Que sea un número entero.
  //  4º Que esté comprendido entre 1 y 50.
  //  Si no hay errores se limpia el elemento small.

  validacion1(n1, smNum1);
  validacion2(texto1, smTexto1);
  validacion3(n2, smNum2);
  validacion4(texto2, smTexto2);

  return bool;
};

function validacion1(num, sm) {
  if (num == "") {
    sm.innerHTML = "* Campo obligatorio.";
    bool = false;
  } else if (isNaN(num)) {
    sm.innerHTML = "* Introduce un número.";
    bool = false;
  } else if (!Number.isInteger(Number(num))) {
    sm.innerHTML = "* Introduce un número entero.";
    bool = false;
  } else if (num < 1 || num > 100) {
    sm.innerHTML = "* Número fuera del rango (0-100).";
    bool = false;
  } else {
    sm.innerHTML = "";
  }
}

// }
/*
function validacion2(texto, sm) {
    if (texto == "") {
      sm.innerHTML = "* Campo obligatorio.";
      bool = false;
    } else {
      let longitud = String(texto).length;
      if (longitud < 5 || longitud > 15) {
        sm.innerHTML =
          "* La cadena no puede tener esa cantidad de caracteres (5-15).";
        bool = false;
      } else {
        let i = 0;
        let esNum = false;
        let esMayus = false;
        while (i < texto.length) {
          let caracter = texto.charAt(i);
          if (!isNaN(caracter * 1)) {
            esNum = true;
          }
          if (caracter === caracter.toUpperCase()) {
            esMayus = true;
          }
          i++;
        }
        if (esNum && esMayus) {
          sm.innerHTML = "";
        } else {
          sm.innerHTML =
            "* La cadena debe tener al menos una letra mayúscula y un número";
          bool = false;
        }
      }
    }
  }
*/

function validacion2(texto, sm) {
  if (texto == "") {
    sm.innerHTML = "* Este campo es obligatorio.";
    bool = false;
  } else {
    let longitud = String(texto).length;
    if (longitud < 5 || longitud > 15) {
      sm.innerHTML = "* La cadena debe tener entre 5 y 15 caracteres.";
      bool = false;
    } else {
      let i = 0;
      let tieneNumero = false;
      let tieneMayuscula = false;
      while (i < texto.length) {
        let caracter = texto.charAt(i);
        if (!isNaN(caracter * 1)) {
          tieneNumero = true;
        }
        if (caracter === caracter.toUpperCase()) {
          tieneMayuscula = true;
        }
        i++;
      }
      if (tieneNumero && tieneMayuscula) {
        sm.innerHTML = "";
      } else {
        sm.innerHTML =
          "* La cadena debe contener al menos una letra mayúscula y un número.";
        bool = false;
      }
    }
  }
}

function validacion4(texto, sm) {
    if (texto == "") {
        mensajeError.innerHTML = "* Este campo es obligatorio.";
        bool = false;
    } else {
        let longitud = String(texto).length;
        if (longitud < 20 || longitud > 30) {
            sm.innerHTML =
                "* La cadena debe tener entre 20 y 30 caracteres.";
            bool = false;
        } else {
            let i = 0;
            let contA = 0;
            let tieneArroba = false;
            while (i < texto.length) {
                let caracter = texto.charAt(i);
                if (caracter === '@') {
                    contA++;
                }
                i++;
            }
            if (contA == 1) {
                tieneArroba = true;
            }

            if (tieneArroba) {
                sm.innerHTML = "";
            } else {
                sm.innerHTML =
                    "* Debe contener una @.";
                bool = false;
            }
        }
    }
}

// function validacion3(num, sm) {
//     if (num == "") {
//         sm.innerHTML = "* Campo obligatorio.";
//         bool = false;
//     }
// }
