//Setup
var squareValues;
var squares = document.querySelectorAll(".square");
var winner;

// for (let j = 0; j < squares.length; j++) {
//     squares[j].addEventListener("mouseover", function() {
//         this.style.border = "2px solid white";
//     });
//     squares[j].addEventListener("mouseleave", function() {
//         this.style.border = "2px solid white";
//     });
    

Reset();



function Reset() {
    //Populate array containing square values
    squareValues = new Array();
    for (let index = 0; index < 6; index++) {
        const color = RandomColor();
        squareValues[index] = new Object();
        squareValues[index].R = color.R;
        squareValues[index].G = color.G;
        squareValues[index].B = color.B;
        squareValues[index].rgbText = "rgb(" + squareValues[index].R + ", " + squareValues[index].G + ", " + squareValues[index].B + ")";
        squareValues[index].winner = false;
    }

    //Create "Winner" color and update corresponding squareValue
    winner = Math.floor(Math.random() * 5);
    squareValues[winner].Winner = true;

    //Manipulate DOM style.backgroundColor
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = squareValues[index].rgbText;
    }

    document.getElementById("rgbTitle").textContent = squareValues[winner].rgbText;

}

function RandomColor() {
    var finalAnswer = {
        R: 0,
        G: 0,
        B: 0,
    };
    for (let index = 0; index < 3; index++) {
        finalAnswer[Object.keys(finalAnswer)[index]] = Math.floor(255 * Math.random());
    }
    return finalAnswer;
}