/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Custom command to login.
     * 
     * cy.start()
     * 
     * cy.submitLoginForm('papito@webdojo.com', 'katana123')
     */
    login(): Chainable<void>

    /**
     * Custom command to validateMandatoryFields using label e text.
     * 
     * validateMandatoryFields', (label, text)
     * 
     * @example cy.validateMandatoryFields('Username do GitHub', 'Username é obrigatório')
     */
    validateMandatoryFields(label: string, text: string): Chainable<void>


    // Adicione aqui outros comandos customizados...

}
}