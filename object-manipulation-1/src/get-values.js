/* exported getValues */
function getValues(object) {
  var arr = [];
  for (var key in object) {
    arr.push(object[key]);
  }
  return arr;
}

//  define function named 'getValues' taking 1 parameter 'object'
//  define variable 'arr' assigning it an empty array
//  for in loops to access the keys of an object
//  push each value from the object with bracket notation at each key
//  return 'arr'
