// Concatenate array1 and array2 to create a new array called concatenatedArray.

function concatArr(arr1,arr2){
    console.log(...arr1,...arr2); // here we merge two arr using spreade operator.
    console.log(arr1.concat(arr2)); // here we concat two arr using inbuilt cancat method of array.
}

let arr1 = [1,2,3,4];
let arr2 = [5,6,7];

concatArr(arr1,arr2); // function calling;