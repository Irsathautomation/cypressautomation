/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
it('My FirstTest case',function() {
    //Get
    cy.request('GET','https://restful-booker.herokuapp.com/booking').then((res)=>{
        expect(res.status).to.eq(200)
        cy.log(res.body)
    })
    //POST
    cy.request('POST','https://restful-booker.herokuapp.com/booking',{
        "firstname" : "Jim",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    }).then((res)=>{
        expect(res.body).to.have.property("bookingid")
        cy.log(res.body)
        cy.log(res.statusText)
    })
})})