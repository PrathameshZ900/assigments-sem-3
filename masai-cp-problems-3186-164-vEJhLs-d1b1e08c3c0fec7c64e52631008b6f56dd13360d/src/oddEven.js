let number = document.getElementById("number");
let btn = document.getElementById("generate-number");
let oddEven = document.getElementById("odd-even");

function generateNumber() {
  // Generate a random integer between 1 and 100
  let num = Math.floor(Math.random() * 100) + 1;
  // Update the text content of the HTML element with the ID "number"
  number.innerText = num;
}


function checkOddEven(num) {
  // Convert the input to a numeric value
  num = +num;

  // Check if the number is even or odd
  if (num % 2 === 0) {
    return "The number is even";
  } else {
    return "The number is odd";
  }
}


window.onload = function () {
  // Add event listener to the button
  btn.addEventListener("click", () => {
    // Generate a random number and update the displayed number
    generateNumber();
    
    // Get the generated number and check if it's odd or even
    let generatedNumber = +(number.innerText); // Convert the text content to a number
    let result = checkOddEven(generatedNumber);

    // Update the text content of the HTML element with the ID "odd-even"
    oddEven.innerText = result;
  });
};


// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
