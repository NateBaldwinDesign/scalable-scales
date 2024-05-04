import {
  componentDensityIndices,
  componentSizeIndices,
} from "/src/constants/componentIndices";

const createDemoComponents = () => {
  componentDensityIndices.forEach((densityIndex, i) => {
    const wrapper = document.createElement("div");
    wrapper.className = "componentDemoColumn";

    const densityName = ["compact", "regular", "comfortable", "spacious"][i];
    componentSizeIndices.forEach((sizeIndex, n) => {
      const tShirtSizeName = [
        // "xx-small",
        // "x-small",
        "small",
        "medium",
        "large",
        // "x-large",
      ][n];
      const textSizeOption = [90, 100, 200][n]; // xxs, xs, s, m, l
      const paddingInline = `padding-inline-${densityName}-${tShirtSizeName}`;
      const paddingBlock = `padding-block-${densityName}-${tShirtSizeName}`;
      const gap = `gap-${densityName}-${tShirtSizeName}`;
      // Getting real sloppy here just to make this quick...
      let style = document.createElement("style");
      const css = `
        .component-${densityName}-${tShirtSizeName} {
          padding: var(--${paddingBlock}) var(--${paddingInline});
          gap: var(--${gap});
          font-size: var(--text-size-${textSizeOption});
        }
      `;
      style.innerHTML = css;
      document.head.appendChild(style);

      let component = document.createElement("div");
      let iconPlaceholder = document.createElement("div");
      iconPlaceholder.className = "component__nontextElement";
      component.className = `component component-${densityName}-${tShirtSizeName}`;
      let label = document.createTextNode(`${densityName} ${tShirtSizeName}`);

      iconPlaceholder.style = `width: var(--text-size-${textSizeOption}); height: var(--text-size-${textSizeOption});`;
      component.appendChild(iconPlaceholder);
      component.appendChild(label);

      wrapper.appendChild(component);
    });
    document.getElementById("componentDemoWrapper").appendChild(wrapper);
  });
};

export default createDemoComponents;
