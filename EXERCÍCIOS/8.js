let j, c, i, n;
c = prompt ("Informe o valor do capital: ");
c = parseFloat(c);
i = prompt ("Informe o valor da taxa de empréstimo:");
i = parseFloat(i);
n = prompt ("Informe o período:");
n = parseFloat(n);

j=c*(i/100)*n;
console.log("O valor do capital é  " +c);
console.log("O valor da taxa de empréstimo é  " +i);
console.log("O total de período é  " +n);
console.log("O valor do juro simples é igual a " +j);