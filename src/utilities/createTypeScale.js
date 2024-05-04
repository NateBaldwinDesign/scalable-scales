import textSizeIndices from "/src/constants/textSizeIndices";
import round from "/src/utilities/round";
import { createCssVariables } from "./createCssVariables";
import responsiveBaseSize from "/src/constants/responsiveBaseTextSize";
import responsiveRatio from "/src/constants/responsiveRatio";

const createTypeScale = (viewportWidth) => {
  const textSize = (n) => {
    // Calculate text size based on viewport width, convert to rem
    return (
      (responsiveBaseSize(viewportWidth) *
        Math.pow(responsiveRatio(viewportWidth), n)) /
      16
    );
  };

  const typeScale = textSizeIndices.map((n) => {
    // Convert to rem string and round
    return `${round(textSize(n), { decimals: 2 })}rem`;
  });

  createCssVariables("text-size", typeScale, textSizeIndices, "numericScale");

  return typeScale;
};

export default createTypeScale;
