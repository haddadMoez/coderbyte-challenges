// Vowel Count

// Have the function VowelCount(str) take the str string parameter being passed 
// and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8).
// Do not count y as a vowel for this challenge.
// Examples

// Input: "hello" 
// Output: 2
// Input: "coderbyte" 
// Output: 3
// Tags

// string manipulationsearchingregular expression

// Proposed solution
function VowelCount(str) {  
    return !str.match(/[a,e,i,o,u]/gi) ? 0 : str.match(/[a,e,i,o,u]/gi).length; 
}

console.log(VowelCount('coderbyte'));