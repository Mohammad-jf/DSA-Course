function calculator(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
      break;
    case '-':
      return num1 - num2;
      break;
    case '*':
      return num1 * num2;
      break;
    case '/':
      return num1 / num2;
      break;
    default:
      return 'invalid operator';
      break;
  }
}

console.log(calculator(10, 20, '='));
