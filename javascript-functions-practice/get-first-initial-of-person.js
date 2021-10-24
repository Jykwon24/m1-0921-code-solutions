/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  var convert = person.firstName;
  var convert2 = convert.split('');
  var first = convert2[0];
  return first;
}
