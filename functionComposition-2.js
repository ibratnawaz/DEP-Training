/*
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/

function compose(...args) {
  return function (value) {
    let res = value;
    for (let i = args.length - 1; i >= 0; i--) {
      res = args[i](res);
    }
    return res;
  };
}

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
compose(multTwo, addOne)(5); // o/p => 12
