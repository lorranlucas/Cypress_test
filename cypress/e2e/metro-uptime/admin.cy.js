describe('Admin Page Tests', () => {
    it('should redirect to login or show unauthorized message when accessing admin without auth', () => {
      cy.visit('/admin', { failOnStatusCode: false });
      cy.url().should('equal', 'https://metro-uptime-sbw5.vercel.app/admin');
      
      // Intercepta a requisição de autenticação e verifica o erro 401
      cy.intercept('POST', '/api/auth/admin').as('authRequest');
      cy.wait('@authRequest').its('response.statusCode').should('equal', 401);
  
      // Verifica se há uma mensagem de erro ou redirecionamento
      cy.get('body').should('contain.text', 'Unauthorized'); // Ajuste conforme o conteúdo real
    });
  
    it('should not allow direct access to admin API', () => {
      cy.request({
        method: 'POST',
        url: '/api/auth/admin',
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });