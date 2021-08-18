// convert infix to postfix
function infixToPostfix(value) {
  var stack = [];
  var output = [];
  var ops = [];
  var token;
  var lastOp;
  var lastArg;
  var i;
  var len;

  // split the infix string
  value = value.split(" ");

  // convert the infix string to postfix
  for (i = 0, len = value.length; i < len; i++) {
    token = value[i];

    // if the token is a number, push it to the output
    if (isNumeric(token)) {
      output.push(token);
      continue;
    }

    // if the token is an operator, push it to the ops array
    if (isOperator(token)) {
      ops.push(token);
      continue;
    }

    // if the token is a left parenthesis, push it to the stack
    if (token === "(") {
      stack.push(token);
      continue;
    }

    // if the token is a right parenthesis, pop the stack until the left parenthesis is found
    if (token === ")") {
      while (stack[stack.length - 1] !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
      continue;
    }

    // if the token is a binary operator, pop the stack twice and push the result to the output
    while (isOperator(token) && !ops.length) {
      lastOp = ops.pop();
      lastArg = output.pop();
      output.push(lastArg + lastOp + token);
    }

    // push the token to the stack
    stack.push(token);
  }

  // pop the stack and push all the elements to the output
  while (stack.length) {
    output.push(stack.pop());
  }

  return output.join(" ");
}

function isNumeric(value) {
  return !isNaN(value - 0);
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

console.log(infixToPostfix("1+2*3/(4-5)"));
