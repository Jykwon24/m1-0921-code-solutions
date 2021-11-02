/* exported capitalize */
function capitalize(word) {
  var cap = word[0].toUpperCase();
  var str = word.split('');
  var low = str.slice(1).join('');
  cap += low.toLowerCase();
  return cap;
}

// Pseudo Code
// define function named capitalize which takes single parameter 'word'
// target the first letter of the 'word' and uppercase it and assign to variable 'cap'
// define variable 'str' and assign it to the value of the 'word' which we turned into an array
// delete the first letter of the now array 'word' and convert into string, assign to variable 'low'
// turn the variable 'low' to lowercase and add it to the variable 'cap'
// return 'cap'
