/* exported intersection */
function intersection(first, second) {
  var resultArr = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) {
      resultArr.push(first[i]);
    }
  }

  return resultArr;
}
