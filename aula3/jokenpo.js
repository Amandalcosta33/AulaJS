let nomejg1, nomejg2;
let opcjg1, opcjg2;

nomejg1 = prompt("Informe o nome do jogador 1:");
opcjg1=prompt("Ola "+nomejg1 + " \n Escolha uma das opções : \n 1- Pedra \n 2- Papel \n 3- Tesoura");
nomejg2 = prompt("Informe o nome do jogador 2:");
opcjg2=prompt("Ola "+nomejg2 + " \n Escolha uma das opções : \n 1- Pedra \n 2- Papel \n 3- Tesoura");

if (opcjg1==opcjg2){
 document.write("EMPATE <br> Jogue novamente aperte F5");
} else if (opcjg1==1 && opcjg2==3){
    document.write("PARABENS " +nomejg1 + " VOCE GANHOU");
    document.write(" <br> <br>  <img src='pedra.png'> X <img src='tesoura.png'>");
} else if(opcjg1==2 &&  opcjg2==1){
    document.write("PARABENS " +nomejg1 + " VOCE GANHOU");
    document.write(" <br> <br>  <img src='papel.png'> X <img src='pedra.png'>");
} else if (opcjg1==3 && opcjg2==2){
    document.write("PARABENS " +nomejg1 + " VOCE GANHOU");
    document.write(" <br> <br>  <img src='tesoura.png'> X <img src='papel.png'>");
} else if  (opcjg2==1 && opcjg1==3){
       document.write("PARABENS " +nomejg2 + " VOCE GANHOU");
       document.write(" <br> <br>  <img src='tesoura.png'> X <img src='pedra.png'>");
   } else if(opcjg2==2 &&  opcjg1==1){
       document.write("PARABENS " +nomejg2 + " VOCE GANHOU");
       document.write(" <br> <br>  <img src='pedra.png'> X <img src='papel.png'>");
   } else if (opcjg2==3 && opcjg1==2){
       document.write("PARABENS " +nomejg2 + " VOCE GANHOU");
       document.write(" <br> <br>  <img src='papel.png'> X <img src='tesoura.png'>");
   }