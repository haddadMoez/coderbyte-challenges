// Challenge:
// Questions Marks
// easy
// Have the function QuestionsMarks(str)take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well. 

// For example: if str is "arrb6???4xxbl5???eee5" then your program should return truebecause there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

// Examples
// Input: "aa6?9" 
// Output: false
// Input: "acc?7??sss?3rr1??????5" 
// Output: true

// Tags
// string manipulation searching hash table

// Proposed solution:
function QuestionsMarks(str) { 

  let onlyNumbersAndQuestionMarks = str.replace(/[a-zA-Z~!@#$%^&*()_|+\-=;:'",.<>\{\}\[\]\\\/]/gi,'');
  const arr = onlyNumbersAndQuestionMarks.split(/([0-9])/);
  const trimArr = arr.filter( item => item!=='')
  const regNumber = /[0-9]/
  let ok = false;

  for(let i=0; i<trimArr.length; i++) {
    if(regNumber.test(trimArr[i]) 
        && regNumber.test(trimArr[i+2])
        && i+1 < trimArr.length
      ) {
        if(parseInt(trimArr[i]) + parseInt(trimArr[i+2]) == 10)
        {
          ok = true;
          if(!trimArr[i+1].includes('?')) 
            return false;
          if(trimArr[i+1].split('').length !== 3)
            return false
        }
    }
  }
  return ok;

}
   
console.log(QuestionsMarks('acc?7??sss?3rr1??????5'));