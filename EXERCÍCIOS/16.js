let numeroJogador, numeroComputador;

numeroComputador = Math.floor(Math.random(1,2) * 11);;

for (let i=1; i<=3; i++){

    numeroJogador=prompt("Tente adivinhar um numero de 1 a 10");
    
    document.write("<br> tentativa " +i+ " = " +numeroJogador);
    if (numeroComputador==numeroJogador){
        document.write("<br> <br>  PARABENS VOCE ACERTOU E O NUMERO É " +numeroComputador);
        document.write("<br> tentativa " +i+ " = " +numeroJogador);
        break;
    }  else  if (i==3){
        document.write(" <br> TENTE NOVAMENTE APERTE F5, O NUMERO ERA " +numeroComputador);
    } else if (numeroComputador>numeroJogador){
        alert("Você esta abaixo do valor!");
    } else if (numeroComputador<numeroJogador){
        alert("Você esta acima do valor!");
    } 

    
}

