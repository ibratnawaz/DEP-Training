// Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  let ans;
  switch(operation){
      case '+': ans = value1 + value2; break;
      case '-': ans = value1 - value2; break;
      case '*': ans = value1 * value2; break;
      case '/': ans = value1 / value2;
  }
  return ans;
}

basicOp('*', 5, 4);