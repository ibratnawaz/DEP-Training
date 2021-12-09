// Calculating with Functions

function calc(op,exp){
    if(!exp) return op;
    return exp(op);
}

function zero(cb) {return calc(0,cb)}
function one(cb) {return calc(1,cb)}
function two(cb) {return calc(2,cb)}
function three(cb) {return calc(3,cb)}
function four(cb) {return calc(4,cb)}
function five(cb) {return calc(5,cb)}
function six(cb) {return calc(6,cb)}
function seven(cb) {return calc(7,cb)}
function eight(cb) {return calc(8,cb)}
function nine(cb) {return calc(9,cb)}

function plus(x) {return function(y) {return x+y;}}
function minus(x) {return function(y) {return y-x;}}
function times(x) {return function(y) {return x*y;}}
function dividedBy(x) {return function(y) {return Math.floor(y/x);}}

seven(times(five()));