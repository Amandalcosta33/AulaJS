let valor, desconto, pag;

valor=prompt("Qual o valor ?");
valor = parseFloat(valor);
pag=prompt("Qual a forma de pagamento? \n 1-A vista \n 2-cheque a vista \n 3- cheque pre datado 30 dias \n 4-cheque pre datado 30 e 60 dias");

switch (pag){
    case "1":
    desconto=valor -(valor*0,5) ;
    break;

    case "2":
    desconto=valor -(valor*0,4);
    break;

    case "3":
    desconto=valor -(valor*0,2);
    break;

    case "4":
    desconto=valor -(valor*0,1);
    break
}
document.write("O valor com desconto é R$ " +desconto);