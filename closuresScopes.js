/* We want to create a function, which returns an array of functions, which return their index in the array.

For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
*/

function createFunctions(length) {
  let callbacks = [];

  for (let index = 0; index < length; index++) {
    callbacks.push(function () {
      return index;
    });
  }

  return callbacks;
}

const callbacks = createFunctions(5);

for (let index = 0; index < callbacks.length; index++) {
  console.log(callbacks[index](), index, "Function with index " + index);
}
