/* exported oddOrEven */
function oddOrEven(numbers) {
  var arr = [];
  var even = 'even';
  var odd = 'odd';
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push(even);
    } else {
      arr.push(odd);
    }
  }
  return arr;
}
