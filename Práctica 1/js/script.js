console.log("entro en javascript")
//window.addEventListener("load",inicio);
window.onload=inicio;

/* 
La función inicio es llamada por el objeto window (la ventana del navegador)
cuando termine de cargar todo el DOM HTML.

Funciones útiles de window: alert, prompt, confirm
*/
function inicio(){
    //alert("Estoy en la función inicio")
    //prompt("Teclea tu nombre")
    function cargarAleatorio(){
    let primeraEtiqueta = document.getElementById("etiqueta1");
    let segundaEtiqueta = document.getElementById("etiqueta2");
    primeraEtiqueta.textContent=Math.round(Math.random()*100);
    segundaEtiqueta.textContent=Math.round(Math.random()*100);
    }   
    //Indentificar el objeto de tipo button cuyo id es btn1 y lo guardamos 
    //en la variable recargar
    let recargar = document.getElementById("btn1");
    //Generar un evento de tipo "click" simple sobre el button de id=btn1
    recargar.addEventListener("click",accion1);
    function accion1(){
        console.log("recargando los random")
        cargarAleatorio();
    }
    //Otra forma de cargar eventos
    let boton2 = document.getElementById("btn2");
    boton2.onclick=accion2;
    //Generar un array de componentes html
    const listaElementosli=document.getElementsByTagName("li");
    console.log(listaElementosli);

    function accion2(){
        console.log("Entro en el segundo evento")
        for (let item of listaElementosli){
            //console.log(item);
            item.textContent=Math.round(Math.random()*100);
        }
    }

    //Identificar el boton3
    let boton3 = document.getElementById("btn3");
    //Evento sobre el boton3
    boton3.onclick=accion3;
    //Desarrollo del evento accion3
    function accion3(){
        //Recorrer todos los elementos del array listaElementos
        for(let item of listaElementosli){
            //genero un número random sobre una variable int
            let numero = Math.round(Math.random()*1000);
            //contenido
            item.textContent=numero;
            //formato condicional
            if (numero > 500){
                item.style.color="Red";
            }else {
                item.style.color="Blue";
            }
        }
    }

}
