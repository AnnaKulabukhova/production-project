export const setRate = (feedback: string = 'feedback', starsCount: number = 5) => {
  cy.getByTestId(`StarRating.${starsCount}`).click()
  cy.getByTestId('RatingCard.Input').type(feedback)
  cy.getByTestId('RatingCard.Send').click()
}

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
declare global {
  namespace Cypress {
    interface Chainable {
      setRate(feedback: string, starsCount: number): Chainable<void>
    }
  }
}
