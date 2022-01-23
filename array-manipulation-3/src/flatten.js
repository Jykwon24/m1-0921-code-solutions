/* exported flatten */
function flatten(array) {
  // reduce method w/ .concat, .concat is a method that merges two or more arrays

  // var flatArr = array.reduce((previous, current) => previous.concat(current), []);
  // return flatArr;

  var flatArr = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      flatArr = flatArr.concat(element);
    } else {
      flatArr.push(element);
    }
  });
  return flatArr;
}
