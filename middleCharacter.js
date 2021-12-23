// Get the Middle Character

function getMiddle(value) {
  if (value.length % 2 == 0)
    return value[value.length / 2 - 1] + value[value.length / 2];

  return value[Math.floor(value.length / 2)];
}

getMiddle("test");
