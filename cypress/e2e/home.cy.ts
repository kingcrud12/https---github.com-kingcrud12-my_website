describe('template spec', () => {
  beforeEach("Testing homepage", ()=>{
    cy.visit('http://localhost:3000')
  })
  it('passes', () => {
    cy.get("header").contains("Lets work together")
  })
  it('passes', () => {
    cy.get("h1").contains("Développeur web & mobile")
  })
})
