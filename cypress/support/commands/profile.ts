import { getByTestId } from './common'

export const updateProfile = (firstName: string, lastName: string) => {
  getByTestId('EditableProfileCardHeader.EditButton').click()
  getByTestId('ProfileCard.FirstName').clear().type(firstName)
  getByTestId('ProfileCard.Lastname').clear().type(lastName)
  getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: {
      Authorization: 'sdg'
    },
    body: {
      id: '4',
      first: 'testName',
      lastName: 'testLastName',
      age: 18,
      currency: 'RUB',
      country: 'Armenia',
      city: 'Moscow',
      username: 'testUser',
      avatar: 'https://polinka.top/pics1/uploads/posts/2024-01/1704877097_polinka-top-p-koshka-pushistaya-kartinka-37.jpg'
    }
  })
}

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstName: string, lastName: string): Chainable<void>
      resetProfile(profileId: string): Chainable<void>
    }
  }
}
