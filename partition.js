// Partition On

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(callback, items) {
  const data = {};
  items.forEach((item) => (data[item] = callback(item)));

  const evenElements = [];
  const oddElements = [];
  items.forEach((item) => {
    if (data[item]) {
      evenElements.push(item);
    } else {
      oddElements.push(item);
    }
  });

  oddElements.forEach((item, index) => (items[index] = item));
  evenElements.forEach(
    (item, index) => (items[index + oddElements.length] = item)
  );

  return oddElements.length;
}

function isEven(value) {
  const TWO = 2;
  return value % TWO === 0;
}

partitionOn(isEven, [1, 3, 6, 2, 4, 8, 9]);
