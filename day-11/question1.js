// Q1.// Combining Arrays: Define a function combiningArrays that takes two arrays, 'fruits' and 'vegetables', as parameters. Create a new array 'groceries' by combining both arrays using the spread operator. Return the 'groceries' array.
const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
// console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]


function combiningArrays(fruits, vegetables){

    let groceries = [...fruits,...vegetables];
    console.log(groceries);

}
combiningArrays(fruits, vegetables); // calling functions for combining two arrays to make new grceries array;






// Q2.// Cloning Objects: Define a function cloningObjects that takes an object 'person' with properties 'name', 'age', and 'address' as a parameter. Create a new object 'personCopy' by cloning the 'person' object using the spread operator. Return the 'personCopy' object.
//Example Invocation:



const person = { name: "John", age: 30, address: "123 Main St" };

function cloningObjects(person){
    let copyPerson = {...person};
    console.log(copyPerson);
}

cloningObjects(person); //calling function for : Output: { name: "John", age: 30, address: "123 Main St" }






// Q3.// Merging Objects: Define a function mergingObjects that takes two objects, 'student' and 'course', as parameters. Create a new object 'studentWithCourse' by merging the properties of both objects using the spread operator. Return the 'studentWithCourse' object.
// //Example Invocation:

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };

function mergingObjects(student, course){
    let studentWithCours = {...student,...course};

    console.log(studentWithCours);
}

mergingObjects(student, course); // calling function: Output: { name: 'Alice', age: 20, courseName: 'Math', teacher: 'Mr. Smith' }






// Q4. //Combining Nested Arrays: Define a function combiningNestedArrays that takes two arrays, 'array1' and 'array2', as parameters. Create a new array 'combinedArray' by combining the nested arrays from 'array1' and 'array2' using the spread operator. Return the 'combinedArray' array.
//Example Invocation:

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];

function combiningNestedArrays(array1, array2){
    let combiningArrays = [...array1,...array2];

    console.log(combiningArrays);
}

  combiningNestedArrays(array1, array2); //function calling:  Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [ 11, 12 ] ]