describe('home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('should have welcome message', () => {
        cy.get('[data-cy="homepage-welcome-message"]').should('be.visible');
    })
});