//Q4.// Given an array of numbers extract the numbers which are odd

// Sample Input - [1,2,3] Sample Output - [1,3]


// Using simple function 

let arr = [1,2,3];

let oddArr = arr.filter( function (ele){
    if(ele%2==1){
        return true;
    }
})

console.log(oddArr);

// Using Arrow Function.

let oddAr = arr.filter( (ele)=>{
    if(ele%2==1){
        return true;
    }
})

console.log(oddAr);