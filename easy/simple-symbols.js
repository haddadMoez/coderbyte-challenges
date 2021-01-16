// Challenge:
// Simple Symbols
// easy
// Have the function SimpleSymbols(str)take the str parameter being passed and determine
// if it is an acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and =symbols with several characters between them (ie. ++d+===+c++==a)
// and for the string to be true each letter must be surrounded by a + symbol.
// So the string to the left would be false. The string will not be empty and will have at least one letter. 

// Examples
// Input: "+d+=3=+s+" 
// Output: true
// Input: "f++d+" 
// Output: false

// Tags
// string manipulation regular expression

// Proposed solution:
function SimpleSymbols(str) {
    return /^([=+0-9]*\+[a-zA-Z](?=\+))+[=+0-9]*$/i.test(str)
}
     
console.log(SimpleSymbols('+d+=3=+s+'));