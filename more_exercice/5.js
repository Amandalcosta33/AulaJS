let nome, not1, not2, not3, not4, media;


resposta=true;
while(resposta){
    document.write("<ul>");
    nome=prompt("Nome do cliente");
    document.write("<li>" +nome+ "</li>");

    not1=prompt(" Qual a nota 1 deste aluno? ");
    not1 = parseFloat(not1);
    not2=prompt(" Qual a nota 2 deste aluno? ");
    not2 = parseFloat(not2);
    not3=prompt(" Qual a nota 3 deste aluno? ");
    not3 = parseFloat(not3);
    not4=prompt(" Qual a nota 4 deste aluno? ");
    not4 = parseFloat(not4);

        media=(not1+not2+not3+not4)/4;

     document.write("<li>" "Média do aluno é " +media+ "</li>");

    if(media=>5){
        document.write("<li>" "Este aluno esta APROVADO!" "</li>");
    } else {
        document.write("<li>" "Este aluno esta REPROVADO!" "</li>");
    }
    resposta=confirm("Deseja continuar?");
    document.write("</ul>");
}