window.onload = inicio;

function inicio(){

    let navegacion = document.querySelectorAll("nav ul li a");
    console.log(navegacion);

    let logo = document.querySelector("#myPage"); 
    let image = document.createElement("img");
    logo.appendChild(image);

    image.src="Práctica 17/img/apple-touch-icon.png"

    let teamDAW = ["Manuel", "Mario", "Mauro", "Álvaro", "Raúl"];
    let enlaceDAW = ["http://practicasmanuelbote.atwebpages.com", "http://raul.blazquez.webcommunity.org", "http://mariojuarez.atwebpages.com", "http://practicasmanuelbote.atwebpages.com", "http://raul.blazquez.webcommunity.org"]

    navegacion.forEach(accion);
    function accion(item, indice){
        item.textContent= teamDAW[indice];
        item.setAttribute("target", "_blank")
        item.href= enlaceDAW[indice];
    }
}
