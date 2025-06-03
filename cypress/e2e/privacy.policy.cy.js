describe('Política de Privacidade', () => {
  it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./src/privacy.html') // ajuste o caminho conforme a estrutura do seu projeto

    cy.contains('Política de Privacidade').should('be.visible')
  })
  it('verifica se o elemento #white-background existe e está visível', () => {
    cy.visit('./src/privacy.html') // ajuste o caminho conforme sua estrutura

    cy.get('#white-background').should('exist').and('be.visible')
  })
})


