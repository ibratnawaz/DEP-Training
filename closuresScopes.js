/* We want to create a function, which returns an array of functions, which return their index in the array.

For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
*/

function createFunctions(length) {
  var callbacks = [];

  for (let i = 0; i < length; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

const callbacks = createFunctions(5);

for (var i = 0; i < callbacks.length; i++) {
  console.log(callbacks[i](), i, "Function with index " + i);
}
