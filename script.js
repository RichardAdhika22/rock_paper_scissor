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

    if ((playerSelection != "paper") && (playerSelection != "rock") && (playerSelection != "scissors")){
        return ("Input is invalid");
    }

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

function game(){
    let countWin=0, countLose=0;
    for (let i=1; i<=5; i++){
        let playerSelection = prompt("Enter your choice (" + i + "/5) : ");
        let computerSelection = getcomputerSelection();

        playerSelection.toLowerCase();
        computerSelection.toLowerCase();

        let result = playRound(playerSelection, computerSelection);

        console.log(result);
        countWin += (result.split("Win").length -1);
        countLose += (result.split("Lose").length -1);
    }

    if(countWin > countLose) console.log("You Win!");
    else if(countWin < countLose) console.log("You Lose!");
    else console.log("It's draw");
}

// var computerSelection, result;
// getcomputerSelection();
// console.log(computerSelection);

// console.log(playRound("rock", computerSelection));
game();
game();