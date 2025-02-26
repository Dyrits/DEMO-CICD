/// <reference types="cypress" />

describe("Counter", () => {
  it("should increment the counter by 2", () => {
    cy.visit("/")
    cy.get(".increment").click();
    cy.get(".increment").click();
    cy.contains("count is 4")
  })
})