describe('Homepage Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should load the homepage successfully', () => {
      cy.url().should('eq', 'https://metro-uptime-sbw5.vercel.app/');
      cy.get('h1').should('be.visible'); // Ajuste conforme o conteúdo real
    });
  });