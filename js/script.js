let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

/* Cria ordem aleatória de cores */
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

/* Acende a próxima cor */
let lightColor = (element, number) => {
    time = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}

/* Verifica se os botões clicados são os mesmos da ordem gerada no jogo */
let checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        } 
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação ${score}\nVocê acertou Iniciando próximo nivel...`);
        nextLevel();
    }
}

/* Função para o clique do jogador */
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
}

/* Criar função que retorna a cor */
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

/* Função para o proximo nivel do jogo */
let nextLevel = () => {
    score++;
    shuffleOrder();
}

/* Função para game over */
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo, clique para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

/* Função iniciar o jogo */
let playGame = () => {
    alert(`Bem vindo ao GENIUS! Iniciando novo jogo....`)
    score = 0;

    nextLevel();
}

/* eventos de click para as cores */
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();