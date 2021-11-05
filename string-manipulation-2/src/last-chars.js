/* exported lastChars */
function lastChars(length, string) {
  var arr = [];
  var str = string.split('').reverse();
  for (var i = 0; i < length; i++) {
    arr.push(str[i]);
  }
  var result = arr.reverse().join('');
  return result;
}
