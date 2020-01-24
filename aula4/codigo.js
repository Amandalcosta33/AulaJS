let diadasemana, dia;

diadasemana=prompt("Digite o dia d semana \n 1-Segunda \n 2-Terça \n 3-Quarta \n 4-Quinta \n 5-Sexta \n 6-Sabado \n 7-Domingo");

switch (diadasemana){
    case "1":
    dia = "Segunda";
    break;
    case "2":
    dia = "Terça";
    break;
    case "3":
    dia = "Quarta";
    break;
    case "4":
    dia = "Quinta";
    break;
    case "5":
    dia = "Sexta";
    break;
    case "6":
    dia = "Sábado";
    break;
    case "7":
    dia="Domingo";
    break;
    default:
    dia = "Resposta inválida";
    break;
}

document.write("O dia da semana escolhido foi " +dia);


let nome, idade, resposta;

let repetir="sim";

while (repetir=="sim") {
 nome=prompt("Informe seu nome: ");
idade=prompt("Informe sua idade: ");
(idade>= 18) ? resposta= "Maior" : resposta="Menor";
document.write(" <br><br> Olá " +nome +" , você é " +resposta + " de idade." );
   
repetir=prompt("Deseja repetir? sim / nao");
    
}