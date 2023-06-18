//Q8. Write a program to check if all the brackets are closed in a given code snippet.
  function areBracketsClosed(codeSnippet) {
    const stack = [];
  
    for (let char of codeSnippet) {
      if (isOpenBracket(char)) {
        stack.push(char);
      } else if (isCloseBracket(char)) {
        if (stack.length === 0) {
          return false;
        }
  
        const top = stack.pop();
        if (!isMatchingBracket(top, char)) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
  
  function isOpenBracket(char) {
    return char === "(" || char === "[" || char === "{";
  }
  
  function isCloseBracket(char) {
    return char === ")" || char === "]" || char === "}";
  }
  
  function isMatchingBracket(opening, closing) {
    return (
      (opening === "(" && closing === ")") ||
      (opening === "[" && closing === "]") ||
      (opening === "{" && closing === "}")
    );
  }
  const code = "(let [x, y] = [1, 2])";
  const bracketsClosed = areBracketsClosed(code);
  console.log(bracketsClosed);

  