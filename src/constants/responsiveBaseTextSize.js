import {
  smallViewport,
  mediumViewport,
  largeViewport,
} from "/src/constants/viewportBreakpoints";
import baseTextSizes from "./baseTextSizes";

const responsiveBaseSize = (viewportWidth) => {
  return viewportWidth < smallViewport
    ? baseTextSizes[0]
    : viewportWidth >= smallViewport && viewportWidth < mediumViewport
      ? baseTextSizes[1]
      : viewportWidth >= mediumViewport && viewportWidth < largeViewport
        ? baseTextSizes[2]
        : viewportWidth >= largeViewport
          ? baseTextSizes[3]
          : undefined;
};

export default responsiveBaseSize;
