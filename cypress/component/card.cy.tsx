import React from "react";
import { mount } from "cypress/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

describe("Card Component", () => {
  it("renders the Card component with default styles", () => {
    mount(<Card>Card Content</Card>);
    cy.get("div").should("have.class", "bg-card text-card-foreground");
  });

  it("accepts custom classes in Card component", () => {
    const customClass = "custom-card-class";
    mount(<Card className={customClass}>Card Content</Card>);
    cy.get("div").should("have.class", customClass);
  });

  describe("CardHeader Component", () => {
    it("renders CardHeader with default styles", () => {
      mount(<CardHeader>Header Content</CardHeader>);
      cy.get("div").should("have.class", "flex flex-col space-y-1.5 p-6");
    });

    it("accepts custom classes in CardHeader", () => {
      const customClass = "custom-header-class";
      mount(<CardHeader className={customClass}>Header Content</CardHeader>);
      cy.get("div").should("have.class", customClass);
    });
  });

  describe("CardTitle Component", () => {
    it("renders CardTitle with default styles", () => {
      mount(<CardTitle>Card Title</CardTitle>);
      cy.get("h3").should(
        "have.class",
        "font-semibold leading-none tracking-tight"
      );
    });

    it("accepts custom classes in CardTitle", () => {
      const customClass = "custom-title-class";
      mount(<CardTitle className={customClass}>Card Title</CardTitle>);
      cy.get("h3").should("have.class", customClass);
    });
  });

  describe("CardDescription Component", () => {
    it("renders CardDescription with default styles", () => {
      mount(<CardDescription>Card Description</CardDescription>);
      cy.get("p").should("have.class", "text-sm text-muted-foreground");
    });

    it("accepts custom classes in CardDescription", () => {
      const customClass = "custom-description-class";
      mount(
        <CardDescription className={customClass}>
          Card Description
        </CardDescription>
      );
      cy.get("p").should("have.class", customClass);
    });
  });

  describe("CardContent Component", () => {
    it("renders CardContent with default styles", () => {
      mount(<CardContent>Card Content</CardContent>);
      cy.get("div").should("have.class", "p-6 pt-0");
    });

    it("accepts custom classes in CardContent", () => {
      const customClass = "custom-content-class";
      mount(<CardContent className={customClass}>Card Content</CardContent>);
      cy.get("div").should("have.class", customClass);
    });
  });

  describe("CardFooter Component", () => {
    it("renders CardFooter with default styles", () => {
      mount(<CardFooter>Footer Content</CardFooter>);
      cy.get("div").should("have.class", "flex items-center p-6 pt-0");
    });

    it("accepts custom classes in CardFooter", () => {
      const customClass = "custom-footer-class";
      mount(<CardFooter className={customClass}>Footer Content</CardFooter>);
      cy.get("div").should("have.class", customClass);
    });
  });

  describe("Card Component Composition", () => {
    it("renders Card with all subcomponents and verifies structure and styles", () => {
      mount(
        <Card className="custom-card">
          <CardHeader className="custom-header">
            <CardTitle className="custom-title">Card Title</CardTitle>
            <CardDescription className="custom-description">
              Card Description
            </CardDescription>
          </CardHeader>
          <CardContent className="custom-content">Card Content</CardContent>
          <CardFooter className="custom-footer">Footer Content</CardFooter>
        </Card>
      );

      // Verifica a estrutura geral e classes do Card
      cy.get("div.custom-card").should(
        "have.class",
        "bg-card text-card-foreground"
      );

      // Verifica o CardHeader
      cy.get("div.custom-header")
        .should("exist")
        .and("have.class", "flex flex-col space-y-1.5 p-6");

      // Verifica o CardTitle
      cy.get("h3.custom-title")
        .should("contain.text", "Card Title")
        .and("have.class", "font-semibold leading-none tracking-tight");

      // Verifica o CardDescription
      cy.get("p.custom-description")
        .should("contain.text", "Card Description")
        .and("have.class", "text-sm text-muted-foreground");

      // Verifica o CardContent
      cy.get("div.custom-content")
        .should("contain.text", "Card Content")
        .and("have.class", "p-6 pt-0");

      // Verifica o CardFooter
      cy.get("div.custom-footer")
        .should("contain.text", "Footer Content")
        .and("have.class", "flex items-center p-6 pt-0");
    });
  });
});
