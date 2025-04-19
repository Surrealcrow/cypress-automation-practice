describe('Página de prueba', () => {
    it('debería cargar correctamente', () => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('input[data-test="username"]').should('be.visible')
    })
  })