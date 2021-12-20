// Partition On

// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(callback, items) {
  const obj = {};
  items.forEach((item) => (obj[item] = callback(item)));

  const arrE = [];
  const arrO = [];
  items.forEach((item) => {
    if (obj[item]) arrE.push(item);
    else arrO.push(item);
  });

  arrO.forEach((item, idx) => (items[idx] = item));
  arrE.forEach((item, idx) => (items[idx + arrO.length] = item));

  return arrO.length;
}

function isEven(num) {
  return num % 2 == 0;
}

partitionOn(isEven, [1, 3, 6, 2, 4, 8, 9]);
