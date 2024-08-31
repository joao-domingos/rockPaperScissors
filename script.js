console.log("Hello World")

function getComputedChoice() {
    const escolhaPC = Math.random();

    if (escolhaPC < 1/3) {
        return 'pedra';
    } else if (escolhaPC < 2/3) {
        return 'papel';
    } else {
        return 'tesoura';
    }
}

console.log(getComputedChoice());

function getHumanChoice() {
    let userInput = prompt("escolha entre pedra, papel ou tesoura:").toLowerCase();
    const validChoices = ['pedra', 'papel', 'tesoura'];
    while (!validChoices.includes(userInput)) {
        userInput = prompt("Escolha inválida.\nEscolha entre pedra, papel ou tesoura:").toLowerCase().trim();
    }
    return userInput;
}


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'pedra':
            if (computerChoice === 'pedra') {
                return 'empate';
            } else if (computerChoice === 'papel') {
                return 'maquina';
            } else {
                return 'humano';
            }
        case 'papel':
            if (computerChoice === 'pedra') {
                return 'humano';
            } else if (computerChoice === 'papel') {
                return 'empate';
            } else {
                return 'maquina';
            }
        case 'tesoura':
            if (computerChoice === 'pedra') {
                return 'maquina';
            } else if (computerChoice === 'papel') {
                return 'humano';
            } else {
                return 'empate';
            }
        default:
            return 'erro';
    }
}

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let userChoice = getHumanChoice();
        let pcChoice = getComputedChoice();
        let result = playRound(userChoice, pcChoice);

        if (result === 'humano') {
            console.log(`Rodada ${i + 1}: Você ganhou esta rodada!`);
            humanScore++;
        } else if (result === 'maquina') {
            console.log(`Rodada ${i + 1}: A máquina ganhou esta rodada.`);
            computerScore++;
        } else if (result === 'empate') {
            console.log(`Rodada ${i + 1}: Empate.`);
        } else {
            console.log(`Rodada ${i + 1}: Erro.`);
        }
    }

    console.log(`\nPontuação final: Você ${humanScore} - Máquina ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Você venceu o jogo!");
    } else if (computerScore > humanScore) {
        console.log("A máquina venceu o jogo!");
    } else {
        console.log("O jogo terminou empatado!");
    }
}

playGame();