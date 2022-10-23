import { defineConfig } from "cypress";
const { initPlugin } = require("cypress-plugin-snapshots/plugin");

export default defineConfig({
  screenshotsFolder: "./cypress/snapshots/actual",
  trashAssetsBeforeRuns: true,
  //   projectId: "kitkfq",
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);

      return config;
    },
  },
});
