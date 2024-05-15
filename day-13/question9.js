// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let string = ["assignment", "problem", "media", "upload"];


// using map simple


let aLastOrFirst = string.map(function (ele, ind) {
    if (ele[0] === "a" || ele[ele.length - 1] === "a") {
        return ele;
    }
}).filter(Boolean); // Filter out undefined values

console.log(aLastOrFirst);

// using map with ternary operaters


// let string = ["assignment", "problem", "media", "upload"];

let aLastOrFirst1 = string.map((ele, ind) => (ele[0] === "a" || ele[ele.length - 1] === "a") ? ele : undefined)
                        .filter(Boolean); // Filter out undefined values

console.log(aLastOrFirst1);


// using filter  

let aLastOrFirst2 = string.filter(function (ele){
    if (ele[0] === "a" || ele[ele.length - 1] === "a") {
        return ele;
    }
})

console.log(aLastOrFirst2)