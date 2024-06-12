//3. Write a function to merge two sorted arrays into a single sorted array.

function mergeToSortedArrays(arr1, arr2, n1, n2, arr3) {

    let i = 0, j = 0, k = 0;

    while (i < n1) {
        arr3[k++] = arr1[i++]
    }
    while (j < n2) {
        arr3[k++] = arr2[j++];
    }
    arr3.sort();


}

let arr1 = [2, 5, 1];
let arr2 = [3, 0, 4];
let n1 = arr1.length;
let n2 = arr2.length;
let arr3 = new Array(n1 + n2);

mergeToSortedArrays(arr1, arr2, n1, n2, arr3);

console.log("After merging the array is: ");

for (let arr of arr3) {
    process.stdout.write(`${arr} `);
}




