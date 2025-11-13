// support/commands.js

// Fill a normal input
Cypress.Commands.add('fillInput', (selector, value) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible').clear().type(value)
})

// Select option from a combobox/autocomplete
Cypress.Commands.add('selectOption', (selector, value) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible').clear().type(value)
  cy.contains('li', value, { timeout: 5000 }).click()
})

// Toggle a switch (like "Cuento con establecimiento propio")
Cypress.Commands.add('toggleSwitch', (selector) => {
  cy.get(selector, { timeout: 5000 }).click({ force: true })
})