// check function */
let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

//code here */

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    const choice = ['rock', 'paper', 'scissors'];
    let computerChoice;
    if (randomNumber == 1) {
        computerChoice = choice[1];
    } else if (randomNumber == 2) {
        computerChoice = choice[2];
    } else {
        computerChoice = choice[3];
    }
    
    return(computerChoice);
}

console.log(computerSelection);

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    const choice = ['rock', 'paper', 'scissors'];
    if (humanChoice == choice[1] || humanChoice == choice[2] || humanChoice == choice[3]) {
        return humanChoice;
    } else {
        return false;
    }

}

console.log(humanSelection);