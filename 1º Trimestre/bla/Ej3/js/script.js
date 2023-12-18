window.onload=inicio;

function inicio(){

    let caja1 = document.getElementById("c1");
    let caja2 = document.getElementById("c2");
    let caja3 = document.getElementById("c3");
    let caja4 = document.getElementById("c4");


    document.getElementById("btn1").onclick=funcion1;
    document.getElementById("btn2").onclick=funcion2;
    document.getElementById("btn3").onclick=funcion3;
    document.getElementById("btn4").onclick=funcion4;
    document.getElementById("btn5").onclick=funcion5;
    document.getElementById("btn6").onclick=funcion6;
    document.getElementById("btn7").onclick=funcion7;
    document.getElementById("btn8").onclick=funcion8;



    function funcion1(){
        console.log("Entro en funcion 1");
        let vectorCaja = document.getElementsByClassName("caja");
        console.log(vectorCaja);
    
        for(let elemento of vectorCaja){
            elemento.textContent = Math.round(Math.random()*100);
        }
    }

    function funcion2(){
        console.log("Entro en funcion 2");
        let vectorCaja = document.getElementsByClassName("caja");
        console.log(vectorCaja);
    
        let caja = 1;
        for(let elemento of vectorCaja){
            elemento.textContent = prompt("Teclea un numero para la caja " + caja);
            caja++;
        }
    }

    function funcion3(){
        let vectorCaja = document.getElementsByClassName("caja");
        intervalo1 = setInterval(accionRandom, 3000);

        function accionRandom(){
            for(let elemento of vectorCaja){
                elemento.textContent = Math.round(Math.random()*100);
            }

        }
    }

    function funcion4(){
        const colores = ["Red", "Green", "Blue", "Yellow", "Orange", "Pink"];
        let vectorCaja = document.getElementsByClassName("caja");
        intervalo2 = setInterval(accionRandom, 2000);

        function accionRandom(){
            for(let elemento of vectorCaja){
                let num = Math.round(Math.random()*5);
                elemento.style.backgroundColor = colores[num];
            }

        }
    }


    function funcion5(){
        console.log("Funcion 5");
        clearInterval(intervalo1);
        clearInterval(intervalo2);

    }


    function funcion6(){
        let btn6 = document.getElementById("btn6");
        btn6.disabled=true;
        console.log("Funcion6 - Cuenta atras");
        let caja = document.getElementById("c1");
        let num = 10;
        let puntuacion = 0;
        cuenta = setInterval(cuentaAtras, 1000);

        function cuentaAtras(){
            caja.textContent = num;
            if(num == 0){
                btn6.disabled=false;
                clearInterval(cuenta);
            }
            num--;
        }
        
    }

    function funcion7(){
        let btn7 = document.getElementById("btn7");
        btn7.disabled=true;
        const color = ["Red", "Blue", "Green", "Yellow"];
        
        let num = 30;

        

        colors = setInterval(colores, 500);
        tiempo = setInterval(temporizador, 1000);

        function temporizador(){
            caja4.textContent = num;
            if(num == 0){
                btn7.disabled=false;
                clearInterval(tiempo);
                clearInterval(colors);                  
            }
            num--;
        }

        function colores(){
            console.log("colores");
            let num1 = Math.round(Math.random()*3);
            let num2 = Math.round(Math.random()*3);

            caja1.style.backgroundColor = color[num1];
            caja2.style.backgroundColor = color[num2];

            

        }

        

        
        
    }

    function funcion8(){
        var puntuacion = 0;
        caja1.onclick=entrar;

        function entrar(){
            if(num1 == num2) puntuacion++;
            else puntuacion--;
            caja3.textContent = "Puntiacion: " + puntuacion;
        }
    }


}

