function sim(){
    alert("Eu te amo, muito, você é o amor da minha vida, você não sabe quanto eu te amo. Minha princesa, meu amor, minha razão pra viver.")
}

var a = document.getElementById('nao');

function desvia(t){
    
    a.innerText = "Hoje Não";
    a.style.position = 'absolute';
    a.style.bottom = geraPosicao(10, 90); 
    a.style.left = geraPosicao(10, 90);
}

geraPosicao(10, 90);

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}