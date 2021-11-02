/* exported getWords */
function getWords(string) {
  var arr = [];
  var arr2 = [];
  var str = string.split(' ');
  var emp = '';
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i]);
    if (str[i] === emp) {
      return arr2;
    }
  }
  return arr;
}
