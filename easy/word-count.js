// Word Count
// easy
// Have the function WordCount(str) take the str string parameter being passed 
// and return the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return 6).
// Words will be separated by single spaces. 

// Proposed solution
function WordCount(str) {
    return str.split(' ').length; 
}

console.log(WordCount('Never eat shredded wheat or cake'));