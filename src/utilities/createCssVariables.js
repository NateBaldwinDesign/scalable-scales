const nameMyVariable = (type, index, namingMethod = "numericScale") => {
  let modifier;
  if (namingMethod === "numericScale") {
    modifier = index < 0 ? 100 - 10 * (index * -1) : (index + 1) * 100;
  } else if (namingMethod === "tShirtSize") {
    if (index === 0) modifier = "medium";
    if (index === 1) modifier = "large";
    if (index === -1) modifier = "small";
    if (index > 1) modifier = "x".repeat(index - 1) + "-large";
    if (index < -1) modifier = "x".repeat((index + 1) * -1) + "-small";
  }
  return `${type}-${modifier}`;
};

const createCssVariables = (type, valuesArray, indexArray, namingMethod) => {
  let variableNamesArray = [];
  valuesArray.forEach((value, i) => {
    const name = nameMyVariable(type, indexArray[i], namingMethod);
    variableNamesArray.push(`--${name}`);
    return document.documentElement.style.setProperty(`--${name}`, value);
  });
  return { variableNamesArray: variableNamesArray };
};

export { createCssVariables, nameMyVariable };
