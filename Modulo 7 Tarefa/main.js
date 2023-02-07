const numA = document.getElementById('numero-A');
const numB = document.getElementById('numero-B');
const botao = document.getElementById('botao');

const paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', function(e){
    e.preventDefault()
    if(numB.value > numA.value){
        paragrafo.innerHTML = `O numero B é maior que A (Está certo)`
    }else if(numA.value == numB.value){
        paragrafo.innerHTML = `Os numeros são iguais`
    }else{
        paragrafo.innerHTML = `O numero A é maior que B (Está errado)`
    }
})