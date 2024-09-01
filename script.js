// escolher aleatoriamente a opcao do pc
function getComputedChoice() {
    const escolhaPC = Math.random();

    if (escolhaPC < 1/3) {
        return 'rock';
    } else if (escolhaPC < 2/3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// escolher a opcao do humano baseado no texto de um dos botoes
function getHumanChoice(button) {
    return button.textContent;
}

// rodar uma rodada usando como parametro a escolha do humano e do pc
function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'rock') {
                return 'empate';
            } else if (computerChoice === 'paper') {
                return 'maquina';
            } else {
                return 'humano';
            }
        case 'paper':
            if (computerChoice === 'rock') {
                return 'humano';
            } else if (computerChoice === 'paper') {
                return 'empate';
            } else {
                return 'maquina';
            }
        case 'scissors':
            if (computerChoice === 'rock') {
                return 'maquina';
            } else if (computerChoice === 'paper') {
                return 'humano';
            } else {
                return 'empate';
            }
        default:
            return 'erro';
    }
}

// pick all buttons with the class btnPlay and then run the game using click as a event listener
const btnPlay = document.querySelectorAll(".btnPlay");

btnPlay.forEach(button => {
    button.addEventListener("click", function() {
        const userChoice = getHumanChoice(button);
        const pcChoice = getComputedChoice();
        const result = playRound(userChoice, pcChoice);
    
        console.log(`Você escolheu ${userChoice}`);
        console.log(`A máquina escolheu ${pcChoice}`);
        console.log(`Resultado: ${result}`);
    });
    
});