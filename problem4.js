//4. Write a function to calculate the factorial of a given number using recursion.

function calcFact(n) {

    if (n <= 0) return 1;
    else return n * calcFact(n - 1);

}
let num = 4;

let factorialNumber = calcFact(num);

console.log(`Factorial of ${num} is: ${factorialNumber}`);