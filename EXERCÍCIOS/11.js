let numb, sobra;

numb=prompt("Digite um valor:");
sobra=numb%2
if (sobra==0){
    document.write("Seu número é " +numb + " e ele é PAR");
} else{
    document.write("Seu número é " +numb + " e ele é  ÍMPAR");
}