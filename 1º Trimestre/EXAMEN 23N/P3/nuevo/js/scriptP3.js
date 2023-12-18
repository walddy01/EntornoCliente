window.onload = inicio;

let frutas = [];
function inicio() {
    console.log("entro en inicio");
    mostrarPDF();

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;

    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);

            function recorrer(fruta) {
                if (fruta.stockActual < fruta.stockMinimo) {
                    frutas.push(fruta);
                }else{
                    console.log(frutas)
                }
            }
        }
    }

    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
    xhr.send();
    
}

function mostrarPDF() {
    let ticket1 = document.getElementById("cestaCompra").innerHTML;
    console.log(ticket1);

    let estilo =
        "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    let win = window.open("ticket.pdf", "Fruteria", "height=700,width=700");
    win.document.write("<html><head>");
    win.document.write("<title>Stock</title>"); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write("</head>");
    win.document.write("<body>");
    win.document.write("<table>");
    win.document.write(ticket1);
    win.document.write("</table>");
    win.document.write("Total: " + precio.textContent); // contenidos dentro del body
    win.document.write("</body></html>");
    win.print();
}
