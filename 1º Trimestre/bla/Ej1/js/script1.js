console.log("Entro en javascript");

//La funcion inicio es llamada por el objeto window (la ventana del navegador)
//Cuando termine de carga (load) todo el DOM HTML
//Funciones utiles de window: alert, prompt, confirm

//window.addEventListener("load",inicio);
window.onload=inicio;

function inicio(){
    //alert("Estoy en la funcion inicio");
    //prompt ("Teclea tu nombre");
    function cargarAleatorio(){
        let primeraEtiqueta=document.getElementById("etiqueta1");
        let segundaEtiqueta=document.getElementById("etiqueta2");
        primeraEtiqueta.textContent=Math.round(Math.random()*100);
        segundaEtiqueta.textContent=Math.round(Math.random()*100);
    }
    //Identificar el objerto de tipo button cuyo id es btn1 y lo guardamos en la variable recargar
    let recargar=document.getElementById("btn1");

    //Generar un evento de click simple donde el button de id = btn1
    recargar.addEventListener("click",accion1);
    function accion1(){
        console.log("Recargando los random");
        cargarAleotorio();
    }

    //Otro cargar evento (btn2)
    let boton2=document.getElementById("btn2");
    boton2.onclick=accion2;
    //Generar un array de componentes html
    const listaElementosli=document.getElementsByTagName("li");
    console.log(listaElementosli);
    function accion2(){
        console.log("Entro en el segundo evento");
        for (let item of listaElementosli){
            console.log(item);
            item.textContent=Math.round(Math.random()*100);
        }
    }

    //Otro cargar evento (btn3)
    let boton3=document.getElementById("btn3");
    //evento sobre el boton3
    boton3.onclick=accion3;
    //desarrollo del evento accion3
    function accion3(){
        console.log("Entro en accion3");
        //recorrer todos los elementos del array listaElementos
        for (let item of listaElementosli){
            //genero un numero sobre la variable int
            let numero = item.textContent=Math.round(Math.random()*1000);
            //contenido
            item.textContent=numero;
            //formato condicional
            if (numero > 500){
                item.style.color = "Red";
            } else{
                item.style.color ="Blue";
            }
        }
    }
}
