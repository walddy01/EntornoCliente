window.onload=inicio;

function inicio(){
    console.log("estoy en js");
    document.getElementById("btn1").addEventListener("click", funcion1);
    document.getElementById("btn2").addEventListener("click", funcion2);
    document.getElementById("btn3").addEventListener("click", funcion3);
    document.getElementById("btn4").addEventListener("click", funcion4);
    document.getElementById("btn5").addEventListener("click", funcion5);
    document.getElementById("btn6").addEventListener("click", funcion6);
    document.getElementById("btn7").addEventListener("click", funcion7);
    document.getElementById("btn8").addEventListener("click", funcion8);

    function funcion1(){
        let numero1=Math.round(Math.random()*100);
        document.getElementById("c1").innerText=numero1;
        document.getElementById("c1").style.backgroundColor="Green";
        let caja1=document.getElementById("c1");
        with (document.getElementById("c1")){
            innerText=numero1;
            style.backgroundColor="Green";
            style.color="Red";
            style.fontSize="23px"
        }
    }

    function funcion2(){
        const colores=["Red", "Green", "Yellow", "Blue", "Orange"];
        let indice=Math.round(Math.random()*4);
        console.log(indice);
        let caja2=document.getElementById("c2");
        caja2.style.backgroundColor = colores[indice];
    }

    function funcion3(){
        let num1 = prompt("Escriba un numero:");
        let num2 = prompt("Escriba otro numero:");
        let suma = parseInt(num1) + parseInt(num2);
        let caja3=document.getElementById("c3");
        caja3.style.backgroundColor = "Yellow";
        caja3.innerText=suma;

    }

    function funcion4(){
        let caja4 = document.getElementById("c4");
        let numGanador = Math.round(Math.random()*10 + 1);
        let num = parseInt(prompt("Adivina un numero del 1 al 10"));
        let fin = false;
        let cont = 0;
        while (!fin){
            if(num == numGanador){
                fin = true;
            } else{
                num = parseInt(prompt("No, intentalo de nuevo"));
                
            }
            cont++;
        }
        caja4.innerText = ("Intentos: " + cont);
        caja4.style.backgroundColor = "Orange";
        
    }


    function funcion5(){
        let caja5 = document.getElementById("c5");
        let numGanador = Math.round(Math.random()*100 + 1);
        let num = parseInt(prompt("Adivina un numero del 1 al 100"));
        let fin = false;
        let cont = 0;
        while (!fin){
            if(num == numGanador){
                fin = true;
            } else{
                if(num < numGanador){
                    num = parseInt(prompt("El numero es mayor. Intentalo de nuevo"));
                } else{
                    num = parseInt(prompt("El numero es menor. Intentalo de nuevo"));
                }
                
            }
            cont++;
        }
        caja5.innerText = ("Intentos: " + cont);
        caja5.style.backgroundColor = "Orange";
        
    }

    function funcion6(){
        const fecha = new Date();
        const anio = fecha.getFullYear();
        const mes = fecha.getMonth();
        const dia = fecha.getDate();
        const hora = fecha.getHours();
        const min = fecha.getMinutes();

        document.getElementById("c6").innerText = hora + ":" + min + "\n" + dia + "/" + mes + "/" + anio;
    }

    function funcion7(){
        console.log("Funcion 7");

        const listaComponentes=document.getElementsByClassName("caja");
        for(let item of listaComponentes){
            item.textContent = Math.round(Math.random()*100);
        }

    }

    function funcion8(){
        const listaComponentes = document.getElementsByClassName("caja");
        for(let item of listaComponentes){
            item.context = prompt("Teclea un numero entre 1 y 100");
            
        }
    }
}