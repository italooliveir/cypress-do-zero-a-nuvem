
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
  cy.get('#firstName').type('Italo')
  cy.get('#lastName').type('Oliveira')
  cy.get('#email').type('italo@email.com')
  cy.get('#open-text-area').type('Mensagem enviada com sucesso.', { delay: 0 })
  cy.contains('button', 'Enviar').click()
})
