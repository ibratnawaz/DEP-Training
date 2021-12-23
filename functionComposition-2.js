/*
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/

function compose(...args) {
  return function (value) {
    let result = value;
    for (let index = args.length - 1; index >= 0; index--) {
      result = args[index](result);
    }
    return result;
  };
}

const addOne = (value) => value + 1;
const multTwo = (value) => value * 2;
compose(multTwo, addOne)(5); // o/p => 12
