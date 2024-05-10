// Function to find the employee with the highest salary
function highestPaid(employees) {
    let highestSalary = 0;
    let highestPaidEmployee = null;
    
    for (const employee of employees) {
        if (employee.salary > highestSalary) {
            highestSalary = employee.salary;
            highestPaidEmployee = employee;
        }
    }
    
    return highestPaidEmployee;
}

// Function to swap the values of the first and last employees
function destructuringToSwap(employees) {
    if (employees.length >= 2) {
        [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];
    }
    return employees;
}

// Example data
const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

// Example invocations
console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }
console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
