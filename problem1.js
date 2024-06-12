//1. Write a function to find the average of all elements in an array.

function findAverageArray(array) {

    let sum = 0;
    for (let arr of array) {
        sum += arr;
    }
    console.log(`Sum of all array is: ${sum}`);

}

let arr = [2, 3, 4];

findAverageArray(arr);