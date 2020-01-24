let numeroJogador, numeroComputador, a;

numeroComputador = Math.floor(Math.random(1,2) * 11);;

numeroJogador=prompt("Tente adivinhar um numero de 1 a 10");

while(numeroComputador!=numeroJogador)
{
    if (numeroComputador>numeroJogador){
        alert("Seu número esá abaixo!");
    } else {
        alert("Seu número esá acima!");
    }
    if (numeroComputador==numeroJogador){
        document.write("PARABÉNS VOCÊ ACERTOU O  NÚMERO " +numeroComputador);
        } 
    }

    document.write("TENTE NOVAMENTE SEU NÚMERO ERA " +numeroComputador);



