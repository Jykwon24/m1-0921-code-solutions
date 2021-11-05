/* exported numVowels */
function numVowels(string) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var x of string) {
    if (vowels.includes(x)) {
      count++;
    }
  }
  return count;
}
