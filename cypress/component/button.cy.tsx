import React from "react";
import { mount } from "cypress/react";
import Button from "../../src/components/button";

describe("Button Component", () => {
  it("renders the button with the correct label", () => {
    const label = "Click Me";
    mount(<Button label={label} onClick={() => {}} />);
    cy.contains(label).should("exist");
  });

  it("calls onClick when clicked", () => {
    const onClick = cy.spy();
    mount(<Button label="Click Me" onClick={onClick} />);
    cy.get("button").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });
});
