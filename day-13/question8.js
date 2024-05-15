// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8


// Using reduce

let strings = ["A", "Good", "Problem"];

let sumOfOddLengths = strings.reduce((sum, str) => {
    if (str.length % 2 !== 0) {
        return sum + str.length;
    }
    return sum;
}, 0);

console.log(sumOfOddLengths); // Output: 8




// Using filter and reduce:



let sumOfOddLengths1 = strings
    .filter(str => str.length % 2 !== 0)
    .reduce((sum, str) => sum + str.length, 0);

console.log(sumOfOddLengths1); // Output: 8



// Using forEach:

let sumOfOddLengths2 = 0;

strings.forEach(str => {
    if (str.length % 2 !== 0) {
        sumOfOddLengths2 += str.length;
    }
});

console.log(sumOfOddLengths2); // Output: 8