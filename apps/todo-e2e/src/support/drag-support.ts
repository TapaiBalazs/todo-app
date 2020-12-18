/** based on https://stackoverflow.com/questions/55361499/how-to-implement-drag-and-drop-in-cypress-test */

export function drag(dragSelector: string, dropSelector: string) {
  cy.get(dragSelector).should('exist').get(dropSelector).should('exist');

  const draggable = Cypress.$(dragSelector)[0]; // Pick up this
  const droppable = Cypress.$(dropSelector)[0]; // Drop over this

  const coords = droppable.getBoundingClientRect();
  draggable.dispatchEvent(<MouseEvent>new MouseEvent('mousedown'));
  draggable.dispatchEvent(
    <MouseEvent>new MouseEvent('mousemove', { clientX: 0, clientY: 20 })
  );
  draggable.dispatchEvent(
    <MouseEvent>new MouseEvent('mousemove', {
      clientX: coords.left,
      clientY: coords.top + 20,
    })
  );
  draggable.dispatchEvent(new MouseEvent('mouseup'));
  return cy.get(dropSelector);
}
