describe("Meli app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3000");
  });

  it("contains a first notification message", () => {
    cy.contains("¡Obtén lo que necesitas ahora!");
  });

  describe("Search items", () => {
    it("search input can be typed", () => {
      cy.get("#search-input").type("iPhone 11");
    });

    it("can search using the button", () => {
      cy.get("#search-button").click();
    });

    it("should show loading notification", () => {
      cy.contains("Buscando...");
    });
  });

  describe("List result", () => {
    it("should have 4 items rendered", () => {
      cy.get("#list-items").children().should("have.length", 4);
    });

    it("when type a random item search renders nothing", () => {
      cy.get("#search-input").type("askdokoasdokakosdo");
      cy.get("#search-button").click();

      cy.get("#list-items").children().should("have.length", 0);
      cy.contains("No se encontró nada.");
    });

    it("should generate an error with specific cases", () => {
      cy.get("#search-input").clear();

      cy.get("#search-input").type("gol");
      cy.get("#search-button").click();

      cy.get("#list-items").children().should("have.length", 0);
      cy.contains("Ocurrió un error!");
    });
  });

  describe("Item detail", () => {
    it("should navigate to item details", () => {
      cy.get("#search-input").clear();

      cy.get("#search-input").type("iPhone 11");
      cy.get("#search-button").click();

      cy.get("#item").click();

      cy.contains("Descripción del producto");
    });
  });

});