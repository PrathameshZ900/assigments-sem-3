// Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]


// using normal Function 


let arr = [1,2,3];

let double = arr.map(function (ele){
    return ele*2;
})
console.log(double);

let double1 = arr.map((ele) => {
    return ele*2;
})
console.log(double1);