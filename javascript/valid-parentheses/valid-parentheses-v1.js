function validParentheses(parens) {
  //TODO
  parens = `(${parens})`;
  parens = parens
    .split("")
    .map((char, i) => {
      if (char == "(") {
        return "[";
      } else if (char == ")") {
        return parens[i + 1] == "(" ? "]," : "]";
      } else {
        return "";
      }
    })
    .join("");
  try {
    return JSON.parse(parens) && true;
  } catch (err) {
    return false;
  }
}

console.log(validParentheses("()()"));
console.log(validParentheses("()("));
