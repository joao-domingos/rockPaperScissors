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

// escolher a opcao do user baseado no texto de um dos botoes
function getUserChoice(button) {
    return button.textContent;
}

// rodar uma rodada usando como parametro a escolha do user e do pc
function playRound(userChoice, pcChoice) {
    switch (userChoice) {
        case 'rock':
            if (pcChoice === 'rock') {
                return 'draw';
            } else if (pcChoice === 'paper') {
                return 'pc';
            } else {
                return 'user';
            }
        case 'paper':
            if (pcChoice === 'rock') {
                return 'user';
            } else if (pcChoice === 'paper') {
                return 'draw';
            } else {
                return 'pc';
            }
        case 'scissors':
            if (pcChoice === 'rock') {
                return 'pc';
            } else if (pcChoice === 'paper') {
                return 'user';
            } else {
                return 'draw';
            }
        default:
            return 'erro';
    }
}

function winner(player) {

}

const displayResult = document.createElement("div");
displayResult.textContent = "";
document.body.appendChild(displayResult);

const displayCount = document.createElement("p");
displayCount.textContent = "";
document.body.appendChild(displayCount);

// pick all buttons with the class btnPlay and then run the game using click as a event listener
const btnPlay = document.querySelectorAll(".btnPlay");


let runningScoreUser = 0;
let runningScorePC = 0;
btnPlay.forEach(button => {
    button.addEventListener("click", function() {
        const userChoice = getUserChoice(button);
        const pcChoice = getComputedChoice();
        const result = playRound(userChoice, pcChoice);

        switch(result) {
            case 'user':
                runningScoreUser++;
                break;
            case 'pc':
                runningScorePC++;
                break;
            case 'draw':
                break;
            default:
                return 'ERRO';
        }
        
        // showing results / logs
        displayResult.textContent = `you choose: ${userChoice} / pc choose: ${pcChoice} / winner: ${result}`;
        displayCount.textContent = `user: ${runningScoreUser} / pc: ${runningScorePC}`;[
        ]
        
        if (runningScorePC == 5 || runningScoreUser == 5) {
            //need to implement a show winner

            runningScorePC = 0;
            runningScoreUser = 0;
            displayCount.textContent = "";
            displayResult.textContent = "";
        }

    });
});
