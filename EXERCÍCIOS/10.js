let wt, numb1, numb2, resultado;

numb1 = prompt ("Informe um numero");
numb1 = parseFloat(numb1);
numb2 = prompt ("Informe um numero");
numb2 = parseFloat(numb2);
wt = prompt ("Qual operação deseja fazer Adição =1 , Subtração =2, Divisão =3  ou Multiplicação = 4 ? ");

if(wt==1) {
   resultado = (numb1+numb2);
}
else if (wt==2) {
    resultado =numb1-numb2;
} else if (wt==3){
    resultado=(numb1/numb2);
} else if (wt==4){
    resultado=numb1*numb2;
} 

console.log("O resultado é igual a " +resultado)