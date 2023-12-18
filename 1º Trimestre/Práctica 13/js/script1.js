window.onload = inicio;

let doe = 0;
let pt = 0;

let portugues = [];

function inicio(){

    let enlace = document.querySelectorAll("a");
    // for (let i = 0; i < enlace.length; i++) {
    //     console.log(enlace[i]);
    // }

    enlace.forEach(accion);

    function accion(item, indice){
        if(item.href.includes("doe")){
            doe++;
            console.log(indice);
        }
    }

    console.log("Número de apariciones de doe: " + doe);

    console.log("Páginas portuguesas: ");
    enlace.forEach(accion2);

    function accion2(item, indice){
        if(item.href.includes("pt")){
            pt++;
            console.log(item);
        }
    }


    console.log("Número de páginas portuguesas: " + pt);

    
}