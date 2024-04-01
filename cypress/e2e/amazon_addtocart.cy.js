/// <reference types = "cypress" /> 
import data from "../fixtures/Addtocart.json"
describe('Add products', () => {
  it('Addingfashionproducts', () => {
    //visits amazon website
    cy.visit("https://www.amazon.in");
    //dropdown concept
    cy.get("div select[aria-describedby='searchDropdownDescription']")
    .should("not.be.visible")
    .then(()=>{
      cy.get("div select[aria-describedby='searchDropdownDescription']")
      .select(3,{force: true})
    })
    //input text concept
    cy.get("[type='text']").type(data.Type)
    cy.get(".left-pane-results-container")
    .then(()=>
    {
      cy.get("[type='submit']").click();
    });
    //adding first product which available early (Checkbox & searching)
    cy.get("label input[type='checkbox']").first().check({force:true});
    if(cy.get('.navFooterBackToTopText').should("exist")){
      cy.get('.navFooterBackToTopText',{timeout:"4000"}).click();
    }
    //adding first product
    cy.wait(6000);
    cy.get('div[data-cy="title-recipe"] >h2 >a').eq(0).should("have.attr","href").then(()=>{
      cy.get('div[data-cy="title-recipe"] >h2 >a').first().invoke("removeAttr","target").click();
    })

    //After selecting new product , add them in cart
    cy.contains("Add to Cart").click()

    //navigate back to parent window 
    cy.go(-2);
  
    //go to the cart
    cy.get("#nav-cart:visible").click().then(()=>{
      //Remove the product
      cy.get("div span [data-action='delete']").click()
    })
    })
    
})