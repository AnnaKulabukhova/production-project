export const addComment = (text: string) => {
  cy.getByTestId('AddCommentForm.Input').type(text)
  cy.getByTestId('AddCommentForm.Button').click()
}

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
declare global {
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>
    }
  }
}
