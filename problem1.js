//1. Write a function to find the average of all elements in an array.

function findAverageArray(array) {

    let sum = 0;
    let average = 0;
    for (let arr of array) {
        sum += arr;
    }

    average = (sum / (array.length));

    console.log(`Sum of all array is: ${average.toFixed(2)}`);

}

let arr = [2, 3, 5];

findAverageArray(arr);