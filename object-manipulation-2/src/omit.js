/* exported omit */
function omit(source, keys) {
  var obj = {};
  Object.assign(obj, source);
  for (var i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'number') {
      delete obj[keys[i]];
    }
  }
  return obj;
}
