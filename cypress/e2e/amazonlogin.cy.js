import daf from "../support/commands"
import userdata from "../fixtures/Amazonlogin.json"
describe("Login spec", () => {
  beforeEach("visit webpage", () => {
    //visits amazon website
    cy.visit("https://www.amazon.in");
  });

  afterEach("Everylist", () => {
    //clearing cache
    cy.clearCookies();
  });
  //login
  it("Login", () => {
      cy.Email();
      cy.get('[name="email"]', { timeout: 25000 }).type(userdata.Loginemail).then(() => {
      //cy.get('[type="submit"]').click();
    });
      //cy.get('[type="password"]').click().type(userdata.Password);
      //cy.get("#signInSubmit").click();
  });
})
