describe("calculadora", () => {
    it("Shows the amount of the addition to the user", () => {
      cy.visit("/");
      cy.get("#numeros").type(" ");
      cy.get("#calcular-button").click();
      cy.get("#resultado-div").should("contain", "0");
    });
  });