// AB Check
//easy
// Have the function ABCheck(str) take the str parameter being passed 
// and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.
// Examples

// Input: "after badly" 
// Output: false
// Input: "Laura sobs" 
// Output: true
// Tags

// string manipulationregular expression

// Proposed solution
function ABCheck(str) { 
    return /([a][a-z\s]{3}[b])|([b][a-z\s]{3}[a])/i.test(str);  
}
  
console.log(ABCheck('Laura sobs'));