import textSizeIndices from "/src/constants/textSizeIndices";
import spacingScaleIndices from "/src/constants/spacingScaleIndices";
import { nameMyVariable } from "/src/utilities/createCssVariables";

const createRamps = () => {
  const typeVariables = textSizeIndices.map((value) => {
    return nameMyVariable("text-size", value, "numericScale");
  });
  const spacingVariables = spacingScaleIndices.map((value, n) => {
    return nameMyVariable("space", value, "numericScale");
  });

  const typeDest = document.getElementById("typographyBlockWrapper");
  typeDest.innerHTML = " ";
  const spacingDest = document.getElementById("spacingBlockWrapper");
  spacingDest.innerHTML = " ";

  const typeVariablesReordered = typeVariables.reverse();

  typeVariablesReordered.forEach((name) => {
    let element = document.createElement("p");
    element.className = "typeElement";
    element.style = `font-size: var(--${name})`;
    element.innerHTML = "Typography is design";

    typeDest.appendChild(element);
  });
  spacingVariables.forEach((name) => {
    let element = document.createElement("span");
    element.className = "spacingBlock";
    element.style = `width: var(--${name})`;

    spacingDest.appendChild(element);
  });
};

export default createRamps;
