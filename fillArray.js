/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

You have to validate input:
  v can be anything (primitive or otherwise)
  if v is ommited, fill the array with undefined
  if n is 0, return an empty array
  if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
  When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
*/

function prefill(length, data) {
  try {
    if (typeof length == undefined || length === "0" || length === 0) return [];
    else if (typeof length == "boolean" || isNaN(+length))
      throw new TypeError();

    if (typeof data == undefined) return new Array(+length).fill(undefined);

    return new Array(+length).fill(data);
  } catch (error) {
    throw TypeError(`${n} is invalid`);
  }
}

console.log(prefill(4, "abc"));
