// Problem:
// Finding Palindromes

// This problem involves finding all palindromes from a given list of strings.


// Topics:
// Functions, String Manipulation, Arrays

// Problem Statement:
// You are given a list of strings stored in an array called stringList. Your task is to find and print all palindromes from this list.

function findPalindrome(stringList,n){
  
    for(let i of stringList){         // this loop for checking all strings in arr.
        let revrse = "";
        for(let j = i.length-1; j >= 0; j--){   //this loop for creating a reverse verson of given string.
            revrse += i[j];
        }
        if(revrse === i){        // here we checking a our reverse str and given string are same or not.
            console.log(i);
        }
    }
}



arr=["radar", "hello", "madam", "world", "level"]


findPalindrome(arr,arr.length); // calling function with given input.