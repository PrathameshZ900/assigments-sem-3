//Q1. // Employee Information: Define a function employeeInformation that takes an array of employee objects, 'employees', as a parameter. Extract the name and department of the second employee in the array and assign them to variables 'secondEmployeeName' and 'secondEmployeeDepartment'. Return an object with 'secondEmployeeName' and 'secondEmployeeDepartment'.
//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  
 function employeeInformation(employees){
    // Destructure the properties of the second employee object
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];

    // Create a new object with the extracted properties
    const secondEmployee = {
        secondEmployeeName,
        secondEmployeeDepartment
    };

    console.log(secondEmployee);
 }

  employeeInformation(employees); // Calling Function :Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }






// Q2. // Average Salary: Define a function averageSalary that takes an array of employee objects, 'employees', as a parameter. Calculate the average salary of all employees using destructuring and a for-of-loop. Return the average salary.
//Example Invocation:

const employees1 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
   
function averageSalary(employees1){
    // Destructure the salary property from each employee object and sum them using reduce
    const totalSalary = employees1.reduce((total, { salary }) => total + salary, 0);

    // Calculate the average salary
    const averageSalary = totalSalary / employees1.length;

    console.log(`Average Salary of an Employee is ${averageSalary} Rs`);

}

  averageSalary(employees1); // Function Calling: Output: 60000;


// Q3. // Third Employee Info: Define a function thirdEmployeeInfo that takes an array of employee objects, 'employees', as a parameter. Extract the name, age, and salary of the third employee and assign them to variables 'thirdEmployeeName', 'thirdEmployeeAge', and 'thirdEmployeeSalary'. Calculate a bonus of 10% on the salary. Return a string in the format "Employee: , Age: , Salary: , Bonus: ".
//Example Invocation:

const employees2 = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];
  

function thirdEmployeeInfo(employees2){
     // Destructure the properties of the third employee object
     const { name, age, salary } = employees2[2];
    
     // Calculate bonus (10% of salary)
     const bonus = salary / 10;
 
     console.log(`Employee: ${name}, Age: ${age}, Salary: ${salary}, Bonus: ${bonus}.`);
}


  thirdEmployeeInfo(employees2); // Function calling Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"  