describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')//visita um HTML estatico que ta dentro da pasta src
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Italo')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('teste@teste.com')
    cy.get('#open-text-area').type(
      'Texto longo que será digitado instantaneamente, para simular uma entrada rápida de dados.',{ delay: 0 })
    cy.contains('button', 'Enviar').click()
    
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Italo')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('email-invalido.com') // email inválido
    cy.get('#open-text-area').type('Teste com e-mail inválido.')
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('o campo de telefone continua vazio quando preenchido com valor não-numérico', () => {
    cy.get('#firstName').type('Italo')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone').type('abcdefg').should('have.value', '')//verifica se o valor do campo continua vazio 
    cy.get('#open-text-area').type('Teste com valor não-numérico no telefone.',)
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#firstName').type('Italo')
    cy.get('#lastName').type('Oliveira')
    cy.get('#email').type('teste@teste.com')
    cy.get('#phone-checkbox').check() // checkbox torna telefone obrigatório
    cy.get('#open-text-area').type('Testando campo obrigatório de telefone.',)
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName').type('Italo').should('have.value', 'Italo').clear().should('have.value', '')
    cy.get('#lastName').type('Oliveira').should('have.value', 'Oliveira').clear().should('have.value', '')
    cy.get('#email').type('italo@email.com').should('have.value', 'italo@email.com').clear().should('have.value', '')
    cy.get('#phone').type('123456789').should('have.value', '123456789').clear().should('have.value', '')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })
it('seleciona um produto (YouTube) por seu texto', () =>{
cy.get('#product')
.select('YouTube')
.should('have.value', 'youtube')
})
it('seleciona um produto (Mentoria) por seu valor (value)', () => {
  cy.get('#product')
    .select('mentoria') // seleciona a opção pelo atributo value
    .should('have.value', 'mentoria') // verifica se foi realmente selecionado
})
it('seleciona um produto (Blog) por seu índice', () => {
  cy.get('#product')
    .select(1) // índice 1 corresponde à opção "Blog"
    .should('have.value', 'blog') // verifica se o value selecionado é "blog"
})
it('marca o tipo de atendimento "Feedback"', () => {
  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
})
it('marca cada tipo de atendimento', () => {
  
  cy.get('input[type="radio"][value="ajuda"]')
    .check()
    .should('be.checked')

  cy.get('input[type="radio"][value="elogio"]')
    .check()
    .should('be.checked')

  cy.get('input[type="radio"][value="feedback"]')
    .check()
    .should('be.checked')
})
it('marca cada tipo de atendimento', () => {
  cy.get('input[type="radio"][name="atendimento-tat"]')
    .each(($radio) => {
      cy.wrap($radio)
        .check()
        .should('be.checked')
      })
})
it('marca ambos checkboxes, depois desmarca o último', () => {
  // Marca ambos os checkboxes
  cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')

    // Desmarca o último checkbox (Telefone)
  cy.get('input[type="checkbox"]')
    .last()
    .uncheck()
    .should('not.be.checked')

    // Verifica que o primeiro ainda está marcado (E-mail)
  cy.get('input[type="checkbox"]')
    .first()
    .should('be.checked')
  })
  it('seleciona um arquivo da pasta fixtures', () => {
  cy.get('input[type="file"]')//Seleciona o campo de input de arquivo
    .selectFile('cypress/fixtures/example.json')//Simula o upload do arquivo
    .should(input => { //é feita uma verificação personalizada depois que o arquivo foi enviado.
      expect(input[0].files[0].name).to.equal('example.json')// Verifica o nome do arquivo selecionado
    })
})
it('seleciona um arquivo simulando um drag-and-drop', () => {
  cy.get('input[type="file"]')//Seleciona o campo de input de arquivo
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })// arrasta até o campo do upload
    .should(input => { //é feita uma verificação personalizada depois que o arquivo foi enviado.
      expect(input[0].files[0].name).to.equal('example.json')// Verifica o nome do arquivo selecionado
    })
})
it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
  cy.fixture('example.json').as('sampleFile') // Cria um alias para o arquivo da fixture
// importar dados de teste que estão dentro da pasta
  cy.get('input[type="file"]').selectFile('@sampleFile').should(input => {
    expect(input[0].files[0].name).to.equal('example.json')  // Verifica o nome do arquivo selecionado
  })
})
it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
   cy.get('#privacy a')
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', 'privacy.html')
  })
   it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
     cy.get('#privacy a')
      .invoke('removeAttr', 'target')
      .click()

    cy.url().should('include', 'privacy.html')
    cy.contains('Política de Privacidade') // ou outro texto que comprove que a página carregou
  })
})


