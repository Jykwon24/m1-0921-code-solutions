/* exported capitalizeWords */
function capitalizeWords(string) {
  var str = string.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(' ');
}

// 1st draft
//  define function named 'capitalizeWords' taking 1 parameter 'string'
//  we lowercase the entire string.
//  turn 'string' into an array separating it by word or by their space ' '
//  use for loop to iterate through the array
//  use an if statement to target each index following an empty ' '
//  capitalize that letter

//  2nd draft
//  define function named 'capitalizeWords' taking 1 parameter 'string'
//  define variable 'str' and assign it 'string' lowercased and turned into an array at each ' '
//  set up a for loop that iterates through each word capitalizing the first letter
//  also adding the words minus the first letter
//  turn str back into a string
//  return 'str'
