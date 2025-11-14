import { randomEmail } from '../../utils/generators';

describe('Register Client', () => {
  const user = {
    razonSocial: 'Mi Empresa S.A.',
    cuit: '20304050607',
    provincia: 'Córdoba',
    localidad: 'Córdoba',
    direccion: 'Calle Falsa 123',
    telefono: '3511234567',
    email: randomEmail(),
    contrasena: 'Password123!'
  };

  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerClient');
  });

  it('should register a valid user', () => {
    cy.fillInput('[data-cy="input-razon-social"]', user.razonSocial);
    cy.fillInput('[data-cy="input-cuit"]', user.cuit);
    cy.selectOption('[data-cy="select-provincia"]', user.provincia);
    cy.selectOption('[data-cy="select-localidad"]', user.localidad);
    cy.fillInput('[data-cy="input-direccion"]', user.direccion);
    cy.fillInput('[data-cy="input-telefono"]', user.telefono);
    cy.fillInput('[data-cy="input-email"]', user.email);
    cy.fillInput('[data-cy="input-confirmar-email"]', user.email);
    cy.fillInput('[data-cy="input-password"]', user.contrasena);
    cy.fillInput('[data-cy="input-repetir-password"]', user.contrasena);

    
    cy.toggleSwitchByLabel('Cuento con establecimiento propio');

    
    cy.get('[data-cy="btn-registrarse"]').click();

    
    cy.on('window:alert', (str) => {
      expect(str).to.include('Cliente registrado con éxito');
    });

    
    cy.url({ timeout: 15000 }).should('include', '/auth/login');
  });
});