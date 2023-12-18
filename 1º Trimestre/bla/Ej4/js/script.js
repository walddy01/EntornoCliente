window.onload=inicio;

function inicio(){
    console.log("Entro en inicio");
    const colores=["#FF0000","#00FF00","OOOOFF","#FFFF00"];
    const nombres = ["Red","Green","Blue","Yellow"];

    
    let btnJugar=document.getElementById("jugar");
    btnJugar.onclick=empezar;
    let btnParar=document.getElementById("parar")
    btnParar.onclick=pausa;
    let caja=document.getElementById("fondo");
    let spTiempo=document.getElementById("spTiempo");
    let spPuntos=document.getElementById("spPuntos");
    var tiempo;
    var puntos=0;
    var contSeg=30;

    function empezar(){
        console.log("Entrando en funcion jugar");
        btnJugar.disabled=true;
        contSeg = 30;
        tiempo=setInterval(juego,1000);

    }

    function juego(){
        console.log("Funcion juego");
    
        let num1 = Math.round(Math.random()*3);
        caja.style.backgroundColor = colores[num1];
        let num2 = Math.round(Math.random()*3);
        document.getElementById("texto").textContent= nombres[num2];

        spTiempo.textContent = "Tiempo: " + contSeg;

        if(contSeg <= 0){
            clearInterval(tiempo);
            function comprobar(){}
            btnJugar.disabled=false;
        
        }

        contSeg--;

        caja.onclick=comprobar;
        function comprobar(){
            if(num1==num2){
                puntos++;
            } else {
                puntos--;
            }
            spPuntos.textContent= "Puntos: " + puntos;

        }
        
    }

    function pausa(){
        puntos = 0;
        contSeg = 0;
        spPuntos.textContent= "Puntos: 0";
        spTiempo.textContent = "Tiempo: 30";
        btnJugar.disabled=false;
        
        
    }
}