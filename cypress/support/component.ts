// cypress/support/component.ts

import "@testing-library/cypress/add-commands";
import { mount } from "cypress/react18"; // Use react18 se estiver usando React 18
import { ReactNode } from "react";
import "../../src/index.css"; // Ajuste para o caminho do CSS principal do seu projeto

// Comandos adicionais podem ser definidos aqui
Cypress.Commands.add("mount", (component: ReactNode) => {
  mount(component); // Removendo a opção 'attachTo'
});
