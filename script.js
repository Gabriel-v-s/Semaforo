const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalID = null;

// Função que altera o índice da cor para a próxima cor na sequência
const nextIndex = () =>{
    if (colorIndex < 2) {
        colorIndex++
    }else {
        colorIndex = 0
    }
}
// Função principal que é ativada ao clicar nos botões
const trafficLight = ( event ) => {
    stopAuto();
    turnOn[event.target.id]();
}
// Objeto que mapeia as ações para cada botão, associando IDs a funções
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalID = setInterval (changecolor, 1000)
}
// Função para alternar as cores no modo automático
const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
// Função para parar o modo automático
const stopAuto = () => {
    clearInterval (intervalID);
}
// Adiciona um evento de clique ao container dos botões
buttons.addEventListener('click', trafficLight);