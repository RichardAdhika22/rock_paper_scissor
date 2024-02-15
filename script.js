function getcomputerSelection(){
    var computerValue = Math.floor(Math.random()*3);
    switch(computerValue){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
    if (computerValue >= 3) {
        return "scissors";
    }
}

function displayChoice(selection, player) {
    const eraseP = document.querySelector('.displayP');
    const eraseC = document.querySelector('.displayC');
    if(eraseP != null && player) playerChoice.removeChild(eraseP);
    if(eraseC != null && !player) computerChoice.removeChild(eraseC);

    var displayImg;
    var displayImg = document.createElement('img');
    if (selection == "paper") {
        displayImg.src = "images/paper.avif";
    } else if (selection == "scissors") {
        displayImg.src = "images/scissors.avif";
    } else {
        displayImg.src = "images/rock.png";
    }
    
    displayImg.style.height = "100px";
    displayImg.style.opacity = "80%";

    if (player) {
        displayImg.classList.add('displayP');
        playerChoice.appendChild(displayImg);
    }
    else {
        displayImg.classList.add('displayC');
        computerChoice.appendChild(displayImg);
    }
}

function playRound(playerSelection, computerSelection){
    displayChoice(playerSelection, true);
    if (playerSelection == "paper"){
        if(computerSelection == "paper"){
            return("It's a tie! Both choose Paper");
        }
        else if(computerSelection == "rock"){
            return("You Win! Paper beats Rock");
        }
        else{
            return("You Lose! Scissors beats Paper");
        }
    }
    else if (playerSelection == "rock"){
        if(computerSelection == "rock"){
            return("It's a tie! Both choose Rock");
        }
        else if(computerSelection == "scissors"){
            return("You Win! Rock beats Scissors");
        }
        else{
            return("You Lose! Paper beats Rock");
        }
    }
    else{
        if(computerSelection == "scissors"){
            return("It's a tie! Both choose Scissors");
        }
        else if(computerSelection == "paper"){
            return("You Win! Scissors beats Paper");
        }
        else{
            return("You Lose! Rock beats Scissors");
        }
    }
}

function game(playerSelection){
    let computerSelection = getcomputerSelection();
    displayChoice(computerSelection, false);
    return playRound(playerSelection, computerSelection);
}

let playerScore = 0, computerScore = 0;
let finished, result='';

const battleResult = document.getElementById('result');
const resultMsg = document.getElementById('resultMsg');
const playerResult = document.getElementById('player-result');
const playerChoice = document.getElementById('player-choice');
const computerChoice = document.getElementById('computer-choice');
const computerResult = document.getElementById('computer-result');
const final = document.getElementById('final');

const choices = document.querySelectorAll('input');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // const erase = document.querySelector('.display');
        // if (erase != null) battleResult.removeChild(erase);

        let roundResult = game(choice.id);

        playerScore += (roundResult.split("Win").length -1);
        computerScore += (roundResult.split("Lose").length -1);

        if(playerScore == 5){
            result = "Congratz, you win!";
            finished = true;
        }
        else if(computerScore == 5){
            result = "Awww, you lose!";
            finished = true;
        }

        // const body = document.querySelector('body');
        // const erase = document.querySelector('.score');

        // if(erase != null) body.removeChild(erase);
 
        // const displayScore = document.createElement('div');
        // displayScore.classList.add('score');
        // const displayPlayer = document.createElement('div');
        // displayPlayer.textContent = `Your Score = ${playerScore}`;
        // const displayComputer = document.createElement('div');
        // displayComputer.textContent = `Computer's Score = ${computerScore}`;

        resultMsg.textContent = roundResult;
        playerResult.textContent = `Player: ${playerScore}`;
        computerResult.textContent = `Computer: ${computerScore}`;

        // body.appendChild(displayScore);
        // displayScore.appendChild(displayPlayer);
        // displayScore.appendChild(displayComputer);

        // const finalResult = document.createElement('div');
        if(finished) {
            final.textContent = result;

            let buttons = document.querySelectorAll('input');
            buttons.forEach((button) => {
                button.disabled = true;
            })
        }
     });
});
