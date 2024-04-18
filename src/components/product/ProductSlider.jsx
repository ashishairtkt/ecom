import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const fullpageOptions = {
  sectionsColor: ["black"],
  scrollingSpeed: 700,
  scrollHorizontally: true,
  verticalCentered: true,
  navigation: true,
  parallax: true,
  autoScrolling: true, // Add autoScrolling option here
  parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
  loopHorizontal: true,
  lazyLoading: true,
};
export const ProductSlider = () => {
  return (
    <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
            </div>
            <div className="section">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};
