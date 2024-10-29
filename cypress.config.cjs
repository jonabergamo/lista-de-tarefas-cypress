// cypress.config.cjs
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementar os listeners aqui, se necessário
    },
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.ts",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
