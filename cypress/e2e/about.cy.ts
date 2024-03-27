describe('template spec', () => {
    beforeEach("Testing homepage", ()=>{
      cy.visit("http://localhost:3001")
    })
    it('about section link works fine', () => {
      cy.getByData("about").find("a").contains("A propos").click()
      cy.location("pathname").should("equal", "/about")
      //cy.getByData("download").find("a").contains("Download Resumé").click()
    })
  })
  