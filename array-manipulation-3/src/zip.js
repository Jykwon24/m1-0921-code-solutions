/* exported zip */
function zip(first, second) {
  if (first.length > second.length) {
    first.pop();
  } else if (second.length > first.length) {
    second.pop();
  }
  var newArr = first.map((a, b) => [a, second[b]]);
  return newArr;

}
