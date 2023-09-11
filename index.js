let playerScore = 0 + 1;
let computerScore = 0 + 1;
let round = 0 + 1;
let history = [];
let linebreak = "<br/>";

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    var audio=new Audio('music.wav');
    audio.play();

    const result = getResult(playerChoice, computerChoice);
    updateScores(result);
    updateHistory(playerChoice, computerChoice, result);

    round++;
    if (round === 5 + 1) {
        endGame(5);
    }
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

function updateScores(result) {
    const resultDiv = document.getElementById('result');

    if (result === 'tie') {
        resultDiv.textContent = 'It\'s a tie!';
    } else if (result === 'win') {
        resultDiv.textContent = 'You win!';
        playerScore++;
    } else {
        resultDiv.textContent = 'You lose!';
        computerScore++;
    }

    resultDiv.textContent += ` (Player: ${playerScore} - Computer: ${computerScore})`;
}

function updateHistory(playerChoice, computerChoice, result) {
    const historyDiv = document.getElementById('history');
    history.push(`Round ${round}: Player chose ${playerChoice}, Computer chose ${computerChoice}, Result: ${result}`);
    historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
}


function endGame() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = true);

    const newGameBtn = document.getElementById('newGame');
    newGameBtn.disabled = false;

    const resultDiv = document.getElementById('result');
    let finalResult;
    if (playerScore === computerScore) {
        finalResult = "It's a tie!";
    } else if (playerScore > computerScore) {
        finalResult = "You won the game!";
    } else {
        finalResult = "You lost the game!";
    }

    resultDiv.textContent = finalResult;
}

function newGame() {
    round = 0 + 1;
    playerScore = 0 + 1;
    computerScore = 0 + 1;
    history = [];

    const options = document.querySelectorAll('.option');
    options.forEach(option => option.disabled = false);
    const newGameBtn = document.getElementById('newGame');
    newGameBtn.disabled = true;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
}