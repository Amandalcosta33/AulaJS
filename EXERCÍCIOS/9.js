let s, r, sr;
s = prompt ("Informe o salário:");
s = parseFloat(s);
r= prompt ("Informe o valor do reajuste;");
r= parseFloat(r);
sr=s+(s*(r/100));
console.log("O valor do salário é "+s);
console.log("O valor do reajuste é "+r);
console.log("O valor do salário reajustado é "+sr);