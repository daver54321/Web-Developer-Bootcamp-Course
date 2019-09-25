//Setup
var gameLimit = 5;
var limitEntry = document.getElementById("gameLimitEntry");
limitEntry.setAttribute("value", gameLimit);
var limitText = document.getElementById("gameLimitText");
limitText.textContent = gameLimit;

var playerOneButton = document.querySelector("#p1");
var player1Score = {score: 0};
var player1ScoreText = document.getElementById("p1Score");

var playerTwoButton = document.querySelector("#p2");
var player2Score = {score: 0};
var player2ScoreText = document.getElementById("p2Score");

Reset();

//Buttons and Inputs
limitEntry.addEventListener("change", function() {
    var newValue = parseInt(limitEntry.value);
    gameLimit = newValue;
    limitText.textContent = newValue;
})

playerOneButton.addEventListener("click", function() {
    playerButton(player1Score, player1ScoreText);
} );

playerTwoButton.addEventListener("click", function() {
    playerButton(player2Score, player2ScoreText);
} );

document.getElementById("ResetButton").addEventListener("click", Reset);

//Helper functions
function Reset() {
    playerOneButton.removeAttribute("disabled");
    playerTwoButton.removeAttribute("disabled");
    player1Score.score = 0;
    player1ScoreText.textContent = player1Score.score;
    player2Score.score = 0;
    player2ScoreText.textContent = player2Score.score;
    player1ScoreText.classList.remove("winner");
    player2ScoreText.classList.remove("winner");

}

function playerButton (playerScore, scoretext) {
    playerScore.score++;
    scoretext.textContent = playerScore.score;

    if (playerScore.score === gameLimit) {
        playerOneButton.setAttribute("disabled", true);
        playerTwoButton.setAttribute("disabled", true);
        scoretext.classList.add("winner");
    }
}