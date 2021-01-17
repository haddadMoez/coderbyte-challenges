// Ex Oh

// Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's,
// otherwise return the string false. Only these two letters will be entered in the string, 
// no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

// Examples
// Input: "xooxxo" 
// Output: true
// Input: "x" 
// Output: false

// Tags
// string manipulation searching

//Proposed solution
function ExOh(str) {
    return  (!str.match(/o/gi) || !str.match(/x/gi)) ? false : str.match(/o/gi).length == str.match(/x/gi).length; 
}

console.log(ExOh('xooxxo'));