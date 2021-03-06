var num1 = 8;
var num2 = 33;
var num3 = 24;

var maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

var heroes = [
  'Spider Man',
  'One-Punch Man',
  'Batman',
  'Venom'
];

var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Game of Thrones',
    author: 'George R.R. Martin'
  },
  {
    title: 'Half Blood Prince',
    author: 'J.K Rowling'
  },
  {
    title: 'Return of the King',
    author: ' J.R.R Tolkien'
  }

];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library value after method use:', library);

var fullName = 'Jeffrey Kwon';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
