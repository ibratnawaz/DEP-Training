// Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  let answer;
  switch (operation) {
    case "+":
      answer = value1 + value2;
      break;
    case "-":
      answer = value1 - value2;
      break;
    case "*":
      answer = value1 * value2;
      break;
    case "/":
      answer = value1 / value2;
      break;
    default:
      return "Invalid inputs!!";
  }
  return answer;
}

basicOp("*", 5, 4);
