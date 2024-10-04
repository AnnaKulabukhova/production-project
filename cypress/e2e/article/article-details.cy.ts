let currentArticleId = ''

describe('Пользователь заходит на страницу статьи', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then(article => {
      currentArticleId = article.id
      cy.visit(`http://localhost:3000/articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it('Статья успешно загружена', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist')
  })
  it('Виден список рекомендаций', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist')
  })
  it('Отправка комментария', () => {
    cy.getByTestId('ArticleDetails.Info')
    cy.getByTestId('AddCommentForm').scrollIntoView()
    cy.addComment('text')
    cy.getByTestId('CommentCard.Content').should('have.length', 1)
  })
  it('Оценка статьи', () => {
    cy.getByTestId('RatingCard')
    cy.getByTestId('RatingCard').scrollIntoView()
    cy.setRate('feedback', 4)
    cy.get('[data-selected=true').should('have.length', 4)
  })
})
