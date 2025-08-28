describe('iFrame', () => {
    it('Deve poder tocar o vídeo de exempo', () => {
        cy.login()

        cy.contains('Video').click()

        cy.get('iframe[title="Video Player"]').click()
            .should('exist')
            .its('0.contentDocument.body') //array posição 0 conteúdo do body
            .then(cy.wrap) //transformar em objeto cypress
            .as('iFramePlayer') //gravar num aliase

        cy.get('@iFramePlayer')
        .find('.play-button')
        .click()

        cy.get('@iFramePlayer')
        .find('.pause-button')
        .should('be.visible')
    })

})