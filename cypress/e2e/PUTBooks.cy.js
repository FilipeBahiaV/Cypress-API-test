import * as PUTBooks from  '../support/Books/request/PUTBooks.request.cy.js';
import * as GETBooks from '../support/Books/request/GETBooks.request.cy';
import * as POSTBooks from '../support/Books/request/POSTBooks.request.cy.js';

describe('PUT Books', () =>{
    it('Alter Book', ()=>{
        GETBooks.allBooks().then((resAllBooks)=>{
            PUTBooks.AlterBook(resAllBooks.body[0].id).then((resChangeBook)=>{
                expect(resChangeBook.status)
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Livro alterado')
            })
        })
    });
    it('Create and alter book', () => {
        POSTBooks.addBook().then((resAddBooks)=>{
            PUTBooks.AlterBook(resAddBooks.body.id).then((resChangeBook)=>{
                expect(resChangeBook.status)
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.eq('Livro alterado')
            })
        })
    });

} )