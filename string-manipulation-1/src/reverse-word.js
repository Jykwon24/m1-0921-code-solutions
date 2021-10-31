/* exported reverseWord */
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

// Pseuedo Code
// define function named 'reversWord' with single parameter 'word'
// create new variable called 'newWord' and assign it empty string
// for loop iterating through 'word' argument starting from the last letter
// loop through starting from last letter and adding ito the 'newWord' string
// return 'newWord' variable
