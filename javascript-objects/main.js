var student = {
  firstName: 'Jeff',
  lastName: 'Kwon',
  age: 31
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Insurance Broker';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Hyundai',
  model: 'Santa Fe',
  year: 2020
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertible:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Kobe',
  type: 'Dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
