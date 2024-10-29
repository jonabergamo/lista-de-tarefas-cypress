declare namespace Cypress {
  interface Chainable {
    mount(component: React.ReactNode): Chainable<Element>;
  }
}
