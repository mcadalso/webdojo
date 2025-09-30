Cypress.Commands.add('submitGithubForm', () => {
    cy.contains('button', 'Adicionar Perfil')
        .click()
})

Cypress.Commands.add('fillGithubForm', (name, username, profile) => {
    cy.get('#name').type(name)
    cy.get('#username').type(username)
    cy.get('#profile').type(profile)
    cy.submitGithubForm()
})
