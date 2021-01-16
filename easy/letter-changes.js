// Challenge
// Letter Changes

// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm.
// Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

// Examples

// Input: "hello*3" 
// Output: Ifmmp*3
// Input: "fun times!" 
// Output: gvO Ujnft!

// Tags
// string manipulation

// Proposed solution:
function LetterChanges(str) { 
    const regChar = /[a-z]/i;
    const regVowels = /[aeiou]/gi;
  
    return str
    .split('')
    .map((char, i) => {
      if(regChar.test(char)){
        if(str.charCodeAt(i) == 122) char = String.fromCharCode(97)
        else if(str.charCodeAt(i) == 90) char = String.fromCharCode(65)
        else char = String.fromCharCode(str.charCodeAt(i) + 1);
      }
      return char;
    })
    .join('')
    .replace(regVowels, (match) => match.toUpperCase());
}

console.log(LetterChanges('fun times!'));