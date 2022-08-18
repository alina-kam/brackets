module.exports = function check(str, bracketsConfig) {
  const BRACKETS_PAIRS = Object.fromEntries(bracketsConfig);

  let bracketsStack = [];

  for (let i=0; i<str.length; i++){
    if (str[i] === BRACKETS_PAIRS[bracketsStack[bracketsStack.length - 1]] && bracketsStack.length){
      bracketsStack.pop();
    }
    else bracketsStack.push(str[i]);
  }
  if (bracketsStack.length) return false;
  return true;
}

console.log(module.exports('()', [['(', ')']]));