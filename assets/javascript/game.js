var wins = 0;
var losses = 0;
var userGuess = [];
var lives = 9;
var win_span = document.getElementById("winstotal");
var loss_span = document.getElementById("losstotal");
var guessLeft_span = document.getElementById("current-guesses");
var sofar_span = document.getElementById("past-guesses");

var letterArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];

// resets the game while keeping track of wins/losses
function nextGame (){
    lives = 9;
    guessLeft_span.innerHTML = lives;
    sofar_span.innerHTML = "";
    userGuess.length = 0;
    mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    console.log(mysteryLetter);
}

// allows user to press a letter to make a guess
document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    var alreadyUsedGuess = userGuess.includes(" " + guess);
    
    //alert user on repeat guesses
    if (alreadyUsedGuess == true) {
        alert("You already guessed that letter... you might want to try a different one!");

    //alert user if they make an invalid guess
    } else if (!letterArray.includes(guess)) {
        alert("Invalid key pressed. You must choose a letter!");

    // creates spacing between letters and commas
    } else { 
        userGuess.push(" " + guess);

        // win condition
        if (guess === mysteryLetter) {
            win_span.innerHTML++;
            nextGame();

        // lose condition      
        } else if(lives <= 1) {
            alert("You lose. Better luck next time!");
            loss_span.innerHTML++;
            nextGame();

        // tracks guesses/guesses left and decrements
        } else {
            sofar_span.innerHTML = userGuess;
            guessLeft_span.innerHTML--;
            lives--;
        }
        console.log(guess)
    }

}
console.log(mysteryLetter);



