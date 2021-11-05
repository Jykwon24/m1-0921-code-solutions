/* exported dropRight */
function dropRight(array, count) {
  array = array.slice(0, -count);
  return array;
}
