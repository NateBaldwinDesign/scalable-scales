import responsiveBaseSize from "/src/constants/responsiveBaseTextSize";
import responsiveRatio from "/src/constants/responsiveRatio";
import { createCssVariables } from "./createCssVariables";
import {
  componentDensityIndices,
  componentSizeIndices,
} from "/src/constants/componentIndices";
import {
  relativeHorizontalPaddingIndex,
  relativeVerticalPaddingIndex,
  relativeGapIndex,
} from "/src/constants/relativeSpacingIndices";
import round from "./round";

const createComponentSpacing = (viewportWidth) => {
  // This will affect how many indices of spacing values are skipped to create each density option
  const densityFactor = (densityIndex) => 2 * densityIndex;

  // For each combinatory set, calculate spacing values and return as CSS variables
  componentDensityIndices.forEach((densityIndex, n) => {
    // I'm old-school, let's just push to some empty arrays
    let horizontalPaddingTokens = [];
    let verticalPaddingTokens = [];
    let gapTokens = [];

    componentSizeIndices.forEach((sizeIndex) => {
      const horizontalPaddingIndex =
        relativeHorizontalPaddingIndex +
        sizeIndex +
        densityFactor(densityIndex);
      const verticalPaddingIndex =
        relativeVerticalPaddingIndex + sizeIndex + densityFactor(densityIndex);
      const gapIndex =
        relativeGapIndex + sizeIndex + densityFactor(densityIndex);

      const horizontalPadding =
        responsiveBaseSize(viewportWidth) *
        Math.pow(responsiveRatio(viewportWidth), horizontalPaddingIndex);
      horizontalPaddingTokens.push(
        `${round(horizontalPadding, { even: true })}px`,
      );

      const verticalPadding =
        responsiveBaseSize(viewportWidth) *
        Math.pow(responsiveRatio(viewportWidth), verticalPaddingIndex);
      verticalPaddingTokens.push(`${round(verticalPadding, { even: true })}px`);

      const gap =
        responsiveBaseSize(viewportWidth) *
        Math.pow(responsiveRatio(viewportWidth), gapIndex);
      gapTokens.push(`${round(gap, { even: true })}px`);
    });

    // Only doing it this way since I'm making this quick and dirty.
    // For each density, we'll create sets of CSS variables, so we can use
    // the function I already created...
    const densityName = ["compact", "regular", "comfortable", "spacious"][n];
    createCssVariables(
      `padding-inline-${densityName}`,
      horizontalPaddingTokens,
      componentSizeIndices,
      "tShirtSize",
    );
    createCssVariables(
      `padding-block-${densityName}`,
      verticalPaddingTokens,
      componentSizeIndices,
      "tShirtSize",
    );
    createCssVariables(
      `gap-${densityName}`,
      gapTokens,
      componentSizeIndices,
      "tShirtSize",
    );
  });
};

export default createComponentSpacing;
