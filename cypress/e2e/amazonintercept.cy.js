/// <reference types="Cypress" />
import data from "..\\..\\cypress\\fixtures\\Addtocart.json" 
describe('My First Test Suite', function() 
{
it('My FirstTest case',function() {
    cy.visit("https://www.amazon.in/");
    cy.intercept({
        method : 'HEAD',
        url : 'https://completion.amazon.in/api/2017/suggestions'
    },
     {
         statusCode : 204,
     }).as('Randomapi')
     cy.get("div > input[class='nav-input nav-progressive-attribute']").as("input").click().then(()=>{
      cy.get('@input').type(data.Type)
      cy.get("#nav-search-submit-button").click();
     })
     cy.wait('@Randomapi').then(({request,response})=>
     {
      cy.get(".a-checkbox-fancy >label>input[type='checkbox']").first().as("check").then(()=>{
        cy.get('@check').next().click();
      })
     })
     
 
 
 
 
 
 
 
 
 
 
})
 
})