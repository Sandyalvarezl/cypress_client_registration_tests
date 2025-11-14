Cypress.Commands.add('fillInput', (selector, value) => {
  cy.get(selector, { timeout: 10000 })
    .should('be.visible')
    .clear()
    .type(value);
});


Cypress.Commands.add('selectOption', (selector, value) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible').clear().type(value);
  cy.contains('li', value, { timeout: 5000 }).click();
});


Cypress.Commands.add('toggleSwitchByLabel', (labelText) => {
  cy.contains(labelText, { timeout: 5000 })
    .parent()
    .find('input[type="checkbox"], input[type="radio"]')
    .check({ force: true });
});