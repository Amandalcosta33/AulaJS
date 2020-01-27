let numeroJogador, numeroComputador, a=0;

numeroComputador = Math.floor(Math.random(1,2) * 11);;

numeroJogador=prompt("Tente adivinhar um numero de 1 a 10");

// switch (numeroJogador){
//     case (numeroComputador==numeroJogador):
//         document.write("PARABENS VOCÊ ACERTOU O NUMERO " +numeroComputador);
    
//     case (numeroJogador>numeroComputador):
//         document.write("Seu numero esta acima do valor");

//     case (numeroJogador<numeroComputador):
// }

while (numeroComputador!=numeroJogador || a<=3)
{
    if (numeroComputador>numeroJogador){
        resposta=confirm("Seu número esá abaixo!");
    } else {
        resposta=confirm("Seu número esá acima!");
    a++;
}

    if (numeroComputador==numeroJogador){
        document.write("PARABÉNS VOCÊ ACERTOU O  NÚMERO " +numeroComputador);
    } 