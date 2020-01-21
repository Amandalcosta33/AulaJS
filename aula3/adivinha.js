let numeroJogador, numeroComputador;

numeroComputador = Math.floor(Math.random(0,1) * 10);;

numeroJogador=prompt("Tente adivinhar um numero de 0 a 9");



if (numeroComputador==numeroJogador){
    document.write("VOCÊ GANHOU");
    document.write("<img src='happy.png' >");
} else {
    document.write("VOCÊ PERDEU");
    document.write("<img src='sad.png'>");
}