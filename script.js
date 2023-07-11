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
}

function playRound(playerSelection, computerSelection){
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
    return playRound(playerSelection, computerSelection);
}

let playerScore = 0, computerScore = 0;
let finished, result='';

const choices = document.querySelectorAll('button');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
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

        const body = document.querySelector('body');
        const erase = document.querySelector('.score');

        if(erase != null) body.removeChild(erase);
 
        const displayScore = document.createElement('div');
        displayScore.classList.add('score');
        const displayPlayer = document.createElement('div');
        displayPlayer.textContent = `Your Score = ${playerScore}`;
        const displayComputer = document.createElement('div');
        displayComputer.textContent = `Computer's Score = ${computerScore}`;

        body.appendChild(displayScore);
        displayScore.appendChild(displayPlayer);
        displayScore.appendChild(displayComputer);

        const finalResult = document.createElement('div');
        if(finished) {
            finalResult.textContent = result;
            displayScore.appendChild(finalResult);

            let buttons = document.querySelectorAll('button');
            buttons.forEach((button) => {
                button.disabled = true;
            })
        }
     });
});
