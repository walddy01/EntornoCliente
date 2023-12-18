window.onload=inicio;

let cuerpo=document.querySelector("body");

const NUM_CONT=3;
const NUM_CAJA=50;

const columnas=[];
const CajaFinal=[];
const ganador=[];

function inicio(){

    let contCaja=0;
    let contColumn=0;

    let contenedorP=document.createElement("div");
    contenedorP.className= "container";
    cuerpo.appendChild(contenedorP);

    for(let i=1;i<=NUM_CONT;i++){

        let contenedorS=document.createElement("fieldset");
        contenedorS.className= "gallery";
        let leyenda=document.createElement("legend");
        leyenda.textContent="Loteria "+i;
        contenedorS.appendChild(leyenda);
        contenedorP.appendChild(contenedorS);

        columnas.push(contenedorS);

        for(let j=1;j<=NUM_CAJA;j++){
            let caja=document.createElement("div");
            caja.className="gallery div";
            caja.textContent=j;

            contenedorS.appendChild(caja);

            caja.onclick=marcar;

            function marcar(){
                if(contColumn==0){

                }
                if(contCaja==6){

                    //contCaja++;

                }else{
                    contCaja++;
                    caja.style.backgroundColor="red";
                    CajaFinal.push(caja.textContent);
                    console.log(CajaFinal);

                }
            }
        }

    }


    let btn=document.createElement("button");
    btn.textContent="Sorteo";
    btn.style.marginLeft="48%";
    btn.style.width="4%";
    cuerpo.appendChild(btn);

    btn.onclick=sorteo;


    function sorteo(){

        let contenedorSorteo=document.createElement("div");
        contenedorSorteo.className="gallery2";
        cuerpo.appendChild(contenedorSorteo);
        
        for(let i=0; i<6;i++){
            let cajaG=document.createElement("div");
            cajaG.className="gallery2 div";
            cajaG.style.backgroundColor="greenyellow";

            let num;
            do{
                num=Math.round(Math.random()*50)
            }while(ganador.includes(num) || num==0);
            ganador.push(num);

            cajaG.textContent=num;
            contenedorSorteo.appendChild(cajaG);
            //console.log(ganador);

        }

        let contenedorNumeros=document.createElement("div");
        contenedorNumeros.className="gallery2";
        cuerpo.appendChild(contenedorNumeros);

        let cont=0;

        console.log(ganador);

        for(let i=0; i<7;i++){

            let CajaNum=document.createElement("div");
            CajaNum.className="gallery2 div";
            contenedorNumeros.appendChild(CajaNum);

            if(i<6){
                CajaNum.textContent=CajaFinal[i];
                CajaNum.style.backgroundColor="rgb(57, 131, 241)"
                
                ganador.forEach(function(item,indice){
                    if(item==CajaFinal[i]){
                        CajaNum.style.backgroundColor="pink";
                        cont++;
                    }
                })
                
            }else{
                CajaNum.textContent=cont;
                CajaNum.style.backgroundColor="rgb(238, 104, 238)";
            }
        }

    }


    




}