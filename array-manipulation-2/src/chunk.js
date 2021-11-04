/* exported chunk */
function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var arr1 = array.slice(i, i + size);
    arr.push(arr1);
  }
  return arr;
}
