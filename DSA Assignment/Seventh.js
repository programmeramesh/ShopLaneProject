//Q7. Write a program to convert prefix expression to infix expression.
  function prefixToInfix(prefix) {
    const stack = [];
  
    for (let i = prefix.length - 1; i >= 0; i--) {
      const token = prefix[i];
  
      if (isOperator(token)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpr = `(${operand1}${token}${operand2})`;
        stack.push(infixExpr);
      } else {
        stack.push(token);
      }
    }
  
    return stack.pop();
  }
  
  function isOperator(char) {
    return char === "+" || char === "-" || char === "*" || char === "/";
  }

  const prefixExpre = "+*23*456";
  const infixExpre = prefixToInfix(prefixExpre);
  console.log(infixExpre);