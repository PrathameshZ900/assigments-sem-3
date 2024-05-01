function isLowerCase(char) {
    // Convert the character to lowercase and compare it with the original character
    return char === char.toLowerCase();
}

function checkPrimeNumber(input) {
    let character = input;
    if(isLowerCase(character)){
        console.log(`Given "${character}" Character is Lowercase character.`);
    }else{
        console.log(`Given "${character}" Character is Uppercase character.`);
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