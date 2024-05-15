//Q2.// Given an array of numbers find the sum of odd elements
//  Sample Input - [1, 2, 3, 4] Sample Output - 4


// using reduce method 

let arr = [1,2,3,4,5,7,9];

let sum = arr.reduce(function (oddsm,ele){
    if( ele % 2 == 1 ){
        oddsm += ele;
    }
    return oddsm;
})
console.log(sum);// here we are geting your ans //

// using filter and reduce method

// let arr = [1, 2, 3, 4, 5, 7, 9];

let sumOfOddElements = arr.filter(ele => ele % 2 === 1).reduce((sum, ele) => sum + ele, 0);

console.log(sumOfOddElements);
