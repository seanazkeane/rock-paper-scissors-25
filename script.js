function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice() {
    let userChoice = prompt("Choose rock, paper, or scissors:");
    return userChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("Tie! Human: " + humanScore + " Computer: " + computerScore);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            console.log("Human wins!  Human: " + humanScore + " Computer: " + computerScore);
        } else {
            computerScore++;
            console.log("Computer wins!  Human: " + humanScore + " Computer: " + computerScore);
        }
    
    }

    function checkWinner() {
        if (humanScore == computerScore) {
            console.log("Tie after 5 rounds!") 
        } else if (humanScore > computerScore) {
            console.log("Human wins after 5 rounds!") 
        } else {
            console.log("Computer wins after 5 rounds!");
        }
    }

    for (let i = 0; i < 5; i++) {

        let humanCurrentChoice = getHumanChoice();
        let computerCurrentChoice = getComputerChoice();

        playRound(humanCurrentChoice, computerCurrentChoice);

    }

    checkWinner();

}