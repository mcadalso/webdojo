import { personal, company } from '../fixtures/consultancy.json'  // ou escolher: import {personal, company} from '../fixtures/consultancy.json' e apaga-se 
// ou ler tudo - import consultancyData from '../fixtures/consultancy.json'   colocando nas funcoes const consultancyForm = consultancyData.personal e passando a usar  cy.get('#name').type(consultancyForm.name) p.ex.

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
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve solicitar consultoria in company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validateConsultancyModal()
    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()
        /*        const requiredFields = [
                    { label: 'Nome Completo', message: 'Campo obrigatório' },
                    { label: 'Email', message: 'Campo obrigatório' },
                    { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
                ]
        
                requiredFields.forEach(({ label, message }) => {
                    cy.validateMandatoryFields(label, message)
                })*/
        cy.validateMandatoryFields('Nome Completo', 'Campo obrigatório')
        cy.validateMandatoryFields('Email', 'Campo obrigatório')
        cy.validateMandatoryFields('termos de uso', 'Você precisa aceitar os termos de uso')
    })

    afterEach(() => {
        cy.log('Isto aqui acontece após cada teste')
    })

    after(() => {
        cy.log('Isto aqui acontece depois de todos os testes')
    })
})        