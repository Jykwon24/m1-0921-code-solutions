/* exported takeRight */
function takeRight(array, count) {
  array = array.slice(-count);
  return array;
}

// function takeRight(array, count) {
//   var arr = array.reverse();
//   var result = [];
//   for (var i = 0; i < count; i++) {
//     result.push(arr[i]);
//   }
//   return result.reverse();
// }
