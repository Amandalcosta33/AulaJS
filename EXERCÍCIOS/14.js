let m, p, e;

p=prompt("Qual o kg de peixe?");

e=p-50;

if (e<=0){
    document.write("O peso do kg é: " +p + " <br> Portanto NÃO há excesso e NÃO haverá multa, pois seu limite de peso é 50kg.");
    
} else{
    m=e*4;
    document.write("O peso do kg é: " +p +"<br> O excesso de kg do peso do peixe é igual a : " +e + " <br> Sua multa é de R$" +m +" reais.");
}
