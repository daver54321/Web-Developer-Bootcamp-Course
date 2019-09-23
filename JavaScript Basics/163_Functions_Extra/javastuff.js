function printReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        console.log(array[index]);        
    }
}

printReverse([3,6,7,2,4]);

function isUniform (array) {
    var tester;
    for (let index = 0; index < array.length; index++) {
        tester = array[0];
        if (tester !== array[index]) {
            console.log("This array is not uniform.");
            break;
        } else if (index === array.length - 1) {
            console.log("This array is uniform.");
        }
    }
}

isUniform([4,4,4,5,4]);

function sumArray (array) {
    sum = 0;
    array.forEach(element => sum += element);
}

sumArray ([1,2,3,4,5,6]);

function max (array) {
    maximumElement = 0;
    array.forEach(element => {
        if (element > maximumElement)
            maximumElement = element;
    });
    console.log(maximumElement);
}

max([1,52,9,2,10,12]);