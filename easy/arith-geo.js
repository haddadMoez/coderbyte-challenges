// Arith Geo

// Have the function ArithGeo(arr) take the array of numbers stored 
// in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
// or return "Geometric" if it follows a geometric pattern. 
// If the sequence doesn't follow either pattern return -1. 
// An arithmetic sequence is one where the difference between each of the numbers is consistent,
// where as in a geometric sequence, each term after the first is multiplied by some constant 
// or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. 
// Negative numbers may be entered as parameters, 0 will not be entered, and no array will 
// contain all the same elements.

// Examples
// Input: [5,10,15] 
// Output: Arithmetic
// Input: [2,4,16,24] 
// Output: -1

// Tags
// arraymath fundamentals sequences

// Proposed solution
function ArithGeo(arr) { 


    arithmeticRatio =arr[1] - arr[0];
    geometricRatio = arr[1] / arr[0];
  
    let arithmetic = true;
    let geometric = true;
    let i = 0;
  
    while(i+1 <arr.length) {
      if(arr[i+1] - arr[i] != arithmeticRatio) arithmetic = false;
      if((arr[i+1] / arr[i] )!= geometricRatio) geometric = false;
      i++
    }
  
    
    if(arithmetic) return 'Arithmetic';
    if(geometric) return 'Geometric';
    return -1; 
  
}
     
console.log(ArithGeo([2,6,18,54]));