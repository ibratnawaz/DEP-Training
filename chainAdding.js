/*
We want to create a function that will add numbers together when called in succession and get the result using its property valueOf().

add(1)(2).valueOf();
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3).valueOf(); // 6
add(1)(2)(3)(4).valueOf(); // 10
add(1)(2)(3)(4)(5).valueOf(); // 15
*/

function add(sum) {
  function plus(num) {
    if (num == undefined) return num;

    sum += num;

    return plus;
  }

  plus.valueOf = function () {
    return sum;
  };

  return plus;
}

console.log(add(1)(2)(3)(4)(5).valueOf());
