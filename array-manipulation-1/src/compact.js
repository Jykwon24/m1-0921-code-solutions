/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      arr.push(array[i]);
    }
  }
  return arr;
}

//  Pseudo Code
//  define a function 'compact' which takes single parameter 'array'
//  for loop which loops through the array, starting at index 0
//  elements we want to omit from the arrays are 'falsy' values
//  create if statement to check array[i] is truthy if so push to arr
//  return 'arr'
