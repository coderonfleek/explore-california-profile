describe("Login test", () => {

    it("Can login with email and password", () => {

        //Navigate to home page
        cy.visit("http://localhost:8080");

        cy.get(".login-email").type("test@mail.com");
        cy.get(".login-password").type("test");

        cy.get(".login-button").click();

        cy.url().should("include", "/profile");
    })
})