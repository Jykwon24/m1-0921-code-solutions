/* exported isLowerCased */
function isLowerCased(word) {
  var arr = word.split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase() && arr[i] !== '-') {
      return false;
    }
  }
  return true;
}
