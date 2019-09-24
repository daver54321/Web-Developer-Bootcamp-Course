/* var answer = prompt("Give me a number plz")

alert("Is the number even? " + isEven(answer));
alert("The factorial of this number is " + Factorial(answer)); */

var kebabInput = prompt("Now give me a filename with kebab styling");

alert("If we change your filename to \"kebab\" styling, it is " + kebabToSnake(kebabInput));

function isEven(even) {
    var evenOrNot = (even % 2 === 0);
    return evenOrNot;
}

function Factorial(number) {
    var factorial = 1;
    while ( number > 0 ) {
        factorial = number * factorial;
        number--;
    }
    return factorial;
}

function kebabToSnake(input) {
    var newString = input.replace(/-/g , "_");
    return newString;
}