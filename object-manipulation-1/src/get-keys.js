/* exported getKeys */
function getKeys(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(keys);
  }
  return arr;
}

//  define function named 'getValues' taking 1 parameter 'object'
//  define variable 'arr' assigning it an empty array
//  for in loops to access the keys of an object
//  push each key from the object to 'arr'
//  return 'arr'
