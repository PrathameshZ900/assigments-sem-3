// Given an array of numbers print the square of those numbers

let arr = [1, 2, 3, 4];

// using reduce 
let squared = arr.reduce((acc, ele) => {
    console.log(ele ** 2);
}, []);


// using map
let squared1 = arr.map(ele => ele ** 2);
console.log(squared1);