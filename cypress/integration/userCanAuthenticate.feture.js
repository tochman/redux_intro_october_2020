describe('User can authenticate', () => {

  beforeEach(() => {
    cy.server()
    cy.route('POST',"http://127.0.0.1:3000/api/auth/sign_in", "fx:user.json")
    cy.route('GET', "http://127.0.0.1:3000/api/auth/validate_token", "fx:user.json")
  });
  it('by passing in valid credentials', () => {
    cy.visit('/')
    cy.get("[data-cy='email-input']").type('thomas@craft.com')
    cy.get("[data-cy='password-input']").type('password')
    cy.get("[data-cy='submit-credentials']").click()
    cy.get("[data-cy='header-user-email']")
      .should('contain', 'Logged in as thomas@craft.com')
    cy.get("[data-cy='flash-message']")
      .should('contain', 'You are now logged in')
  });
});