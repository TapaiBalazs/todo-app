import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

Given('saved todo items are available', () => {
  window.localStorage.setItem(
    'todos',
    JSON.stringify([
      {
        id: 0,
        task: 'Develop todoapp',
        isCompleted: true,
      },
      {
        id: 1,
        task: 'Write tests',
        isCompleted: false,
      },
      {
        id: 2,
        task: 'Send in the application',
        isCompleted: false,
      },
    ])
  );
});

Then('the "No todo items available" message is displayed', () => {
  cy.get(`[data-test-id="empty-list"]`).should('be.visible');
});

Then('the {string} task is visible', (taskName: string) => {
  cy.get(`[data-test-id="${taskName}"]`).should('be.visible');
});

Then('the {string} task is completed', (taskName: string) => {
  cy.get(`[data-test-id="${taskName}_checkbox"]`).should('be.checked');
});

When('the user deletes the {string} task', (taskName: string) => {
  cy.get(`[data-test-id="${taskName}_delete"]`).should('be.visible').click();
});

Then('the {string} task is no longer visible', (taskName: string) => {
  cy.get(`[data-test-id="${taskName}"]`).should('not.exist');
});

Then(`the "Add" button should be disabled`, () => {
  cy.get(`[data-test-id="Add button"]`).should('be.visible').and('be.disabled');
});

When(
  'the user adds the {string} task using the ENTER key',
  (taskName: string) => {
    cy.get(`[data-test-id="Add new todo item"]`)
      .should('be.visible')
      .type(`${taskName}{enter}`);
  }
);

When('the user types the {string} task', (taskName: string) => {
  cy.get(`[data-test-id="Add new todo item"]`)
    .should('be.visible')
    .type(`${taskName}`);
});

When('the user deletes the input value', () => {
  cy.get(`[data-test-id="Add new todo item"]`).should('be.visible').clear();
});

Then('the required error message is displayed', () => {
  cy.get(`[data-test-id="add input error"]`)
    .should('be.visible')
    .and('contain', 'Error: Task input is required');
});

When('clicks on the "Add" button', () => {
  cy.get(`[data-test-id="Add button"]`)
    .should('be.visible')
    .and('not.be.disabled')
    .click();
});

When(
  'the user drags {string} under {string}',
  (target: string, replaceTarget: string) => {
    const targetSelector = `[data-test-id="${target}"]`;
    const replaceTargetSelector = `[data-test-id="${replaceTarget}"]`;
    cy.drag(targetSelector, replaceTargetSelector);
  }
);

Then(
  'the {string} task is under the {string} task',
  (target: string, replaceTarget: string) => {
    cy.get(`[data-test-id="${target}"]`)
      .should('be.visible')
      .prev()
      .should('contain', replaceTarget);
  }
);

When('the user presses the down arrow on {string} task', (target: string) => {
  cy.get(`[data-test-id="${target}"]`)
    .find('input')
    .focus()
    .type(`{downArrow}`, { force: true });
});

When('the user presses the up arrow on {string} task', (target: string) => {
  cy.get(`[data-test-id="${target}"]`)
    .find('input')
    .focus()
    .type(`{upArrow}`, { force: true });
});
