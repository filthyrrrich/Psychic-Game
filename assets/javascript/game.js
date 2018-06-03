var wins = 0;
var losses = 0;
var userguess = [];
var lives = 10;
var win_span = document.getElementById("winstotal");
var loss_span = document.getElementById("losstotal");
var guessLeft_span = document.getElementById("current-guesses");
var sofar_span = document.getElementById("past-guesses");

var letterArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
var mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];

function nextGame (){
    lives = 10;
    guessLeft_span.innerHTML = lives;
    userguess = [];
    mysteryLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
    console.log(mysteryLetter);
}

// allows user to press a letter to make a guess
document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();

    //alter user if they make an invalid guess
    if(!letterArray.includes(guess)) {
        alert("Invalid key pressed. You must choose a letter!");
        
    } else {
        userguess.push(" " + guess);
        
        if (guess === mysteryLetter) {
            win_span.innerHTML++;
            nextGame();
            
        } else if(lives <= 1) {
            alert("You lose. Better luck next time!");
            loss_span.innerHTML++;
            nextGame();

        } else {
            sofar_span.innerHTML = userguess;
            guessLeft_span.innerHTML--;
            lives--;
        }
        console.log(guess)
    }

}
console.log(mysteryLetter);



