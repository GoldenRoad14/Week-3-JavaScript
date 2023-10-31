//W/L/D totals
var wins = 0;
var losses = 0;
var ties = 0;


//Array of options for computer
var options = ["R", "P", "S"];

//game functions & user input
var playGame = function() {
    var userChoice = window.prompt("Enter R, P or S:");

    if (!userChoice){
        return;
    }
userChoice = userChoice.toUpperCase();

//get random number for computer
var index = Math.floor(Math.random()*options.length);
var computerChoice = options[index];

window.alert("The computer chose " + computerChoice);

//arguments to see who wins - victory conditions
if (userChoice === computerChoice){
    ties++;
    window.alert("It's a tie!");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
){
    wins++
    window.alert("You win!");
} else {
    losses++;
    window.alert("LOSER!");
}


//print w/l stats
window.alert(
    "Stats: \nWins: " + wins + "\nLoses: " + losses + "\nTies: " + ties);

//play again
var playAgain = window.confirm("Play again?");

if (playAgain){
    playGame();
}
}
//run game
playGame();