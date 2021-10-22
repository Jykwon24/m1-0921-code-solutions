function convertMinutesToSeconds(minutes) {
  var product = minutes * 60;
  return product;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var output = 'Hey, ' + name;
  return output;
}

var greetOutput = greet('Tina');
console.log('greetOutput:', greetOutput);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('getAreaResult:', areaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var getFirstNameResult = getFirstName({
  firstName: 'Lelouche',
  lastName: 'Lamperouge'
});
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var last = array[array.length - 1];
  return last;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
