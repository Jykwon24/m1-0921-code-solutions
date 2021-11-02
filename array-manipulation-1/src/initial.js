/* exported initial */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}

//  Pseudo Code
//  define function 'inital' which takes single parameter 'array'
//  define a variable 'arr' assign it the value of an empty array
//  for loop that loops through the array argument starting at index 0
//  the condition of the loop will stop the loop before it reaches the last index
//  push the results into the empty array variable 'arr'
//  return variable 'arr'
