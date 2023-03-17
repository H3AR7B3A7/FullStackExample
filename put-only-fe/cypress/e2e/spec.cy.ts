const map = new Map<string, Translations>()

before(() => {
  cy.readFile('./src/assets/i18n/messages.de.json').then((result) => {
    map.set('de', result)
  })
  cy.readFile('./src/assets/i18n/messages.es.json').then((result) => {
    map.set('es', result)
  })
  cy.readFile('./src/assets/i18n/messages.fr.json').then((result) => {
    map.set('fr', result)
  })
  cy.readFile('./src/assets/i18n/messages.json').then((result) => {
    map.set('en', result)
  })
  cy.readFile('./src/assets/i18n/messages.nl.json').then((result) => {
    map.set('nl', result)
  })
})

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
      cy.contains(getTranslationFor('es', 'Clients')).click()
      cy.url().should('include', '/client')
    })
  })

  describe('When they click the title', () => {
    it('Then the homepage should show', () => {
      cy.visit('/clients', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', {
            value: 'es',
          })
        },
      })
      cy.contains($localize`Example Application`).click()
      cy.url().should('include', '/home')
    })
  })

  describe('When they click the title', () => {
    it('Then the homepage should show', () => {
      cy.visit('/clients')
      cy.contains($localize`Home`).click()
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
      cy.contains($localize`Light Theme`).click()
      cy.contains($localize`Dark Theme`).click()
      cy.get('.mat-app-background').should('have.class', 'dark-theme')
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
      cy.get('.mat-app-background').should('have.class', 'contrast-theme')
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
      cy.get('.mat-app-background').should('have.class', 'light-theme')
      cy.get('.mat-toolbar').should('have.css', 'color', $white)
      cy.get('.mat-toolbar').should(
        'have.css',
        'background-color',
        $primary_light
      )
    })
  })
})

function keyFor(value: string): string {
  return Object.keys(map.get('en')!.translations).find(
    (key) => map.get('en')!.translations[key] === value
  )!
}

function getTranslationFor(lang: string, i18n: string): string {
  return map.get(lang)!.translations[keyFor(i18n)]
}

interface Translations {
  translations: {
    [key: string]: string
  }
}
