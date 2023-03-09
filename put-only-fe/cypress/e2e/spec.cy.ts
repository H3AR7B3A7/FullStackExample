describe('Given the user navigates the webpage', () => {
  describe('When they first arrive', () => {
    it('Then the homepage should show', () => {
      cy.visit('/')
      cy.url().should('include', '/home')
    })
  })

  describe('When they click clients', () => {
    it('Then clients should show', () => {
      cy.visit('/')
      cy.contains('Clients').click()
      cy.url().should('include', '/client')
    })
  })

  describe('When they click the title', () => {
    it('Then the homepage should show', () => {
      cy.visit('/clients')
      cy.contains('Example Application').click()
      cy.url().should('include', '/home')
    })
  })

  describe('When they click the title', () => {
    it('Then the homepage should show', () => {
      cy.visit('/clients')
      cy.contains('Home').click()
      cy.url().should('include', '/home')
    })
  })
})
