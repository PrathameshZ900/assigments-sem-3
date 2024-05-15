// Given an array of numbers print the product of all numbers

// Sample Input - [2,3,4] Sample Output - 24

// using simple fuction 
let arr = [2,3,4];

let product = arr. reduce(function(prod,ele){
    prod *= ele;
    return prod;
})

console.log(product);


// with arrow function 

let pro = arr.reduce((prod, ele) => {
    return prod *= ele;
}, 1);

console.log(pro);
