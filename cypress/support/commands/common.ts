import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';
import type { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestid';

export const login = (username: string = 'testUser', password: string = '123') => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */
declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
