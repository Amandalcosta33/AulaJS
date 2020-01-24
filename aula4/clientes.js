let cliente, resposta;

document.write("<ul>");
resposta=true;

while(resposta){
    cliente=prompt("Nome do cliente");
    document.write("<li>" +cliente+ "</li>");
    resposta=confirm("Deseja continuar?");
}document.write("</ul>");

let contador =1;

while (contador<=10){
    document.write("Número: "+contador);
    document.write("<br>");

    if(contador==5){
        document.write("Esta é a metade <br>");
    }

    contador++;

}