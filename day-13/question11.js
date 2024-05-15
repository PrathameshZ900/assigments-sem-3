// Given an array of strings print the length of each string

// example : ["apple", "windows", "ubuntu"]


let string =  ["apple", "windows", "ubuntu"];

// using foreach

let lengths = string.forEach((ele,ind)=>{
    console.log(ele.length);
})


// using reduce 

let lengths1 = string.reduce(function (acc, ele) {
    console.log(ele.length);

}, undefined); // Initial value of the accumulator is `undefined`


