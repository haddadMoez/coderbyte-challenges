// Challenge:
// Simple Adding
// easy
// Have the function SimpleAdding(num) add up all the numbers from 1 to num.
// For example: if the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10.
// For the test cases, the parameter num will be any number from 1 to 1000.

// Proposed solution:
function SimpleAdding(num) { 
    return num == 1 ? 1 : num + SimpleAdding(num - 1) 
}
     
console.log(SimpleAdding(4));