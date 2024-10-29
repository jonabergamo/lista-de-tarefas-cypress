import React from "react";
import { mount } from "cypress/react";
import Calculator from "@/components/calculator";

describe("Calculator Component", () => {
  beforeEach(() => {
    mount(<Calculator />);
  });

  it("renders the calculator with display set to 0 initially", () => {
    cy.contains(".text-2xl", "0").should("exist");
  });

  it("displays number when a button is clicked", () => {
    cy.contains("button", "1").click();
    cy.contains(".text-2xl", "1").should("exist");
  });

  it("allows concatenating numbers", () => {
    cy.contains("button", "1").click();
    cy.contains("button", "2").click();
    cy.contains(".text-2xl", "12").should("exist");
  });

  it("performs addition operation correctly", () => {
    cy.contains("button", "5").click();
    cy.contains("button", "+").click();
    cy.contains("button", "3").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "8").should("exist");
  });

  it("performs subtraction operation correctly", () => {
    cy.contains("button", "9").click();
    cy.contains("button", "-").click();
    cy.contains("button", "4").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "5").should("exist");
  });

  it("performs multiplication operation correctly", () => {
    cy.contains("button", "3").click();
    cy.contains("button", "*").click();
    cy.contains("button", "4").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "12").should("exist");
  });

  it("performs division operation correctly", () => {
    cy.contains("button", "8").click();
    cy.contains("button", "/").click();
    cy.contains("button", "2").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "4").should("exist");
  });

  it("displays error for division by zero", () => {
    cy.contains("button", "8").click();
    cy.contains("button", "/").click();
    cy.contains("button", "0").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "Infinity").should("exist"); // ou conforme a mensagem de erro definida
  });

  it("clears the display when 'C' is clicked", () => {
    cy.contains("button", "7").click();
    cy.contains("button", "C").click();
    cy.contains(".text-2xl", "0").should("exist");
  });

  it("adds decimal points correctly", () => {
    cy.contains("button", "3").click();
    cy.contains("button", ".").click();
    cy.contains("button", "1").click();
    cy.contains(".text-2xl", "3.1").should("exist");
  });

  it("supports multi-step calculations", () => {
    cy.contains("button", "5").click();
    cy.contains("button", "+").click();
    cy.contains("button", "2").click();
    cy.contains("button", "=").click();
    cy.contains("button", "*").click();
    cy.contains("button", "3").click();
    cy.contains("button", "=").click();
    cy.contains(".text-2xl", "21").should("exist");
  });
});
