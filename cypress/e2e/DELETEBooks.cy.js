import * as DELETEBooks from '../support/Books/request/DELETEBooks.request.cy';
import * as GETBooks from '../support/Books/request/GETBooks.request.cy'
import * as POSTBooks from '../support/Books/request/POSTBooks.request.cy'

describe('Delete books', () => {
    it('Delete a book', () =>{
        GETBooks.allBooks().then((resAllBooks) =>{
            DELETEBooks.deleteBook(resAllBooks.body[0].id).then((resDeleteBook) =>{
                expect(resDeleteBook.status).to.equals(200);
            })
        }) 

        // DELETEBooks.deleteBook()
    })

    it('Create and delete a book', () =>{
        POSTBooks.addBook().then((resNewBook) =>{
            DELETEBooks.deleteBook(resNewBook.body.id).then((resDeleteBook) =>{
                cy.log(resNewBook.body.ID)
                expect(resDeleteBook.status).to.equals(200);
            })
        })
    });
});