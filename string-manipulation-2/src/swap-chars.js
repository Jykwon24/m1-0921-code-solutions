/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var str = string.split('');
  [str[firstIndex], str[secondIndex]] = [str[secondIndex], str[firstIndex]];
  return str.join('');
}
