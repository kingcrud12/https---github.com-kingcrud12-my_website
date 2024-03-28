describe('template spec', () => {
  beforeEach("Testing homepage", ()=>{
    cy.visit(Cypress.env("baseUrl"))
  })
  it('passes', () => {
    cy.get("header").contains("Lets work together")
  })
  it('passes', () => {
    cy.get("h1").contains("Développeur web & mobile")
  })
})
