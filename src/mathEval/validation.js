/* eslint no-eval: 0 */

export function exprssionValidation(expressionArray){
  const evalArray = [];

  console.log("the expressionArray",expressionArray);
  for (let elementObject of expressionArray) {
    evalArray.push(elementObject.value);
  }
  let evalString = evalArray.join("");
  let answer = "";
  let flag = true
  console.log("evalString",evalString);
  try {
    answer = eval(evalString);
  }
  catch(err) {
    flag = false;
  }
  return {flag : flag, evalData : answer};
}
