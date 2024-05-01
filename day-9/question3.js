// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

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


function PrimeNumbers(number) {
    let ans = [];
    for(let i = 0; i <= number; i++){
        if(isPrime(i) !== true){
            ans.push(i);
        }
    }
    return ans;
}

function checkPrimeNumber(input) {
    let number = parseInt(input);
    console.log(`This are Non-Prime Numbers Form 0 to ${number} :`,PrimeNumbers(number));
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to check Non-Prime from 0 to given Number: ", (input) => {
    checkPrimeNumber(input);
    readline.close();
});

