//Setup
var squareValues;
var squares = document.querySelectorAll(".square");
var winner;
var lowerLimitArray;
var upperLimitArray;

SetDifficulty("Easy");
var buttons = document.querySelectorAll(".difficulty");
buttons.forEach(element => {
    this.addEventListener("click", function () {
        SetDifficulty(this.textContent);
    })

});

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
        squareValues[index].Winner = false;
    }

    //Create "Winner" color and update corresponding squareValue
    winner = Math.floor(Math.random() * 6);
    squareValues[winner].Winner = true;

    //Manipulate DOM style.backgroundColor
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = squareValues[index].rgbText;
        squares[index].addEventListener("click", function() {
            ClickSquare(index);
        });
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
        // Uses 1, 2, or 4 sections of 0-255 colorspace, with an "lower" and
        // "upper" bound. Adds "change" to lower bound---or subtracts "change"
        // from upper bounds---to create RGB triplet that is easy, medium or hard
        var arraySection = Math.floor(Math.random() * lowerLimitArray.length);
        var change = Math.floor(Math.random() * 32);
        if ((Math.random() * 2) < 1) {
            //Starting from the "lower" end of a section of 0-255 colorspace
            finalAnswer[Object.keys(finalAnswer)[index]] = lowerLimitArray[arraySection] + change;
        } else {
            // Starting from the "upper" end of a section of 0-255 colorspace
            finalAnswer[Object.keys(finalAnswer)[index]] = upperLimitArray[arraySection] - change;
        }
    }
    return finalAnswer;
}

function ClickSquare(clickedSquare) {
    if(squareValues[clickedSquare].Winner === true) {
        //All the winning stuff here
        alert("This is the winner!");
    } else {
        alert("This isn't the winner.");
    }

}

function SetDifficulty(setting) {
    if (setting === "Easy") {
        lowerLimitArray = [0];
        upperLimitArray = [255];
        document.getElementById("easyButton").classList.add("active");
        document.getElementById("mediumButton").classList.remove("active");
        document.getElementById("hardButton").classList.remove("active");
    } else if (setting === "Medium") {
        lowerLimitArray = [0, 128];
        upperLimitArray = [127, 255];
        document.getElementById("easyButton").classList.remove("active");
        document.getElementById("mediumButton").classList.add("active");
        document.getElementById("hardButton").classList.remove("active");
    } else if (setting === "Hard") {
        lowerLimitArray = [0, 64, 128, 192];
        upperLimitArray = [63, 127, 191, 255];
        document.getElementById("easyButton").classList.remove("active");
        document.getElementById("mediumButton").classList.remove("active");
        document.getElementById("hardButton").classList.add("active");
    }
}