// e2e/register/register.cy.js

const { randomEmail } = require('../../utils/generators')

describe('Ticketazo Client Registration', () => {
  beforeEach(() => {
    cy.visit('/auth/registerClient')
  })

  it('should register a valid user', () => {
    cy.fixture('register.ok.json').then((user) => {
      const email = randomEmail()  // generate a new email each time
      cy.fillInput('[data-cy="input-razon-social"]', user.razonSocial)
      cy.fillInput('[data-cy="input-cuit"]', user.cuit)
      cy.selectOption('[data-cy="select-provincia"]', user.provincia)
      cy.selectOption('[data-cy="select-localidad"]', user.localidad)
      cy.fillInput('[data-cy="input-direccion"]', user.direccion)
      cy.fillInput('[data-cy="input-telefono"]', user.telefono)
      cy.fillInput('[data-cy="input-email"]', email)
      cy.fillInput('[data-cy="input-confirmar-email"]', email)
      cy.fillInput('[data-cy="input-password"]', user.contrasena)
      cy.fillInput('[data-cy="input-confirmar-password"]', user.contrasena)
      
      if(user.establecimiento) {
        cy.toggleSwitch('input[name="tipo"]')
      }

      cy.get('[data-cy="btn-registrarse"]').click()
      
      // Optional: check success notification or URL
      cy.url().should('not.include', '/auth/registerClient')
    })
  })

  it('should show errors for invalid user', () => {
    cy.fixture('register.bad.json').then((user) => {
      cy.fillInput('[data-cy="input-razon-social"]', user.razonSocial)
      cy.fillInput('[data-cy="input-cuit"]', user.cuit)
      cy.fillInput('[data-cy="input-direccion"]', user.direccion)
      cy.fillInput('[data-cy="input-telefono"]', user.telefono)
      cy.fillInput('[data-cy="input-email"]', user.email)
      cy.fillInput('[data-cy="input-confirmar-email"]', user.email)
      cy.fillInput('[data-cy="input-password"]', user.contrasena)
      cy.fillInput('[data-cy="input-confirmar-password"]', user.contrasena)

      if(user.establecimiento) {
        cy.toggleSwitch('input[name="tipo"]')
      }

      cy.get('[data-cy="btn-registrarse"]').click()
      
      // Example: check for validation messages
      cy.get('p.text-red-500').should('exist')
    })
  })
})