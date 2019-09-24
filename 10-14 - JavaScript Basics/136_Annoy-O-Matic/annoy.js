var answer = "no";

while ((answer.indexOf("yeah") === -1) && (answer.indexOf("yes") === -1)) {
    answer = prompt("Are we there yet?")
}
alert("Yay! We must have made it, otherwise the loop wouldn't have quit!");