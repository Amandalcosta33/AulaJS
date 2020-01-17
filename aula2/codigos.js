// alert("Seja Bem vindo");
// alert("site com JS");
// alert("Aula 02");

// document.write("Aprendendo javascript");
console.log("Recado para o desenvolvedor");

let nome, idade;

nome="amanda";
idade="18";
console.log("Nome:" + nome);
console.log("Idade:" + idade);

// OPERADORES ARITMETICOS
console.log("10+2= " + (10+2));
console.log("10-2= " + (10-2));
console.log("10.2= " + 10*2);
console.log("10/2= " + 10/2);
console.log("A sobra da equação 10/2 é " + 10%2);

// OPERADORES RELACIONAIS
console.log("10>2= " + (10>2));
console.log("10<2= " + (10<2));
console.log("10=2= " + (10==2));
console.log("10 é diferete 2= " + (10!=2));
console.log("10>=2= " + (10>=2));
console.log("10<=2= " + (10<=2));

// OPERADORES LOGICOS

console.log((10<2) && (5==5));
console.log((10<2) || (5==5));
console.log( !(5==5));

let numero1 = prompt ("Informe um numero");
numero1 = parseFloat(numero1);
let numero2 = prompt ("Informe outro numero");
numero2 = parseFloat(numero2);

let total=numero1 + numero2;
console.log(total);

console.log (typeof("numero1"));
console.log (typeof("numero2"));
