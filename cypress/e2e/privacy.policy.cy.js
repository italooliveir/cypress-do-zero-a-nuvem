describe('Política de Privacidade', () => {
  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html') // ajuste o caminho conforme a estrutura do seu projeto
    cy.contains('Política de Privacidade').should('be.visible')
  })

  Cypress._.times(5, (i) => {
    it(`verifica se o elemento #white-background existe e está visível - tentativa ${i + 1}`, () => {
      cy.visit('./src/privacy.html')
      cy.get('#white-background').should('exist').and('be.visible')
    })
  })
})


