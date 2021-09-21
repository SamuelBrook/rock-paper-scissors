const gameWordsArray = ["rock", "paper", "scissors"];
const winStatementRock = "You win! Rock beats scissors!";
const loseStatementRock = "You lose! Scissors beats rock!";
const winStatementScissors = "You win! Scissors beats paper!";
const loseStatementScissors = "You lose! Paper beats rock!";
const winStatementPaper = "You win! Paper beats rock!";
const loseStatementPaper = "You lose! Rock beats beats paper!";
const wrongInputMessage = "Please enter either Rock, Paper or Scissors to start the game.";
const drawStatement = "Draw! You both entered the same word!";



game();



function game() {
    let countPlayer = 0;
    let countComputer = 0; 
    // loop the play round 5 times
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter either rock, paper or scissors to play!").toLowerCase();
        let computerSelection = computerPlay();
        let resultRound = playRound(playerSelection, computerSelection);
        alert(resultRound);
        if (resultRound === wrongInputMessage) {
            i--;
        }
        //keep score of results using counter
        if (resultRound === winStatementRock || winStatementScissors || winStatementPaper) {
            countPlayer++;
        }
        else if (resultRound === loseStatementScissors || loseStatementPaper || loseStatementRock) {
            countComputer++;
        }
    }
    playAgain();
}

function computerPlay() {
    let randomNumber = Math.random() * gameWordsArray.length;
    let numberRoundedDown = Math.floor(randomNumber);
    let randomWord = gameWordsArray[numberRoundedDown];
    return randomWord;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return winStatementRock;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return loseStatementRock;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return winStatementPaper;
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return loseStatementPaper;
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return winStatementScissors;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return loseStatementScissors;
    }
    else if (playerSelection === computerSelection) {
        return drawStatement;
    }
    else {
        return wrongInputMessage;
    }
}


function playAgain() {
    let answer = prompt("You win! Do you wish to play again? Please enter either yes or no.");
    if (answer === "yes") {
        game();
    }
    else if (answer !== "no") {
        alert("Please enter either yes or no");
        playAgain();
    }
}
