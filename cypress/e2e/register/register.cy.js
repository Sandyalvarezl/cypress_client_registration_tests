describe('Registro de cliente - Test Positivo', () => {
  beforeEach(() => {
    cy.visit('/auth/registerClient');
    cy.fixture('register.ok.json').as('user');
  });

  it('Completa el formulario correctamente y registra al usuario', function () {
    const user = this.user;

    
    const timestamp = Date.now();
    const emailUnico = `testpositivo${timestamp}@example.com`;
    const cuitUnico = (Math.floor(Math.random() * 90000000000) + 10000000000).toString(); 

    cy.get('[data-cy="input-razon-social"]').clear().type(user.razonSocial);
    cy.get('[data-cy="input-cuit"]').clear().type(cuitUnico);
    cy.get('[data-cy="select-provincia"]').clear().type(user.provincia);
    cy.contains('li', user.provincia).click({ force: true });
    cy.get('[data-cy="select-localidad"]').clear().type(user.localidad);
    cy.contains('li', user.localidad).click({ force: true });
    cy.get('[data-cy="input-direccion"]').clear().type(user.direccion);
    cy.get('[data-cy="input-telefono"]').clear().type(user.telefono);
    cy.get('[data-cy="input-email"]').clear().type(emailUnico);
    cy.get('[data-cy="input-confirmar-email"]').clear().type(emailUnico);
    cy.get('[data-cy="input-password"]').clear().type(user.password);
    cy.get('[data-cy="input-repetir-password"]').clear().type(user.repetirPassword);

    
    cy.contains('Cuento con establecimiento propio')
      .parent()
      .find('input[type="checkbox"], input[type="radio"]')
      .check({ force: true });

    
    cy.get('[data-cy="btn-registrarse"]').click();

    
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Cliente registrado con éxito');
    });
  });
});


describe('Registro de cliente - Test Negativo', () => {
  beforeEach(() => {
    cy.visit('/auth/registerClient');
    cy.fixture('register.bad.json').as('user');
  });

  it('Muestra errores al usar datos inválidos', function () {
    const user = this.user;

    
    if (user.razonSocial) {
      cy.get('[data-cy="input-razon-social"]').clear().type(user.razonSocial);
    }

    
    if (user.cuit) {
      cy.get('[data-cy="input-cuit"]').clear().type(user.cuit);
    }

   
    if (user.provincia) {
      cy.get('[data-cy="select-provincia"]').clear().type(user.provincia);
    }

   
    if (user.localidad) {
      cy.get('[data-cy="select-localidad"]').clear().type(user.localidad);
    }

    
    if (user.direccion) {
      cy.get('[data-cy="input-direccion"]').clear().type(user.direccion);
    }

    
    if (user.telefono) {
      cy.get('[data-cy="input-telefono"]').clear().type(user.telefono);
    }

    
    if (user.email) {
      cy.get('[data-cy="input-email"]').clear().type(user.email);
      cy.get('[data-cy="input-confirmar-email"]').clear().type(user.repetirEmail);
    }

    
    if (user.password) {
      cy.get('[data-cy="input-password"]').clear().type(user.password);
      cy.get('[data-cy="input-repetir-password"]').clear().type(user.repetirPassword);
    }

    
    if (user.establecimientoPropio) {
      cy.contains('Cuento con establecimiento propio')
        .parent()
        .find('input[type="checkbox"], input[type="radio"]')
        .check({ force: true });
    }

    
    cy.get('[data-cy="btn-registrarse"]').click();

    
    cy.url().should('include', '/auth/registerClient');

    
    cy.get('input:invalid, .text-red-500, .error-message')
      .should('exist')
      .and('be.visible');
  });
});