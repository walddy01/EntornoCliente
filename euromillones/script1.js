let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function(){

    bool = true;

    //Declaramos el valor que tenga el input y el small para el mensaje de error
    let n1 = document.getElementById("idNumero1").value;
    let smNum1 = document.getElementById("smNumero1");

    let n2 = document.getElementById("idNumero2").value;
    let smNum2 = document.getElementById("smNumero2");

    let n3 = document.getElementById("idNumero3").value;
    let smNum3 = document.getElementById("smNumero3");

    let n4 = document.getElementById("idNumero4").value;
    let smNum4 = document.getElementById("smNumero4");

    let n5 = document.getElementById("idNumero5").value;
    let smNum5 = document.getElementById("smNumero5");

    let n6 = document.getElementById("idNumero6").value;
    let smNum6 = document.getElementById("smNumero6");

    //Validamos:
    //  1º Que no esté vacío.
    //  2º Que sea un número.
    //  3º Que sea un número entero.
    //  4º Que esté comprendido entre 1 y 50.
    //  Si no hay errores se limpia el elemento small.

    validaciones(n1, smNum1);
    validaciones(n2, smNum2);
    validaciones(n3, smNum3);
    validaciones(n4, smNum4);
    validaciones(n5, smNum5);
    validaciones(n6, smNum6);



    let arrayNumeros = [n1, n2, n3, n4, n5, n6];
    let arrayComparados = [];
    let smDupl = document.getElementById("smDuplicados");
    let bool2 = true;
    
    for(let i = 0; i < arrayNumeros.length; i++){
        if(arrayComparados.includes(arrayNumeros[i])){
            bool2 = false;
        }else{
            arrayComparados.push(arrayNumeros[i]);
        }
    }

    if(bool2){
        smDupl.innerHTML = "";
    }else{
        bool = false;
        smDupl.innerHTML = "** ERROR NÚMEROS DUPLICADOS";
    }

    return bool;

}

function validaciones(num, sm){

    if(num == ""){
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }else if(isNaN(num)){
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    }else if(!Number.isInteger(Number(num))){
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    }else if(num < 1 || num > 50){
        sm.innerHTML = "* Número fuera del rango (0-50).";
        bool = false;
    }else{
        sm.innerHTML = "";
    }


}
