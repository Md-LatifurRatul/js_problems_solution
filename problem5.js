//5. Write a function to remove duplicate elements from an array.

function removeDuplicate(arr) {

    let resultArray = [];

    arr.forEach(element => {
        if (!resultArray.includes(element)) {
            resultArray.push(element);
        }
    });
    return resultArray;
}

let element = [2, 5, 2, 3, 5, 1];

let result = removeDuplicate(element);

for (let arr of result) {
    process.stdout.write(`${arr} `);
}
