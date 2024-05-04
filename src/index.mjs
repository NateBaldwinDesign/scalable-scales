import createTypeScale from "./utilities/createTypeScale";
import createSpacingScale from "./utilities/createSpacingScale";
import createRamps from "./utilities/createRamps";
import createComponentSpacing from "./utilities/createComponentSpacing";
import createDemoComponents from "./utilities/createDemoComponents";
import responsiveRatio from "./constants/responsiveRatio";
import updateLabelValue from "./utilities/updateLabelValue";
import {
  smallViewport,
  mediumViewport,
  largeViewport,
} from "./constants/viewportBreakpoints";

// import {
//   relativeVerticalPaddingIndex,
//   relativeHorizontalPaddingIndex,
// } from "./constants/relativeSpacingIndices";
// import responsiveBaseSize from "./constants/responsiveBaseTextSize";
// import round from "./utilities/round";

import "./styles.css";

createTypeScale(window.innerWidth);
createSpacingScale(window.innerWidth);
createComponentSpacing(window.innerWidth);

/** TEST */
// const spaceSize = (n) => {
//   // Calculate text size based on viewport width, remain as pixels
//   return `${round(
//     responsiveBaseSize(window.innerWidth) *
//       Math.pow(responsiveRatio(window.innerWidth), n),
//     { even: false },
//   )}px`;
// };
// const testArray = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10];
// testArray.map((item) => {
//   console.log(relativeHorizontalPaddingIndex, item);
//   console.log(spaceSize(item));
// });

createRamps();
createDemoComponents();

const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      const id = tab.getAttribute("id");
      const tabPanelId = `${id}Panel`;
      const tabPanel = document.getElementById(tabPanelId);
      tab.classList.remove("active");
      tabPanel.classList.remove("active");
    });
    tab.classList.add("active");
    const id = tab.getAttribute("id");
    const tabPanelId = `${id}Panel`;
    const tabPanel = document.getElementById(tabPanelId);
    tabPanel.classList.add("active");
  });
});
// Default tab selection
document.getElementById("tabDemo").click();

document.getElementById("tableDensity").addEventListener("input", (e) => {
  document.getElementById("demoTable").className = e.target.value;
});
document.getElementById("tableDensity").value = "comfortable";

// Responsively create type scale
window.addEventListener("resize", (e) => {
  console.log(e.target.innerWidth, responsiveRatio(e.target.innerWidth));

  createTypeScale(e.target.innerWidth);
  createSpacingScale(e.target.innerWidth);
  createComponentSpacing(e.target.innerWidth);

  dummyLog(e.target.innerWidth);
});

// Add text scaling functionality
document.getElementById("textScaling").addEventListener("input", (e) => {
  const value = Number(e.target.value);
  document.documentElement.style.fontSize = `${value}%`;
  updateLabelValue("textScaling", value);
});
// Add browser zoom controls
document.getElementById("browserZoom").addEventListener("input", (e) => {
  const value = Number(e.target.value);
  document.querySelector("main").style.zoom = `${value}%`;
  updateLabelValue("browserZoom", value);
});

document.getElementById("reset").addEventListener("click", (e) => {
  document.getElementById("textScaling").value = "100";
  document.getElementById("textScaling").dispatchEvent(new Event("input"));
  document.getElementById("browserZoom").value = "100";
  document.getElementById("browserZoom").dispatchEvent(new Event("input"));
});

const dummyLog = (viewportWidth) => {
  return viewportWidth < smallViewport
    ? 1.15
    : viewportWidth >= smallViewport && viewportWidth < mediumViewport
      ? 1.2
      : viewportWidth >= mediumViewport && viewportWidth < largeViewport
        ? 1.275
        : viewportWidth >= largeViewport
          ? 1.3
          : undefined;
};
