let buttonComeçar = document.querySelector('#efeitosonoro');
let buttonComoJogar = document.querySelector('#efeitosonoro2');
let buttonCreditos = document.querySelector('#efeitosonoro3');
let audioArray = document.getElementsByTagName('audio');
let divPergunta = document.querySelector('.pergunta');
let credits = document.querySelector('#credits');
let instructions = document.querySelector('#instructions');
let pergunta1 = document.querySelector('#pergunta1')
let pergunta2 = document.querySelector('#pergunta2')
let pergunta3 = document.querySelector('#pergunta3')


// Esse audio vão tocar quando o usuario passar o mause nos buttons
buttonComeçar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonComoJogar.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

buttonCreditos.addEventListener('mouseenter', () => {
    audioArray[1].play();
});

function clicouEmComecar() {
    audioArray[2].play(); // Quando o usuario clicar em comecar tocará esse audio >> E ele será direionado para o painel da primeira pergunta
    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    divPergunta.style.display = 'block';
}

function clicouEmCreditos() {

    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    credits.style.display = 'flex';

}

function clicouEmComoJogar() {
    const telaInicial = document.getElementById('telaInicial');
    telaInicial.style.display = 'none';
    instructions.style.display = 'flex';
}

function acertouAPergunta1() {
    alert("Você acertou a pergunta, vamos para a proxima questão")
    pergunta1.style.display ='none';
    pergunta2.style.display ='flex';
}

function errouAPergunta() {
    alert("Você errou, tente novamente")
    pergunta1.style.display ='none';
    pergunta2.style.display ='none';
    pergunta3.style.display ='none';
    telaInicial.style.display = 'flex';


}
function acertouAPergunta2() {
    alert("Você acertou a pergunta, vamos para a proxima questão")
    pergunta2.style.display ='none';
    pergunta3.style.display ='flex';
  }

  function acertouAPergunta3() {
    alert("Parabéns você acertou todas as questões")
    pergunta3.style.display ='none'
    telaInicial.style.display = 'flex';
    console.log("Acertou")
  }