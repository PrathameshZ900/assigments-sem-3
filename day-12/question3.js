// Problem:
// Array Operations - Advanced

var numbers = [3, 8, 5, 12, 7, 14, 11];

// Q1. Calculate the sum of all odd numbers in the array
function oddSum(numbers) {
    return numbers.reduce((sum, current) => {
        if (current % 2 === 1) {
            return sum + current;
        }
        return sum;
    }, 0);
}
console.log("Sum of odd numbers in array:", oddSum(numbers));

// Q2. Check if the array contains any prime numbers
function containsPrime(numbers) {
    for (let ele of numbers) {
        let cn = 0;
        for (let i = 2; i < ele; i++) {
            if (ele % i == 0) {
                cn += 1;
            }
        }
        if (cn == 0) {
            return true; // Return true if a prime number is found
        }
    }
    return false; // Return false if no prime number is found
}
console.log("Array contains prime numbers:", containsPrime(numbers));

// Q3. Create a new array containing only the prime numbers from the original array
function primeArr(numbers) {
    let prime = [];
    for (let ele of numbers) {
        let cn = 0;
        for (let i = 2; i < ele; i++) {
            if (ele % i == 0) {
                cn += 1;
            }
        }
        if (cn == 0) {
            prime.push(ele);
        }
    }
    return prime;
}
console.log("Prime numbers:", primeArr(numbers));

// Q4. Calculate the average of all numbers in the array
function average(numbers) {
    let sum = numbers.reduce((ele, sm) => ele + sm, 0);
    return Math.floor(sum / numbers.length);
}
console.log("Average of array elements:", average(numbers));

// Q5. Find the maximum and minimum numbers in the array
function minMax(numbers) {
    return `Maximum number in array is ${Math.max(...numbers)} and Minimum number in array is ${Math.min(...numbers)}`;
}
console.log(minMax(numbers));

// Q6. Sort the array in ascending order
function sorted(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
console.log("Sorted array:", sorted(numbers));

// Q7. Reverse the sorted array
function reversed(numbers) {
    return numbers.slice().reverse();
}
console.log("Reversed sorted array:", reversed(sorted(numbers)));