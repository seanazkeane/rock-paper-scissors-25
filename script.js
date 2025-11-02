const startButton = document.getElementById("start-button");
const choices = document.querySelectorAll(".choice");
const message = document.getElementById("message");
const playerScoreBox = document.getElementById("player-score-box");
const computerScoreBox = document.getElementById("computer-score-box");

//startButton.addEventListener("click", playGame);

humanScore = 0;
computerScore = 0;


function startGame() {
    resetScores();
    choices.forEach(choice => {
        choice.addEventListener("click", getHumanChoice);
        choice.style.cursor = "pointer";
      });
    
    message.textContent = "Click a button below to make your choice!"
    playerScoreBox.innerHTML = `<h2>Player: ${humanScore}</h2>`;
    computerScoreBox.innerHTML = `<h2>Computer: ${computerScore}</h2>`
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
};

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice(event) {
    playRound(event.currentTarget.dataset.choice);
}

startButton.addEventListener("click", startGame);

function checkWinner() {
    if (humanScore >= 3 || computerScore >= 3) {
        if (humanScore > computerScore) {
            message.textContent = `Player wins game! Player: ${humanScore} Computer: ${computerScore}`;
        } else {
            message.textContent = `Computer wins game! Player: ${humanScore} Computer: ${computerScore}`;
        }
        startButton.textContent = "Play again"
        choices.forEach(choice => {
            choice.removeEventListener("click", getHumanChoice);
            choice.style.cursor = "default";
          });
    }
};

function toSentenceCase(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        message.textContent = "It's a tie! Go again.";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        message.textContent = "Player wins! " + toSentenceCase(humanChoice) + " beats " + computerChoice + ".";
        playerScoreBox.innerHTML = `<h2>Player: ${humanScore}</h2>`;
    } else {
        computerScore++;
        message.textContent = "Player loses! " + toSentenceCase(computerChoice) + " beats " + humanChoice + ".";
        computerScoreBox.innerHTML = `<h2>Computer: ${computerScore}</h2>`;
    }
    checkWinner();
}



/*

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

*/