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

const $black = 'rgb(1, 1, 1)'
const $white = 'rgb(254, 254, 254)'
const $primary_light = 'rgb(19, 132, 150)'
const $primary_dark = 'rgb(58, 98, 130)'
const $primary_contrast = 'rgb(255, 217, 102)'

describe('Given the user changes theme', () => {
  describe('When they choose dark theme', () => {
    it('Then the page colors should match dark theme', () => {
      cy.visit('/')
      cy.contains('Light Theme').click()
      cy.contains('Dark Theme').click()
      cy.get('.mat-toolbar').should('have.css', 'color', $white)
      cy.get('.mat-toolbar').should(
        'have.css',
        'background-color',
        $primary_dark
      )
    })
  })

  describe('When they choose contrast theme', () => {
    it('Then the page colors should match contrast theme', () => {
      cy.visit('/')
      cy.contains('Light Theme').click()
      cy.contains('Contrast Theme').click()
      cy.get('.mat-toolbar').should('have.css', 'color', $black)
      cy.get('.mat-toolbar').should(
        'have.css',
        'background-color',
        $primary_contrast
      )
    })
  })

  describe('When they choose light theme', () => {
    it('Then the page colors should match light theme', () => {
      cy.visit('/')
      cy.contains('Light Theme').click()
      cy.contains('Contrast Theme').click()
      cy.contains('Contrast Theme').click()
      cy.contains('Light Theme').click()
      cy.get('.mat-toolbar').should('have.css', 'color', $white)
      cy.get('.mat-toolbar').should(
        'have.css',
        'background-color',
        $primary_light
      )
    })
  })
})
