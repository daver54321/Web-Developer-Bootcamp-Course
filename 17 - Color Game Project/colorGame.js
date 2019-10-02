//Setup
var squareValues;
var squares = document.querySelectorAll(".square");
var winner;
var lowerLimitArray;
var upperLimitArray;

SetDifficulty("Easy");

var buttons = document.querySelectorAll(".difficulty");
buttons.forEach(element => {
    element.addEventListener("click", function () {
        SetDifficulty(element.textContent);
    })

});

for (let index = 0; index < squares.length; index++) {
    squares[index].addEventListener("click", function () {
        ClickSquare(index);
    });
}

Reset();

function Reset() {
    //Populate array containing square values
    squareValues = new Array();
    for (let index = 0; index < 6; index++) {
        const color = RandomColor(index);
        squareValues[index] = new Object();
        squareValues[index].RangeArray = color.RangeArray;
        squareValues[index].ValueArray = color.ValueArray;
        squareValues[index].rgbText = "rgb(" + squareValues[index].ValueArray.R + ", " + squareValues[index].ValueArray.G + ", " + squareValues[index].ValueArray.B + ")";
        squareValues[index].Winner = false;
    }

    // Create "Winner" color and update corresponding squareValue
    winner = Math.floor(Math.random() * 6);
    squareValues[winner].Winner = true;

    // Manipulate DOM style.backgroundColor
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = squareValues[index].rgbText;
        squares[index].style.opacity = 1.0;
    }


    // Initialize some cosmetic stuff
    document.querySelector(".header").style.backgroundColor = "#4875c9";
    document.querySelector(".title-container").style.color = "white";
    document.getElementById("rgbTitle").textContent = squareValues[winner].rgbText;
    document.getElementById("guideText").textContent = "Click on the color that matches the RGB triplet above."

}

function RandomColor(index) {

    var finalAnswer = {
        RangeArray: {
            R: ['', ''],
            B: ['', ''],
            G: ['', '']
        },
        ValueArray: {
            R: 0,
            G: 0,
            B: 0,
        }
    };

    // Create RangeArray, confirming that it isn't the same as an existing color square's array
    finalAnswer.RangeArray = CreateRangeArray(index);

    // Now populate ValueArray with more randomized numbers based on RangeArray
    for (const key in finalAnswer.RangeArray) {
        if (finalAnswer.RangeArray.hasOwnProperty(key)) {
            const color = finalAnswer.RangeArray[key];
            var change = Math.floor(Math.random() * 32);
            var section = color[0];
            var range = color[1];

            if (range === "lower") {
                //Starting from the "lower" end of a section of colorspace...
                finalAnswer.ValueArray[key] = lowerLimitArray[section] + change;
            } else {
                // ...or starting from the "upper" end of a section of colorspace section
                finalAnswer.ValueArray[key] = upperLimitArray[section] - change;
            }
        }
    }

    return finalAnswer;
}

function CreateRangeArray(index) {
    var arrayObject = {
        R: ['', ''],
        B: ['', ''],
        G: ['', '']
    }

    for (const key in arrayObject) {
        if (arrayObject.hasOwnProperty(key)) {
            const color = arrayObject[key];

            // Uses 1, 2, or 4 sections of 0-255 colorspace, with an "lower" and
            // "upper" bound. Adds "change" to lower bound---or subtracts "change"
            // from upper bounds---to create RGB triplet that is easy, medium or hard
            var arraySection = Math.floor(Math.random() * lowerLimitArray.length);
            var range;
            if ((Math.random() * 2) < 1) {
                range = "lower";
            } else {
                range = "upper";
            }
            color[0] = arraySection;
            color[1] = range;
        }
    }

    for (let k = 0; k < index; k++) {
        if (_.isEqual(squareValues[k].RangeArray, arrayObject)) {
            arrayObject = CreateRangeArray(index);
        }
    }

    return arrayObject;
}

function ClickSquare(clickedSquare) {
    if (squareValues[clickedSquare].Winner === true) {
        isWinner(clickedSquare);
        for (let index = 0; index < squareValues.length; index++) {
            if (!squareValues[index].Winner) {
                notWinner(index);
            }
        }
    } else {
        notWinner(clickedSquare);
        document.getElementById("guideText").textContent = "Nope. Not that one...";
    }
}

function isWinner(index) {
    document.querySelector(".header").style.backgroundColor = squareValues[index].rgbText;
    if (Math.min(squareValues[index].ValueArray.R, squareValues[index].ValueArray.G, squareValues[index].ValueArray.B) > 120) {
        document.querySelector(".title-container").style.color = "black";
    }
    
    document.getElementById("guideText").textContent = "Hey! You got it!";

    document.getElementById("easyButton").classList.remove("active");
    document.getElementById("mediumButton").classList.remove("active");
    document.getElementById("hardButton").classList.remove("active");
}

function notWinner(index) {
    squares[index].style.opacity = 0;
    // squares[index].style.border = "0px solid white";
}

function SetDifficulty(setting) {
    if (setting === "Easy") {
        lowerLimitArray = [0];
        upperLimitArray = [255];
        document.getElementById("easyButton").classList.add("active");
        document.getElementById("mediumButton").classList.remove("active");
        document.getElementById("hardButton").classList.remove("active");
        Reset();
    } else if (setting === "Medium") {
        lowerLimitArray = [0, 128];
        upperLimitArray = [127, 255];
        document.getElementById("easyButton").classList.remove("active");
        document.getElementById("mediumButton").classList.add("active");
        document.getElementById("hardButton").classList.remove("active");
        Reset();
    } else if (setting === "Hard") {
        lowerLimitArray = [0, 64, 128, 192];
        upperLimitArray = [63, 127, 191, 255];
        document.getElementById("easyButton").classList.remove("active");
        document.getElementById("mediumButton").classList.remove("active");
        document.getElementById("hardButton").classList.add("active");
        Reset();
    }
}