/*
we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
*/

Array.prototype.square = function () {
  const squareArr = [];
  for (let i = 0; i < this.length; i++) {
    squareArr.push(Math.pow(this[i], 2));
  }
  return squareArr;
};

Array.prototype.cube = function () {
  const cubeArr = [];
  for (let i = 0; i < this.length; i++) {
    cubeArr.push(Math.pow(this[i], 3));
  }
  return cubeArr;
};

Array.prototype.average = function () {
  if (!this.length) return NaN;

  const arraySum = this.reduce((ele, sum) => (sum += ele), 0);

  return arraySum / this.length;
};

Array.prototype.sum = function () {
  const arraySum = this.reduce((ele, sum) => (sum += ele), 0);

  return arraySum;
};

Array.prototype.even = function () {
  const evenarray = this.filter((ele) => ele % 2 == 0);

  return evenarray;
};

Array.prototype.odd = function () {
  const oddArray = this.filter((ele) => ele % 2 != 0);

  return oddArray;
};

var numbers = [1, 2, 3, 4, 5];

numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
