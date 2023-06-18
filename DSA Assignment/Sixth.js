  //Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.
  function postfixToPrefix(postfix) {
    const stack = [];
  
    for (let token of postfix) {
      if (isOperator(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExpr = token + operand1 + operand2;
        stack.push(prefixExpr);
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
  }

  const postfixExpr = "23*4+";
  const prefixExpr = postfixToPrefix(postfixExpr);
  console.log(prefixExpr);
