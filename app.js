const numbers = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
};

const choices = {
  ADD: "addition",
  SUBTRACT: "subtraction",
  PRODUCT: "multiply",
  DIVIDE: "division",
};

function main() {
  console.log(
    "Note: Subtraction and division takes 2 values for input.\n      If provided more, the first 2 value will be taken and the rest will be discarded."
  );
  const { ZERO, ONE, THREE } = numbers;
  const input = process.argv.slice(THREE);
  const operation = input[ZERO];
  const data = input.slice(ONE).map(Number);
  calculate(operation, data);
}

function calculate(operation, data) {
  const { ZERO, ONE, TWO } = numbers;
  switch (operation) {
    case choices.ADD:
      addition(data);
      break;
    case choices.PRODUCT:
      multiplication(data);
      break;
    case choices.SUBTRACT:
      checkValidInput(data.slice(ZERO, TWO), TWO);
      subtraction(data[ZERO], data[ONE]);
      break;
    case choices.DIVIDE:
      checkValidInput(data.slice(ZERO, TWO), TWO);
      division(data[ZERO], data[ONE]);
      break;
    default:
      console.log("Invalid operation");
  }
}

function addition(data) {
  const { ZERO, ONE } = numbers;
  checkValidInput(data, ONE);
  const result = data.reduce((sum, num) => sum + num, ZERO);
  console.log(result);
}

function subtraction(operand1, operand2) {
  const result = operand1 - operand2;
  console.log(result);
}

function multiplication(data) {
  const { ONE } = numbers;
  checkValidInput(data, ONE);
  const result = data.reduce((sum, num) => sum * num, ONE);
  console.log(result);
}

function division(operand1, operand2) {
  if (operand2 == numbers.ZERO) {
    console.log("Error: Divide by zero");
  } else {
    const result = operand1 / operand2;
    console.log(result);
  }
}

function checkValidInput(data, length) {
  const { ONE } = numbers;
  if (data.length >= length) {
    data.forEach((value) => {
      if (isNaN(value)) {
        console.log(
          "Error: Please provide valid number to perform the given operation"
        );
        process.exit(ONE);
      }
    });
  } else {
    console.log(`Error: Expected inputs to be ${length}, given ${data.length}`);
    process.exit(ONE);
  }
}

main();
