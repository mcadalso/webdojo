describe('Gerenciamento de perfis de GitHub', () => {

    before(() => {
        cy.log('Isto acontece antes de todos os testes')
    })

    beforeEach(() => {
        cy.login()
        cy.log('Isto aqui acontece antes de todos os testes')
        cy.goTo('Tabela', 'Perfis do GitHub')
        //        cy.fixture('consultancy.json').as('consultancyData') // ou cy.fixture('consultancy') Obriga em vez de ()=> colocar function() e usar  const consultancyForm = this.consultancyData.personal (sem o import consultancyData from '../fixtures/consultancy.json' no inicio do .js)
    })
    
    it('Deve poder cadastrar um novo perfil do github', () => {

        /*cy.fillGithubForm('Fernando Papito', 'qapapito', 'QA')
        cy*.fillGithubForm('Fernando Papito', 'papitodev', 'QA')

/*        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('qapapito')
        cy.get('#profile').type('QA')
        cy.submitGithubForm()

        cy.get('#name').type('Fernando Papito')
        cy.get('#username').type('papitodev')
        cy.get('#profile').type('QA')
        cy.submitGithubForm()*/

        /*campo chave - unico*/

        const tableData = [
            { name: 'Fernando Papito', username: 'qapapito', profile: 'QA' },
            { name: 'Fernando Papito', username: 'papitodev', profile: 'QA' },
        ]

        tableData.forEach(({ name, username, profile }) => {
            cy.fillGithubForm(name, username, profile)
        
            cy.contains('table tbody tr', username)
                .should('be.visible')
                .as('trKey')

            cy.get('@trKey')
                .contains('td', name)
                .should('be.visible')

            cy.get('@trKey')
                .contains('td', profile)
                .should('be.visible')

        })

        /*cy.contains('table tbody tr', 'papitodev')
            .should('be.visible')
            .as('trProfile')

        cy.get('@trProfile')
            .contains('td', 'Fernando Papito')
            .should('be.visible')

        cy.get('@trProfile')
            .contains('td', 'QA')
            .should('be.visible')*/
    })


    it('Deve verificar os campos obrigatórios', () => {
        cy.submitGithubForm()

        cy.validateMandatoryFields('Nome', 'Nome é obrigatório')
        cy.validateMandatoryFields('Username do GitHub', 'Username é obrigatório')
        cy.validateMandatoryFields('Perfil', 'Perfil é obrigatório')
    })

    afterEach(() => {
        cy.log('Isto aqui acontece após cada teste')
    })

    after(() => {
        cy.log('Isto aqui acontece depois de todos os testes')
    })

})