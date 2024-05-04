import spacingScaleIndices from "/src/constants/spacingScaleIndices";
import round from "/src/utilities/round";
import { createCssVariables } from "./createCssVariables";
import responsiveBaseSize from "/src/constants/responsiveBaseTextSize";
import responsiveRatio from "/src/constants/responsiveRatio";

const createSpacingScale = (viewportWidth) => {
  const spaceSize = (n) => {
    // Calculate text size based on viewport width, remain as pixels
    return (
      responsiveBaseSize(viewportWidth) *
      Math.pow(responsiveRatio(viewportWidth), n)
    );
  };

  const spacingScale = spacingScaleIndices.map((value) => {
    // Convert to pixel string and round
    return `${round(spaceSize(value), 2)}px`;
  });

  createCssVariables(
    "space",
    spacingScale,
    spacingScaleIndices,
    "numericScale",
  );

  return spacingScale;
};

export default createSpacingScale;
