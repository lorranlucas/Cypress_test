module.exports = {
  e2e: {
    baseUrl: 'https://metro-uptime-sbw5.vercel.app',
    setupNodeEvents(on, config) {
      // Configurações futuras, se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
};