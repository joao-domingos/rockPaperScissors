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

function getHumanChoice(button) {
    return button.textContent;
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

const body = document.querySelector("body");
body.style.backgroundColor = "blue"

const ui = document.createElement("div");

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

body.appendChild(ui);
