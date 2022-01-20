/* exported isPalindromic */
function isPalindromic(string) {
  var reg = /[\W]/g;

  var editString = string.replace(reg, '');
  var reverse = editString.split('').reverse().join('');

  if (reverse === editString) {
    return true;
  } else {
    return false;
  }

}

// #1
// Declare function isPalindromic, which takes one argument which is a string
// Turn string into an array and then reverse the order
// Turn the reversed array back into string and check if it matches the original
