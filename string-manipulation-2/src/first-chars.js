/* exported firstChars */
function firstChars(length, string) {
  var arr = [];
  var str = string.split('');
  for (var i = 0; i < length; i++) {
    arr.push(str[i]);
  }
  var result = arr.join('');
  return result;
}
