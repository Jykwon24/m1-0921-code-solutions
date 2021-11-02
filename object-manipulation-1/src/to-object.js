/* exported toObject */
function toObject(keyValuePair) {
  var obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

//  Pseudo Code
//  define function named 'toObject' which takes single array parameter 'keyValuePair'
//  define variable 'obj' assign it empty object value
//  using bracket notation we add the value of index 0 to 'obj' and assign it the value of index 2
//  return 'obj
