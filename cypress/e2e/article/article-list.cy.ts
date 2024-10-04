import { getByTestId } from 'cypress/support/commands/common'

describe('Пользователь заходит на страницу со списком статей', () => {
  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('http://localhost:3000/articles')
    })
  })
  it('Статьи успешно подгружаются', () => {
    getByTestId('ArticleList').should('exist')
    getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
})
