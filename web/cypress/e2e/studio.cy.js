describe('studio', () => {
  it('Exemplo do cypress studio', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('h1')
      .should('be.visible')
      .and('have.text', 'Kitchen Sink');
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Deve logar com sucesso', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000');
    cy.get('#email').type('papito@webdojo.com');
    cy.get('#password').type('katana123');
    cy.contains('button','Entrar').click();
    cy.get('[data-cy="user-name"]').should('have.text', 'Fernando Papito');
    /* ==== End Cypress Studio ==== */
  });
})