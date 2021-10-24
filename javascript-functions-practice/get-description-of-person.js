/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var info = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return info;
}
