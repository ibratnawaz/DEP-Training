// Get the Middle Character

function getMiddle(value) {
  const numbers = {
    ZERO: 0,
    ONE: 1,
    TWO: 2,
  };

  const length = value.length;
  const middlePosition = Math.floor(length / numbers.TWO);

  if (length % numbers.TWO == numbers.ZERO) {
    return value[middlePosition - numbers.ONE] + value[middlePosition];
  }

  return value[middlePosition];
}

getMiddle("test");
