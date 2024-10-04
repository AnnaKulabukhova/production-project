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
  it('Статьи успешно подгружаются с помощью фикстур', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' })
    getByTestId('ArticleList').should('exist')
    getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })
  it.skip('Пример заскипанного теста - тест запускаться не будет', () => {
    getByTestId('ArticleList').should('exist')
    getByTestId('dgdhfdhf').should('exist')
  })
})
