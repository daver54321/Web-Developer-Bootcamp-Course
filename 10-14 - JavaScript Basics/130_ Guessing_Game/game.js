var answer = 7;
var guess = prompt("Give a guess, let's see if you're correct.");
var keepGoing = true;

while (keepGoing) {
    if (guess == answer) {
        keepGoing = false;
        alert("Hey!  You WON!");
    }
    else if (guess < answer) {
        guess = prompt("You're too low.  Guess again.");
    }
    else {
        guess = prompt("You're too high.  Guess again.");
    }
}
