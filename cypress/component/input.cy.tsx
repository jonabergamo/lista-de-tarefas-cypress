import React from "react";
import { mount } from "cypress/react";
import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("renders the input with correct placeholder", () => {
    mount(<Input placeholder="Enter text here" />);
    cy.get("input").should("have.attr", "placeholder", "Enter text here");
  });

  it("accepts text input and updates its value", () => {
    mount(<Input />);
    cy.get("input").type("Hello World").should("have.value", "Hello World");
  });

  it("applies custom className if provided", () => {
    mount(<Input className="custom-input" />);
    cy.get("input").should("have.class", "custom-input");
  });

  it("renders with disabled state correctly", () => {
    mount(<Input disabled />);
    cy.get("input")
      .should("be.disabled")
      .and("have.class", "disabled:cursor-not-allowed");
  });

  it("applies focus style when focused", () => {
    mount(<Input />);
    cy.get("input").focus().should("have.class", "focus-visible:ring-ring");
  });
});
