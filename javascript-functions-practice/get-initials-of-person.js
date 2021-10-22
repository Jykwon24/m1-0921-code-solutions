/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var first = person.firstName;
  var second = person.lastName;
  var initials = first.split('')[0] + second.split('')[0];
  return initials;
}
