// cypress/support/component.ts

import "@testing-library/cypress/add-commands";
import { mount } from "cypress/react18"; // Use react18 se estiver usando React 18
import { ReactNode } from "react";

// Comandos adicionais podem ser definidos aqui
Cypress.Commands.add("mount", (component: ReactNode) => {
  mount(component); // Removendo a opção 'attachTo'
});
