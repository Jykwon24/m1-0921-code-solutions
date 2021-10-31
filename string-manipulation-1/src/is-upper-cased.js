/* exported isUpperCased */
function isUpperCased(word) {
  var arr = word.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

// Pseudo Code
// define a function named isUpperCased which will take a single parameter 'word'
// turn the string argument from 'word' to an array and assign it to the variable 'arr'
// define a for loop that loops through the length of the 'arr'
// define an if statement within the for loop checking each index if it is strictly equal to a lowercase
// return a value of false if above condition is true
// return true after the loop is run
