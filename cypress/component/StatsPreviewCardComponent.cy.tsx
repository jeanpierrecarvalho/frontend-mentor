import React from "react";
import StatsPreviewCardComponent from "../../src/Newbie/StatsPreviewCardComponent";

describe("StatsPreviewCardComponent.cy.ts", () => {
  it("playground", () => {
    cy.viewport(1920, 1080);
    cy.mount(<StatsPreviewCardComponent />);
  });
});
