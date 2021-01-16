// Challenge:
// Letter Capitalize

// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.
// Words will be separated by only one space.

// Examples

// Input: "hello world" 
// Output: Hello World
// Input: "i ran there" 
// Output: I Ran There


// Tags
// string manipulation

// Proposed solution:

function LetterCapitalize(str) { 
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
     
console.log(LetterCapitalize('i ran there'));