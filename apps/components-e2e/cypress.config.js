const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fileServerFolder: ".",
  fixturesFolder: "./src/fixtures",
  modifyObstructiveCode: false,
  video: true,
  videosFolder: "../../dist/cypress/apps/components-e2e/videos",
  screenshotsFolder: "../../dist/cypress/apps/components-e2e/screenshots",
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  e2e: {
    specPattern: "./src/integration/**/*.cy.{js,jsx,ts,tsx}",
    supportFile: "./src/support/index.ts",
    baseUrl: "http://localhost:4400",
  },
});
