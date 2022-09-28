/// <reference types="cypress" />


describe('RSS Feed App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays two todo items by default', () => {
    cy.get('.feed-container')
    cy.get('.header').get('h1').should('have.text', 'Home')
    cy.get('.feed').get('h2').get('p').get('a').get('img')
  })

  it('can change feeds', () => {
  cy.get('.nprt').click()
  cy.get('.header').get('h1').should('have.text', 'NPR Tech')
  cy.get('.feed').get('h2').get('p').get('a').get('img')

  cy.get('.nytt').click()
  cy.get('.header').get('h1').should('have.text', 'NY Times Tech')
  cy.get('.feed').get('h2').get('p').get('a').get('img')

  cy.get('.wired').click()
  cy.get('.header').get('h1').should('have.text', 'Wired')
  cy.get('.feed').get('h2').get('p').get('a').get('img')

  cy.get('.nyt').click()
  cy.get('.header').get('h1').should('have.text', 'NY Times News')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  
  cy.get('.npr').click()
  cy.get('.header').get('h1').should('have.text', 'NPR News')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  
  cy.get('.nova').click()
  cy.get('.header').get('h1').should('have.text', 'Nova')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  
  cy.get('.movie').click()
  cy.get('.header').get('h1').should('have.text', 'NPR Movies')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  
  cy.get('.art').click()
  cy.get('.header').get('h1').should('have.text', 'NPR Arts')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  
  cy.get('.nyer').click()
  cy.get('.header').get('h1').should('have.text', 'New Yorker')
  cy.get('.feed').get('h2').get('p').get('a').get('img')
  })

  it('save and delete favorites', () => {
    cy.get('img.bookmark').first().click()
    cy.get('img.bookmark').last().click()
    cy.get('.favorites').click()
    cy.get('ol').should('have.length', 1)
    cy.get('ol').get('.remove').last().click()
    cy.get('.close').click()
  })

})
