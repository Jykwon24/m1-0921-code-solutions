/* exported titleCase */
function titleCase(string) {

  var editWord = string.toLowerCase().split(' ');
  var minorWords = ['In', 'Of', 'For', 'An', 'The', 'To', 'And', 'But'];

  for (var i = 0; i < editWord.length; i++) {
    editWord[i] = editWord[i][0].toUpperCase() + editWord[i].slice(1);
    if (editWord[i] === 'Javascript') {
      editWord[i] = 'JavaScript';
    } else if (editWord[i] === 'Javascript:') {
      editWord[i] = 'JavaScript:';
    } else if (editWord[i] === 'Api') {
      editWord[i] = 'API';
    }
    for (var j = 0; j < minorWords.length; j++) {
      if (editWord[i] === minorWords[j] && i !== 0) {
        editWord[i] = editWord[i].toLowerCase();
      }
    }
  }
  var completedString = editWord.join(' ');
  var regDash = /(?<=[-])\w/g;
  var regTitle = /(?<=[:])../g;

  var capString = completedString.replace(regTitle, function (match) {
    return match.toUpperCase();
  });

  var finalString = capString.replace(regDash, function (match) {
    return match.toUpperCase();
  });
  return finalString;
}
