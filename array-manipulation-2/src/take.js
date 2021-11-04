/* exported take */
function take(array, count) {
  var arr = [];
  var empty = [];
  for (var i = 0; i < count; i++) {
    arr.push(array[i]);
    if (array[i] === undefined) {
      return empty;
    }
  }
  return arr;
}
