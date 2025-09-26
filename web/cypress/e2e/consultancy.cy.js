import consultancyData from '../fixtures/consultancy.json'

describe('Fomulário de Consultoria', () => {

    before(() => {
        cy.log('Isto acontece antes de todos os testes')
    })

    beforeEach(() => {
        cy.login()
        cy.log('Isto aqui acontece antes de todos os testes')
        cy.goTo('Formulários', 'Consultoria')

//        cy.fixture('consultancy.json').as('consultancyData') // ou cy.fixture('consultancy') Obriga em vez de ()=> colocar function() e usar  const consultancyForm = this.consultancyData.personal (sem o import consultancyData from '../fixtures/consultancy.json' no inicio do .js)

    })

    it('Deve solicitar consultoria individual', () => {

        const consultancyForm = consultancyData.personal

        cy.get('#name').type(consultancyForm.name)

        cy.get('#email').type(consultancyForm.email)

        //preencher campos com formatação e validar se ficou bem aplicada
        cy.get('#phone')
            .type(consultancyForm.phone)
        //                    .should('have.value', '(11) 99999-1000')

        // Escolha de campos nas Combos por texto
        //cy.get('#consultancyType').select('inCompany')   -   Option Value ou label
        cy.get('#consultancyType').select(consultancyForm.consultancyType)

        if (consultancyForm.personType === 'cpf') {
            //Escolha de campos Radio
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')


            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked')
        }
        if (consultancyForm.personType === 'cnpj') {
            //Escolha de campos Radio
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')


            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked')
        }


        //texto formatado
        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(consultancyForm.document)
        //            .should('have.value', '656.025.300-70')

        /*        const discoveryChannels = [
                    'Instagram',
                    'LinkedIn',
                    'Udemy',
                    'YouTube',
                    'Indicação de Amigo'
                ] passou para const */

        consultancyForm.discoveryChannels.forEach((channel) => {

            //Escolha de campos Check
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        //Escolha de ficheiros
        cy.get('input[type="file"]')
            .should('be.hidden')
            .selectFile(consultancyForm.file, { force: true })

        //texto
        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        /*        const techs = [
                    'Cypress',
                    'Selenium',
                    'WebDriverIO',
                    'Playright',
                    'Robot Frame'
                ] passou para const */

        consultancyForm.techs.forEach((tech) => {

            //Array de dados (tags)
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')

        })

        if (consultancyForm.terms === true) {
            //check box obrigatório
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
        }

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

        cy.contains('button', 'Fechar')
            .click()
    })

    it('Deve solicitar consultoria in company', () => {

        const consultancyForm = consultancyData.company

        cy.get('#name').type(consultancyForm.name)

        cy.get('#email').type(consultancyForm.email)

        //preencher campos com formatação e validar se ficou bem aplicada   
        cy.get('#phone')
            .type(consultancyForm.phone)
        //                    .should('have.value', '(11) 99999-1000')

        // Escolha de campos nas Combos por texto
        //cy.get('#consultancyType').select('inCompany')   -   Option Value ou label
        cy.get('#consultancyType').select(consultancyForm.consultancyType)

        if (consultancyForm.personType === 'cpf') {
            //Escolha de campos Radio
            cy.contains('label', 'Pessoa Física')
                .find('input')
                .click()
                .should('be.checked')


            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .should('be.not.checked')
        }
        if (consultancyForm.personType === 'cnpj') {
            //Escolha de campos Radio
            cy.contains('label', 'Pessoa Jurídica')
                .find('input')
                .click()
                .should('be.checked')


            cy.contains('label', 'Pessoa Física')
                .find('input')
                .should('be.not.checked')
        }


        //texto formatado
        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(consultancyForm.document)
        //            .should('have.value', '656.025.300-70')

        /*        const discoveryChannels = [
                    'Instagram',
                    'LinkedIn',
                    'Udemy',
                    'YouTube',
                    'Indicação de Amigo'
                ] passou para const */

        consultancyForm.discoveryChannels.forEach((channel) => {

            //Escolha de campos Check
            cy.contains('label', channel)
                .find('input')
                .check()
                .should('be.checked')
        })

        //Escolha de ficheiros
        cy.get('input[type="file"]')
            .should('be.hidden')
            .selectFile(consultancyForm.file, { force: true })

        //texto
        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type(consultancyForm.description)

        /*        const techs = [
                    'Cypress',
                    'Selenium',
                    'WebDriverIO',
                    'Playright',
                    'Robot Frame'
                ] passou para const */

        consultancyForm.techs.forEach((tech) => {

            //Array de dados (tags)
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}')

            cy.contains('label', 'Tecnologias')
                .parent()
                .contains('span', tech)
                .should('be.visible')

        })

        if (consultancyForm.terms === true) {
            //check box obrigatório
            cy.contains('label', 'termos de uso')
                .find('input')
                .check()
        }

        cy.contains('button', 'Enviar formulário')
            .click()

        cy.get('.modal', { timeout: 7000 })
            .should('be.visible')
            .find('.modal-content')
            .should('be.visible')
            .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')

        cy.contains('button', 'Fechar')
            .click()
    })

it('Deve verificar os campos obrigatórios', () => {
    cy.contains('button', 'Enviar formulário')
        .click()

    cy.contains('label', 'Nome Completo')
        .parent()
        .find('p')
        .should('have.text', 'Campo obrigatório')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('label', 'Email')
        .parent()
        .find('p')
        .should('have.text', 'Campo obrigatório')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('label', 'Email *')
        .parent()
        .find('p')
        .should('have.text', 'Campo obrigatório')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')

    cy.contains('label', 'termos de uso')
        .parent()
        .find('p')
        .should('have.text', 'Você precisa aceitar os termos de uso')
        .should('be.visible')
        .and('have.class', 'text-red-400')
        .and('have.css', 'color', 'rgb(248, 113, 113)')
})

afterEach(() => {
    cy.log('Isto aqui acontece após cada teste')
})

after(() => {
    cy.log('Isto aqui acontece depois de todos os testes')
})
})        