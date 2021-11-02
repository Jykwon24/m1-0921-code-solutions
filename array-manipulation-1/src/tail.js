/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}

//  Pseudo Code
//  define function 'tail' which takes single parameter 'array'
//  define a variable 'arr' assign it the value of an empty array
//  for loop that loops through the array argument starting at index 1
//  push the results into the empty array variable 'arr'
//  return variable 'arr'
