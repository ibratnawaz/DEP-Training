// evaluateulating with Functions

function evaluate(operator, expression) {
  if (!expression) return operator;
  return expression(operator);
}

function zero(callback) {
  return evaluate(0, callback);
}
function one(callback) {
  return evaluate(1, callback);
}
function two(callback) {
  return evaluate(2, callback);
}
function three(callback) {
  return evaluate(3, callback);
}
function four(callback) {
  return evaluate(4, callback);
}
function five(callback) {
  return evaluate(5, callback);
}
function six(callback) {
  return evaluate(6, callback);
}
function seven(callback) {
  return evaluate(7, callback);
}
function eight(callback) {
  return evaluate(8, callback);
}
function nine(callback) {
  return evaluate(9, callback);
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return x * y;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

seven(times(five()));
