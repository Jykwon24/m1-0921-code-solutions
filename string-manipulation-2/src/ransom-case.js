/* exported ransomCase */
function ransomCase(string) {
  var str = string.toLowerCase().split('');
  for (var i = 1; i < string.length; i += 2) {
    str[i] = str[i].toUpperCase();
  }
  return str.join('');
}

//  1st draft
//
