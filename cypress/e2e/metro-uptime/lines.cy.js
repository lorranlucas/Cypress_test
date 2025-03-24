describe('Metro Lines Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should navigate to Line 1 page and display details', () => {
      cy.get('[data-line="line1"] a') // Ajuste o seletor para o link da Line 1
        .click();
      cy.url().should('equal', 'https://metro-uptime-sbw5.vercel.app/line/line1');
      cy.get('h2') // Ajuste para o título da página da linha
        .should('be.visible')
        .and('contain.text', 'Line 1'); // Ajuste o texto esperado
      cy.get('.status') // Ajuste o seletor do status
        .should('be.visible');
    });
  
    it('should return to homepage from Line 1 page', () => {
      cy.visit('/line/line1');
      cy.get('.logo') // Ajuste o seletor do logo ou link de volta
        .click();
      cy.url().should('equal', 'https://metro-uptime-sbw5.vercel.app/');
    });
  });