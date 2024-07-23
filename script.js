// check function */
const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

//code here */

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = 'rock';
    } else if (randomNumber == 2) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    
    return(computerChoice);
}

console.log(computerSelection);

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    const choice = ['rock', 'paper', 'scissors'];
    if (humanChoice == choice[0] || humanChoice == choice[1] || humanChoice == choice[2]) {
        return humanChoice;
    } else {
        return false;
    }

}

console.log(humanSelection);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
    humanScore++
    roundWinner = `You won! The score is ${humanScore} to ${computerScore}.`;
  } else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
    computerScore++
    roundWinner = `You lost! The score is ${humanScore} to ${computerScore}.`;
  } else {
    roundWinner = `It's a draw! The score is ${humanScore} to ${computerScore}.`;
  }
  
  return roundWinner;
}

function playGame() {
  for (let i = 0; i < 6; i++) {
    return playRound(humanSelection, computerSelection);
  }
}

console.log(playGame());