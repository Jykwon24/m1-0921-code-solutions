/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var reg = /[\W]/g;
  var newFirst = firstString.replace(reg, '').split('').sort().join('');
  var newSecond = secondString.replace(reg, '').split('').sort().join('');
  if (newFirst === newSecond) {
    return true;
  } else {
    return false;
  }
}

// Declare function isAnagram, passing in 2 arguments both being strings
// Declare a regular expression that targets all non alphanumeric characters
// turn first string and second string argument into an array, sort it alphabetically
// replace all non alpha chars with empty space and turn it back into a string
// Use if statement to check if first string is strictly equal to second string
// return true if equal, return false if not.
