import { getByTestId } from 'cypress/support/commands/common';

let profileId = '';
describe('Пользователь заходит на страницу профиля', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`http://localhost:3000/profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('Профиль успешно загружен', () => {
    getByTestId('ProfileCard.FirstName').should('have.value', 'testName');
  });
  it('Редактирует профиль', () => {
    const newFirstName = 'NewName';
    const newLastName = 'NewLAstName';
    cy.updateProfile(newFirstName, newLastName);
    getByTestId('ProfileCard.FirstName').should('have.value', newFirstName);
    getByTestId('ProfileCard.Lastname').should('have.value', newLastName);
  });
});
