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
    return "pedra";
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

//test com 1 botao antes de fazer o resto
const btn1 = document.createElement("button");
btn1.textContent = "pedra";
//a ideia é que o playround use como parametro um dos botoes que o usuario clicou e getCOmputedCHoice
btn1.addEventListener("click", function() {
    const userChoice = getHumanChoice();
    const pcChoice = getComputedChoice();
    const result = playRound(userChoice, pcChoice);

    // Exibe o resultado no console
    console.log(`Você escolheu ${userChoice}`);
    console.log(`A máquina escolheu ${pcChoice}`);
    console.log(`Resultado: ${result}`);
});


body.appendChild(ui);
ui.appendChild(btn1);
