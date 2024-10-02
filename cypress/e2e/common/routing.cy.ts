import { selectByTestId } from 'cypress/helpers/selectByTestid'

describe('Роутинг', () => {
  describe('Пользователь не авторизован', () => {
    it('Переход на главную страницу', () => {
      cy.visit('http://localhost:3000')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Переход открывает страницу профиля', () => {
      cy.visit('http://localhost:3000/profile/1')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('Пользователь открывает несуществующий маршрут', () => {
      cy.visit('http://localhost:3000/dfhftgjh')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('Пользователь авторизован', () => {
    beforeEach(() => {
      cy.login()
    })
    it('Переход открывает страницу профиля', () => {
      cy.visit('http://localhost:3000/profile/1')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    // it('Переход на страницу со списком статей', () => {
    //   cy.visit('http://localhost:3000/articles')
    //   // cy.wait(2000)
    //   cy.get(selectByTestId('ArticlesPage'), { timeout: 15000 }).should('exist')
    // })
  })
})
