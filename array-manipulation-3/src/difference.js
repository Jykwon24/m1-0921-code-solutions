/* exported difference */
function difference(first, second) {
  var resultArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      resultArr.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.indexOf(second[j]) === -1) {
      resultArr.push(second[j]);
    }
  }
  return resultArr;
}
