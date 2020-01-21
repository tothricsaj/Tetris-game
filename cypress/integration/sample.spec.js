describe('Crucial elements of Tetris-app', () => {
    it('Does not do much!', () => {
        cy.visit("/");
        cy.get('.title').contains('Tetris game'); // this is just a little trying

        cy.get('#gameView').children('#canvas');

        cy.get('#scores');
    })
});
