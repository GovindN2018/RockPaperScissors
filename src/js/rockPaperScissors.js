var userChoice = "";
var computerChoice = "";
var tieCount = 0;
var computerWinCount = 0;
var playerWinCount = 0;

// Compare user choice vs computer choice
 function compare (choice1, choice2) {
    if (choice1 === choice2) {
        return "Its a tie!";
    }
    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            // rock wins
            return "You win!";
        } else {
            // paper wins
            return "You lose! Try again";
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};

function getCount(result) {
    if (result === "Its a tie!") {
        tieCount++;
    }
    if (result === "You win!") {
        playerWinCount++;
    }
    if (result === "You lose! Try again") {
        computerWinCount++;
    }
};


// User choice
function getUserChoice(button) {
    userChoice = button.value;
    var randomNum = Math.random();
    getComputerChoice(randomNum);
    checkResult();
};

// Computer choice
function getComputerChoice(randomNum) {
    if (randomNum < 0.34) {
        computerChoice = "rock";
    } else if (randomNum <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
};

// Run the compare function
function checkResult() {
    var results = compare(userChoice, computerChoice);
    getCount(results);

    document.getElementById('game-message').innerHTML = '<p class="game-draw">' + results + '</p>' + '<p class="computer-message">The Computer chose ' + computerChoice + '</p>';

    document.getElementById('playerWins').innerHTML = '<strong>Your Victories: </strong> <span id="wins"> ' + playerWinCount + '</span>';
    document.getElementById('playerLosses').innerHTML = '<strong>Your defeats: </strong><span id="losses">' + computerWinCount + '</span>';
    document.getElementById('playerDraws').innerHTML = '<strong>Total Draws:  </strong><span id="draws"> ' + tieCount + '</span>';
};

function resetScores() {
    playerWinCount = 0;
    computerWinCount = 0;
    tieCount = 0;

    document.getElementById('game-message').innerHTML = '<p class="game-draw"></p>' + '<p class="computer-message"></p>';

    document.getElementById('playerWins').innerHTML = '<strong>Your Victories: </strong> <span id="wins"> ' + playerWinCount + '</span>';
    document.getElementById('playerLosses').innerHTML = '<strong>Your defeats: </strong><span id="losses">' + computerWinCount + '</span>';
    document.getElementById('playerDraws').innerHTML = '<strong>Total Draws:  </strong><span id="draws"> ' + tieCount + '</span>';
};

//function selectedButton(button) {
//    alert("This button selected...");
//    button.style.backgroundColor = "red";
//    //button.toggleClass('buttonClassB');
//};

module.exports = {
    compare: compare,
    getUserChoice: getUserChoice,
    getComputerChoice: getComputerChoice,
    //results: results,
    getCount: getCount,
    resetScores: resetScores
};