window.onload=inicio;

console.log("Entro en inicio")
    //Constantes
    const operacion=["+", "-", "*", "/"];

    //Elementos del html
    let btnJugar=document.getElementById("empezar");
    let btnParar=document.getElementById("fin");
    let btnComprobar=document.getElementById("comprobar");
    let resul=document.getElementById("resultado");
    let temp=document.getElementById("tiempo");
    let op=document.getElementById("num");
    let puntuacion=document.getElementById("puntos");

    //Variables
    let aciertos = 0;
    let fallos = 0;
    let tiempo = 0;
    let contador;
    let final;

function inicio(){
    btnComprobar.disabled=true;
    btnParar.disabled=true;
    btnJugar.onclick=jugar;

    function jugar(){
        tiempo=60;
        aciertos = 0;
        fallos = 0;
        btnComprobar.disabled=false;
        btnParar.disabled=false;
        btnJugar.disabled=true;
        cargarPuntuacion();
        cargarOperacion();
        
        btnComprobar.onclick=puntuaje;
    
        btnParar.onclick=parar;
    
        contador=setInterval(accion,1000);
        function accion(){
            //console.log(tiempo);
            mostrarTiempo();
            tiempo--;
            if(tiempo==0){
                btnComprobar.disabled=true;
                btnJugar.disabled=false;
                btnParar.disabled=true;
                alert("FIN DEL JUEGO");
                clearInterval(contador);
            }
        }
    
    
    }
}
    
    function cargarOperacion(){
        console.log("CargarInfo");
    
        let num1=Math.round(Math.random()*50);
        let oper=Math.round(Math.random()*3);
        let num2;
        do{
            num2=Math.round(Math.random()*50);
        }while(num2 == 0);
    
        op.textContent = num1 + " " + operacion[oper] + " " + num2;
    
        if(oper==0){
            final=num1+num2;
        } else if(oper==1){
            final=num1-num2;
        } else if(oper==2){
            final=num1*num2;
        } else{
            final=num1/num2;
        }

    btnComprobar.onclick=puntuaje;

    btnParar.onclick=parar;

    contador=setInterval(accion,1000);
    function accion(){
        //console.log(tiempo);
        tiempo--;
        mostrarTiempo();
        if(tiempo==0){
            btnComprobar.disabled=true;
            btnJugar.disabled=false;
            btnParar.disabled=true;
            alert("FIN DEL JUEGO");
            clearInterval(contador);
        }
    }
}
    
    function mostrarTiempo(){
        temp.textContent= "Tiempo: " + tiempo;
    }

    
    function puntuaje(){
        var texto = resul.value;
        console.log(final);
        console.log(texto);
        if(texto==final){
            aciertos++;
            cargarOperacion();
            cargarPuntuacion();
        }else{
            fallos++;
            cargarPuntuacion();
        }

    console.log(final);
}

function mostrarTiempo(){
    temp.textContent= "Tiempo: " + tiempo;
}

function puntuaje(){
    var texto = resul.value;
    console.log(texto);
    if(texto==final){
        aciertos++;
        cargarOperacion();
        cargarPuntuacion();
        resul.textContent="0";
    }else{
        fallos++;
        cargarPuntuacion();
        resul.textContent="0";
    }
    
    function parar(){
        btnComprobar.disabled=true;
        btnJugar.disabled=false;
        btnParar.disabled=true;
        alert("FIN FORZADO");
        clearInterval(contador);
    }
    
    function cargarPuntuacion(){
        puntuacion.textContent= "Aciertos: " + aciertos + " --- Fallos: " + fallos;
    }

}
