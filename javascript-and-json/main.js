var booksArr = [
  {
    title: 'The Eye of the World',
    author: 'Robert Jordan',
    ISBN: '0812511816'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    ISBN: '9783442267743'
  },
  {
    title: 'The Name of the Wind',
    authot: 'Patrick Rothfuss',
    ISBN: '9780756405892'
  }
];

console.log(booksArr);
console.log('typeof:', typeof booksArr);

console.log(JSON.stringify(booksArr));
console.log('typeof JSON stringify:', typeof JSON.stringify(booksArr));

var jsonFormat = '{"number id": 860007,"name": "Jeff Kwon"}';

console.log(jsonFormat);
console.log('type of stringFormat:', typeof jsonFormat);

var jsonObj = JSON.parse(jsonFormat);

console.log(jsonObj);
console.log('typeof jsonObj:', typeof jsonObj);
