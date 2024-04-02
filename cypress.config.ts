import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'dkpyow',
  e2e: {
    //baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
