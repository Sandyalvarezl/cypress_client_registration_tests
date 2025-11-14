# Cypress Client Registration Test

## URL a automatizar
[https://ticketazo.com.ar/auth/registerClient](https://ticketazo.com.ar/auth/registerClient)

## Estructura del proyecto

cypress/
e2e/register/
register.cy.js # Test principal de registro
fixtures/
register.ok.json # Datos de registro válidos
register.bad.json # Datos de registro inválidos
support/
commands.js # Custom commands reutilizables
e2e.js
utils/
generators.js # Funciones auxiliares opcionales
cypress.config.js # Configuración, baseUrl, timeouts


## Instalación y ejecución

1. Instalar dependencias:

```bash
npm install

2. Abrir Cypress:
npx cypress open

3. Ejecutar test:
Seleccionar register.cy.js dentro de cypress/e2e/register/ en la interfaz de Cypress.

## Descripción de los tests

Test positivo

1. Completa todos los campos correctamente.

Selecciona provincia y localidad.

Llena y repite la contraseña.

Activa el switch “Cuento con establecimiento propio”.

Hace click en “Registrarse”.

Valida que aparezca el mensaje de éxito.


2. Test negativo (usando fixture)

Usa datos inválidos de register.bad.json.

Valida que se muestren errores de formulario sin enviar la petición a la red.

## Custom commands

fillInput(selector, value): limpia y escribe en un input.

selectFromCombobox(selector, value): selecciona opciones de un combobox/autocomplete.

checkSwitch(selector): activa switches/checkboxes.

Preparados para reutilizar en tests futuros.