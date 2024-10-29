import { mount } from "cypress/react";
import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  const label = "Button Test";

  it("renders with the correct label", () => {
    mount(<Button>{label}</Button>);
    cy.contains(label).should("exist");
  });

  it("triggers onClick handler when clicked", () => {
    const onClick = cy.spy();
    mount(<Button onClick={onClick}>{label}</Button>);
    cy.get("button").click();
    cy.wrap(onClick).should("have.been.calledOnce");
  });

  it("renders as a child element when 'asChild' is true", () => {
    mount(
      <Button asChild>
        <a href="/test">{label}</a>
      </Button>
    );
    cy.get("a")
      .contains(label)
      .should("exist")
      .and("have.attr", "href", "/test");
  });

  it("applies custom classes passed through 'className' prop", () => {
    const customClass = "custom-class";
    mount(<Button className={customClass}>{label}</Button>);
    cy.get("button").should("have.class", customClass);
  });
});
