describe('Check the end to end stories', () => {
  beforeEach(() => {

    cy.visit('http://localhost:3000')
  })

  it('display chat box', () => {

    cy.get('.chat-box')
  })

  it('should navigate to settings', () => {
    cy.get('.settings').click()
    cy.url().should('include', '/settings')
  })


  it('should navigate to settings', () => {
    cy.get('.suggestions').children().should('have.length', 3)
  })

  it('typing in text box the message should be added', () => {
    cy.intercept(
      { method: "POST", url: "https://run.mocky.io/v3/093fc88b-1c4f-4cff-96bb-72f84dcbc2f4" },
      {
        data: {
          "id": "23d878e0-50f2-45a0-96db-af4a3db32ca8",
          "content": "dolorum error maiores",
          "timestamp": "2025-02-10T20:19:41.217Z",
          "type": "\"ai\""
        }
      }
    )
    cy.get('.input-box').type("hey hello")
    cy.get('.send-btn').click()
    cy.wait(2000)
    cy.get('.all-messages').children().should('have.length', 5)
  })

})
