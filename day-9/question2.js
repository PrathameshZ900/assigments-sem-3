// Problem 2: Use the above function to print the Primes from 2 to a given limit

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
        if(isPrime(i)){
            ans.push(i);
        }
    }
    return ans;
}

function checkPrimeNumber(input) {
    let number = parseInt(input);
    console.log(`This are Prime Numbers Form 0 to ${number} :`,PrimeNumbers(number));
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a number to check Prime from 0 to given Number: ", (input) => {
    checkPrimeNumber(input);
    readline.close();
});

