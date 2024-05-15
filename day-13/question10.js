// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]

let string = ["Masai", "School"];

let firstChar = string.map(function (ele) {
    return ele[0];
});

console.log(firstChar); // Output: ['M', 'S']
