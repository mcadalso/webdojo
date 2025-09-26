Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('#name').type(form.name)

    cy.get('#email').type(form.email)

    //preencher campos com formatação e validar se ficou bem aplicada
    cy.get('#phone')
        .type(form.phone)
    //                    .should('have.value', '(11) 99999-1000')

    // Escolha de campos nas Combos por texto
    //cy.get('#consultancyType').select('inCompany')   -   Option Value ou label
    cy.get('#consultancyType').select(form.consultancyType)

    if (form.personType === 'cpf') {
        //Escolha de campos Radio
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        //texto formatado
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
        //            .should('have.value', '656.025.300-70')
    }
    if (form.personType === 'cnpj') {
        //Escolha de campos Radio
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click()
            .should('be.checked')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')

        //texto formatado
        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
        //            .should('have.value', '656.025.300-70')

    }




    /*        const discoveryChannels = [
                'Instagram',
                'LinkedIn',
                'Udemy',
                'YouTube',
                'Indicação de Amigo'
            ] passou para const */

    form.discoveryChannels.forEach((channel) => {

        //Escolha de campos Check
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked')
    })

    //Escolha de ficheiros
    cy.get('input[type="file"]')
        .should('be.hidden')
        .selectFile(form.file, { force: true })

    //texto
    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)

    /*        const techs = [
                'Cypress',
                'Selenium',
                'WebDriverIO',
                'Playright',
                'Robot Frame'
            ] passou para const */

    form.techs.forEach((tech) => {

        //Array de dados (tags)
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')

    })

    if (form.terms === true) {
        //check box obrigatório
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
    cy.contains('button', 'Fechar')
        .click()
})

Cypress.Commands.add('validateMandatoryFields', (label, text) => {
    cy.contains('label', label)
        .parent()
        .find('p')
        .should('have.text', text)
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')
})

