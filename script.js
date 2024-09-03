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

function showModal(headerMessage, winner) {
    const modal = document.getElementById("myModal");
    const header = document.getElementById("modalHeader");
    const body = document.getElementById("modalBody");

    header.textContent = headerMessage;
    body.textContent = `${winner} won the game!`;
    modal.style.display = "block";

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

function reset() {
    runningScoreUser = 0;
    runningScorePC = 0;
    displayResult.textContent = "";
    displayCount.textContent = "";
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
        displayCount.textContent = `user: ${runningScoreUser} / pc: ${runningScorePC}`;
        
        if (runningScoreUser == 5) {
            showModal('Congratulations!!!', 'you');
            reset();
        } else if (runningScorePC == 5) {
            showModal('you almost got it!!!', 'pc');
            reset();
        }

    });
});
