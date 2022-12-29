import * as POSTBooks from '../support/Books/request/POSTBooks.request.cy.js';

context('POST Books', () =>{
    it('Add a new Book', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Livro');
        })
    });
})