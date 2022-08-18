module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = [];
  for (entry of bracketsConfig){
    OPEN_BRACKETS.push(entry[0]);
  }

  const BRACKETS_PAIRS = Object.fromEntries(bracketsConfig);

  let bracketsStack = [];

  for (let i=0; i<str.length; i++){
    if (OPEN_BRACKETS.includes(str[i])){
      bracketsStack.push(str[i])
    }
    else if (str[i] === BRACKETS_PAIRS[bracketsStack[bracketsStack.length - 1]]){
      bracketsStack.pop();
    }
    else return false;
  }
  if (bracketsStack.length) return false;
  return true;
}

console.log(module.exports('()', [['(', ')']]));