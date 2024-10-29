// cypress/e2e/todo.cy.ts
describe("TodoApp", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("deve adicionar uma nova tarefa", () => {
    cy.get('[data-cy="todo-input"]').type("Estudar Cypress");
    cy.get('[data-cy="add-todo"]').click();
    cy.get('[data-cy="todo-item"]').should("contain", "Estudar Cypress");
  });

  it("deve marcar uma tarefa como concluída", () => {
    cy.get('[data-cy="todo-input"]').type("Aprender TypeScript");
    cy.get('[data-cy="add-todo"]').click();
    cy.get('[data-cy="todo-item"]').first().click();
    cy.get('[data-cy="todo-item"]')
      .first()
      .should("have.class", "line-through");
  });

  it("deve remover uma tarefa", () => {
    cy.get('[data-cy="todo-input"]').type("Limpar a casa");
    cy.get('[data-cy="add-todo"]').click();
    cy.get('[data-cy="remove-todo"]').first().click();
    cy.get('[data-cy="todo-item"]').should("not.exist");
  });

  it("deve somar dois mais dois", () => {
    cy.get(":nth-child(11)").click();
    cy.get(".bg-muted > .text-2xl").should("contain.text", "2");
    cy.get(":nth-child(17)").click();
    cy.get(":nth-child(17)").should("have.class", "bg-primary/50 text-white");
    cy.get(":nth-child(11)").click();
    cy.get(".bg-muted > .text-2xl").should("contain.text", "2");
    cy.get(":nth-child(16)").click();
    cy.get(".bg-muted > .text-2xl").should("contain.text", "4");
  });

  it("deve apagar utilizando o botão C", () => {
    cy.get(":nth-child(11)").click();
    cy.get(".bg-muted > .text-2xl").should("contain.text", "2");
    cy.get(".col-span-4").click();
    cy.get(".bg-muted > .text-2xl").should("contain.text", "0");
  });

  it("deve exibir os componentes em coluna em telas pequenas", () => {
    // Ajusta a viewport para uma tela pequena
    cy.viewport(500, 800); // Largura de 500px, altura de 800px
    cy.get(".flex-col").should("exist"); // Verifica se a classe flex-col está aplicada
    cy.get(".flex-row").should("not.exist"); // Verifica se a classe flex-row não está aplicada
  });

  it("deve exibir os componentes em linha em telas médias", () => {
    cy.viewport(768, 800); // Largura de 768px
    cy.get(".flex-col").should("not.exist"); // Verifica se a classe flex-col não está aplicada
  });

  it("deve exibir os componentes em linha em telas grandes", () => {
    // Ajusta a viewport para uma tela grande
    cy.viewport(1024, 800); // Largura de 1024px, altura de 800px
    cy.get(".flex-col").should("not.exist"); // Verifica se a classe flex-col não está aplicada
  });
});
