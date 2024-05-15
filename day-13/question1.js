//1.Q// Given an array of numbers find the sum of 
// cubes if the number is divisible by 3 
// Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)

let arr = [1, 2, 3, 4, 5, 6];

let cubeSub = arr.reduce(function (acc, ele) {
    if (ele % 3 === 0) {
        acc += ele ** 3;
    }
    return acc;
}, 0);

console.log(cubeSub);