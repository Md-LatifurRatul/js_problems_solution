//7. Write a function to generate all prime numbers up to a given number.

function isPrime(n) {


    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true;


}


function generatePrime(number) {
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            process.stdout.write(`${i} `);
        }

    }

}

let number = 20;
console.log(`Prime numbers up to ${number} is:`);
generatePrime(20);
