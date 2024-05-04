import {
  smallViewport,
  mediumViewport,
  largeViewport,
} from "/src/constants/viewportBreakpoints";
import ratios from "./ratios";

const responsiveRatio = (viewportWidth) => {
  return viewportWidth < smallViewport
    ? // If the viewport is smaller than "small"
      ratios[0]
    : viewportWidth >= smallViewport && viewportWidth < mediumViewport
      ? // If the viewport is equal to or between "small" and "medium" sizes
        ratios[1]
      : viewportWidth >= mediumViewport && viewportWidth < largeViewport
        ? // If the viewport is equal to or between "medium" and "large" sizes
          ratios[2]
        : viewportWidth >= largeViewport
          ? // If the viewport is larger or equal to than "large"
            ratios[3]
          : undefined;
};
export default responsiveRatio;
