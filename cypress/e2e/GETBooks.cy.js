import * as GETBooks from '../support/Books/request/GETBooks.request.cy';

describe('GET Books', () => {
    it('List all books', () =>{
        GETBooks.allBooks().then((response) => {
            expect(response.status).to.equals(200);
            expect(response.body).to.be.not.null;
        })
    });
});