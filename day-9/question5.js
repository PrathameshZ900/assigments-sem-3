function replace(string) {
    // Convert the character to lowercase and compare it with the original character
    let ans = "";
    for(let i = 0; i < string.length; i++){
        if(string[i]===" "){
            ans += "-";
        }else{
            ans += string[i];
        }
    }
    return ans;
    
}

function checkPrimeNumber(input) {
    let string = input.trim();
    
    console.log(replace(string))
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a String to replace space with '-'.", (input) => {
    checkPrimeNumber(input);
    readline.close();
});