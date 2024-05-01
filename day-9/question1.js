function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    
    return true;
}

function checkPrimeNumber(input) {
    let number = parseInt(input);
    
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (isPrime(number)) {
            console.log(`${number} is a prime number.`);
        } else {
            console.log(`${number} is not a prime number.`);
        }
    }
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to check if it's prime: ", (input) => {
    checkPrimeNumber(input);
    readline.close();
});

