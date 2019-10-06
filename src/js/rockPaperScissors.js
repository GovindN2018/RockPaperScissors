var userChoice = "";
var drawCount = 0;
var computerWinCount = 0;
var playerWinCount = 0;

// Compare user choice vs computer choice
var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "It's a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

function getCount(result) {
    if (result === "It's a tie!") {
        drawCount++;
    }
    if (result === "You win!") {
        playerWinCount++;
    }
    if (result === "You lose! Try again.") {
        computerWinCount++;
    }
}


function getUserChoice(button) {
    userChoice = button.value;

    // Computer choice
    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Run the compare function
    var results = compare(userChoice, computerChoice);
    getCount(results);

    document.getElementById('game-message').innerHTML = '<p class="game-draw">' + results + '</p>' + '<p class="computer-message">The Computer chose ' + computerChoice + '</p>';

    document.getElementById('playerWins').innerHTML = '<strong>Your Victories: </strong> <span id="wins"> ' + playerWinCount + '</span>';
    document.getElementById('playerLosses').innerHTML = '<strong>Your defeats: </strong><span id="losses">' + computerWinCount + '</span>';
    document.getElementById('playerDraws').innerHTML = '<strong>Total Draws:  </strong><span id="draws"> ' + drawCount + '</span>';
};

function resetScores() {
    playerWinCount = 0;
    computerWinCount = 0;
    drawCount = 0;

    document.getElementById('game-message').innerHTML = '<p class="game-draw"></p>' + '<p class="computer-message"></p>';

    document.getElementById('playerWins').innerHTML = '<strong>Your Victories: </strong> <span id="wins"> ' + playerWinCount + '</span>';
    document.getElementById('playerLosses').innerHTML = '<strong>Your defeats: </strong><span id="losses">' + computerWinCount + '</span>';
    document.getElementById('playerDraws').innerHTML = '<strong>Total Draws:  </strong><span id="draws"> ' + drawCount + '</span>';
};