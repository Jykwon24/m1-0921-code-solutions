/* exported reverseWords */
function reverseWords(string) {
  var reverseArr = [];
  var newString = string.split(' ');
  for (var i = 0; i < newString.length; i++) {
    reverseArr.push(newString[i].split('').reverse().join(''));
  }
  return reverseArr.join(' ');
}
