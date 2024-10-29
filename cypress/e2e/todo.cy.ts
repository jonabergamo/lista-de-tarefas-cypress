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
});
