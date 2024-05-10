let arr1 = [1, 2, 3, 4]; // arr1 input value given by user
let arr2 = [5, 6, 7];     // arr2 input value given by user

// Q1. Concatenate array1 and array2 to create a new array called concatenatedArray.
function concatArr(arr1, arr2) {
    return arr1.concat(arr2); // Return the concatenated array
}

let concatedArr = concatArr(arr1, arr2); // Function calling
console.log("Concatenated Array:", concatedArr);

// Q2. Extract a portion of concatenatedArray using the slice() method.
// The extracted portion should start from index 2 (inclusive) and end at index 5 (exclusive).
// Store the result in a new array called extractedArray.
function slicedArr(concatedArr) {
    // Check if concatedArr is defined before calling slice()
    if (concatedArr) {
        return concatedArr.slice(2, 6);
    } else {
        console.error("Error: The concatenated array is undefined.");
        return [];
    }
}

let extractedArray = slicedArr(concatedArr);
console.log("Extracted Array:", extractedArray);

//Q3.//Find the index of the number 7 in extractedArray using the indexOf() method. If 7 is not found, print "Number 7 not found."


function findIndex(extractedArray){
    if(extractedArray.indexOf(7)){
        return `Index of 7 in array is ${extractedArray.indexOf(7)}.`;
    }else{
        return `Number 7 is not found in array.`;
    }
}
let findedIndex = findIndex(extractedArray);
console.log(findedIndex);

//Q4.//Check if array1 includes the number 10 using the includes() method. If 10 is present, print "Number 10 is present in array1." Otherwise, print "Number 10 is not present in array1."

function includesInArray(arr1){
    if(arr1.includes(10)){
        return "Number 10 is present in array1.";
    }else{
        return "Number 10 is not present in array1.";
    }
}

let includeOrNot = includesInArray(arr1);
console.log(includeOrNot);

//Q5.//Create a string by joining all elements of extractedArray with a dash (-) separator using the join() method. Store the result in a variable called joinedString.

function joinStr(extractedArray){
    return extractedArray.join("-");
}

let joinedStr = joinStr(extractedArray);
console.log("Joined Array:",joinedStr);


//Q6.//Reverse extractedArray using the reverse() method.

function reverseArr(extractedArray){
    return extractedArray.reverse();
}

let reverseArray = reverseArr(extractedArray);
console.log("Reversed Array:",reverseArray);

//Q7.//Calculate the sum of all elements in array2.

function sumArr(arr2){
    return arr2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
let sumarray = sumArr(arr2);
console.log("Sum of array elements:", sumarray);

//Q8.//Sort array1 in ascending order using the sort() method.

function sortArr(arr1){
    return arr1.sort();
}
let sortedarray = sortArr(arr1);
console.log("Sorted array1:",sortedarray);

// console.log("Concatenated Array:", concatedArr);
// console.log("Extracted Array:", extractedArray);
// console.log(findedIndex);
// console.log(includeOrNot);
// console.log("Joined Array:",joinedStr);
// console.log("Reversed Array:",reverseArray);
// console.log("Sum of array elements:", sumarray);
// console.log("Sorted array1:",sortedarray);

