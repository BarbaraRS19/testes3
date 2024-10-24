describe('Login User', () => {
    it('deve fazer login e redirecionar para o painel', () => {
        cy.visit('/login'); 
        cy.get('input[name=username]').type('testuser'); 
        cy.get('input[name=password]').type('password123'); 
        cy.get('button[type=submit]').click(); 
        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible'); 
    });
});
