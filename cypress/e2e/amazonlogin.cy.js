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
     cy.get('[data-nav-ref="nav_ya_signin"]', { timeout: 7000 }).click();
      //cy.get('[name="email"]', { timeout: 25000 }).type(/*enter the username*/).then(() => {
      // cy.get('[type="submit"]').click();
      //});
      //cy.get('[type="password"]').click().type(/*enter correct password*/);
      //cy.get("#signInSubmit").click();
  });
});
