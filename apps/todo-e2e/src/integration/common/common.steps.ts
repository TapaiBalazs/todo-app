import { Before, Given, When } from 'cypress-cucumber-preprocessor/steps';

Before(() => {
  window.localStorage.clear();
});

Given('the application is opened', () => {
  cy.visit('/');
});

When('no todo items were saved previously', () => {
  window.localStorage.setItem('todos', null);
});
