// Get the Middle Character

function getMiddle(string) {
  if (string.length % 2 == 0)
    return string[string.length / 2 - 1] + string[string.length / 2];

  return string[Math.floor(string.length / 2)];
}

getMiddle("test");
