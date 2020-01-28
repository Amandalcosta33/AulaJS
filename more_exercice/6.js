let pess, valor;

pess=prompt("Digite a quantidade de pessoas ");

if (pess<=100){
    valor=pess*35;
} else {
    valor=pess*45;
}

document.write("O orgamento é de R$" +valor);