/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/alter-book.json')

function AlterBook(id){
    return cy.request({
        method: 'PUT',
        url: `Books/${id}`,
        headers:{
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook
        
    })
}
export {AlterBook};