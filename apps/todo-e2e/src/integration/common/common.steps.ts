import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('The application is opened', () => {
  cy.visit('/');
});
