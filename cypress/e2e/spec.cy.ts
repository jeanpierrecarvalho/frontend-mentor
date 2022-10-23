describe("empty spec", () => {
  it("passes", () => {
    cy.viewport(1100, 446);
    cy.visit("http://localhost:3000/newbie/stats-preview-card-component");
    cy.get("#StatsPreviewCardComponent").then((a) => {
      cy.wrap(a).toMatchImageSnapshot({
        imageConfig: {
          threshold: 0.5,
        },
      });
    });
  });
});
