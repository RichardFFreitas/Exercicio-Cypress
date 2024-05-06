describe('Testar as funcionalidades de inclusão, alteração e remoção', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app')
  })
  it('Deve incluir um contato', () => {
    cy.get('input[type="text"]').type('Automação')
    cy.get('input[type="email"]').type('Automacao@automacao.com.br')
    cy.get('input[type="tel"]').type('229997685634')
    cy.get('.adicionar').click()
  })
  it('Deve alterar informação de um contato', () => {
    cy.get('.edit').first().click()
    cy.get('input[type="text"]').type(' batista')
    cy.get('.alterar').click()
  })
  it('Deve excluir um contato', () => {
    cy.get('.delete').first().click()
  })
})