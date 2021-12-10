/* exported invert */

function invert(source) {
  var obj = {};
  var objSolution = {};
  Object.assign(obj, source);
  for (var key in obj) {
    var newKey = obj[key];
    objSolution[newKey] = key;
  }
  return objSolution;
}
