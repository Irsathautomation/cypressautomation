/// <reference types = "cypress" /> 

import { each } from "cypress/types/bluebird";
import { forEach } from "cypress/types/lodash";

describe("Login spec", () => {
  beforeEach("visit webpage", () => {
    //visits amazon website
    cy.visit("https://www.amazon.in");
  });

  afterEach("Everylist", () => {
    //clearing cache
    cy.clearCookies();

  });
  it('amazonapi',()=>{
    cy.intercept({
        method : "POST",
        url:"https://unagi-eu.amazon.com/1/events/com.amazon.eel.amazonlive.metrics.nexus"
    },{
        statusCode:200,
        body:{}
    })
    cy.get("div .as-title-block-left > span")
  })
})