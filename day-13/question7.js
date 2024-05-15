// Given an array of numbers, return the elements that have even index (starting the count at 0) and are even
// Use Higher-order functions
// Sample Input - [2, 4, 5, 3, 6, 8]
// Sample Output - [2, 6]

let arr = [2, 4, 5, 3, 6, 8];

//using filter

let even = arr.filter(function (ele,ind){
    if(ele%2 == 0 && ind%2 == 0){
        return ele;
    }
})
console.log(even);


// using map 

let even1 = arr.map((ele,ind)=>{
    if(ele%2 === 0 && ind%2 === 0){
        return ele;
    }
}).filter(Boolean);

console.log(even1);


//using reduce
let even2 = arr.reduce((acc, ele, ind) => {
    if (ele % 2 === 0 && ind % 2 === 0) {
        acc.push(ele);
    }
    return acc;
}, []);

console.log(even2);