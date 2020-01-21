let nome, idade, email;

nome=prompt("Qual seu nome? ");
idade=prompt("Qual sua idade?");
email=prompt("Qual seu email?");


if (idade>=18) {
    alert("Acesso liberado 18+");
    document.write("Seu nome é: <strong>" +nome +"</strong>");
    document.write("<br> Sua idade é: <em>" +idade + "</em>");
    document.write(" <br> O seu email é: " +email);
} else if (idade>=7 && 18> idade){
    alert("Acesso bloqueado 18-");
    document.write(" Você precisa de um responsável maior de 18 anos");
} else {
    document.write("Sai daqui");
}