/* exported isVowel */
function isVowel(char) {
  var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) {
      return true;
    }
  }
  return false;
}
