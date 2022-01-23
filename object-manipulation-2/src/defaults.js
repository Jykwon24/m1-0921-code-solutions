/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    if ((key in target) === true) {
      Object.assign(source, target);
    }
  }
  Object.assign(target, source);
}

// for (var key in target) {
//   if (key === source.key) {
//     var newKey = target[key];
//     source[key] = newKey;
//   }
// }
