let numb1, numb2, rs, mult ;

numb1=prompt("Informe um número: ");
numb1 = parseFloat(numb1);
numb2=prompt("Informe um número: ");
numb2 = parseFloat(numb2);

rs=(numb1+numb2);
mult= (rs*numb1);

document.write("O resultado da soma dos dois números é " +rs+ " e multiplicação dessa soma pelo primeiro numero é igual a " +mult);
