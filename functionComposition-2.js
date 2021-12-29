/*
A simple implementation of compose, could work as follows:

const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/

const numbers = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
};

function compose(...args) {
  return function (value) {
    let result = value;
    for (
      let index = args.length - numbers.ONE;
      index >= numbers.ZERO;
      index--
    ) {
      result = args[index](result);
    }
    return result;
  };
}

const addOne = (value) => value + numbers.ONE;
const multTwo = (value) => value * numbers.TWO;
compose(multTwo, addOne)(5); // o/p => 12
