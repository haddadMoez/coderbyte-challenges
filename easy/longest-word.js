// Challenge:
// Longest Word
// easy
// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// Examples
// Input: "fun&!! time" 
// Output: time
// Input: "I love dogs" 
// Output: love

// Tags
// string manipulation searching

// Proposed solution
function LongestWord(sen) { 
  const newSen = sen.replace(/[.!?&\/:-]/gi, '');
  let longest = '';
  newSen.split(' ').forEach(item => 
  {
    if(item.length > longest.length) longest = item;
  }) 
  return longest; 

}
   
console.log(LongestWord('fun&!! time'));