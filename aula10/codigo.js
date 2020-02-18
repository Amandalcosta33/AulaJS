let numero = [10,20,30,40];
let frutas=["maça","banana", "melão", "morango"];

for (let i=0;i<frutas.length;i++){
    console.log(frutas[i]);
}

setTimeout(
    function(){
        alert("teste");
    }
    ,3000
);

console.log(frutas[1]);
function TrocarImagem(numero) {

    if (numero==1){
    document.getElementById("imageoption").src = "1.png"; 
    document.getElementById("botao1").style.background="#00ff00";
    document.getElementById("botao2").style.background="";
    document.getElementById("botao3").style.background="";
    } else if (numero==2){
    document.getElementById("imageoption").src = "2.png"; 
    document.getElementById("botao2").style.background="#00ff00";
    document.getElementById("botao1").style.background="";
    document.getElementById("botao3").style.background="";
    } else if (numero==3){
    document.getElementById("imageoption").src = "3.png";
    document.getElementById("botao3").style.background="#00ff00";
    document.getElementById("botao2").style.background="";
    document.getElementById("botao1").style.background=""; 

    }
}  
