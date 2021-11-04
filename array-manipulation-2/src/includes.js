/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

//  1st draft
//  define function named 'includes' taking 2 parameters 'array' and 'value'
//  for loop through the array with if condition checking if 'value' is present in 'array'
//  if present return true, if not return false
