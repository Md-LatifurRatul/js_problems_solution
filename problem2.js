//2. Write a function to implement a basic calculator that supports addition, subtraction, multiplication, and division.

function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2;

            break;
        case '-': result = num1 - num2;

            break;
        case '*': result = num1 * num2;

            break;
        case '/': if (num2 !== 0) {
            result = num1 / num2;

        }
        else {
            return "Error: cannot divide by zero";

        }
            break;
        default:
            return "Error: Invalid operator";


    }
    return result;


}

console.log(calculator(5, 2, "+"));
console.log(calculator(5, 3, "-"));
console.log(calculator(5, 2, "*"));
console.log(calculator(5, 2, "/"));