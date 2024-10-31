# Todo-List-Cypress

A highly productive Todo List application with an integrated calculator, designed to enhance both your task management and quick-calculation needs. Built with Vite and React, this project leverages Cypress for rigorous testing, ensuring a smooth user experience. GitHub Actions is set up to automate testing through CI/CD.

## Features

- **Todo List Management**: Effortlessly create, edit, delete, and organize your tasks, improving productivity and organization.
- **Built-in Calculator**: Perform quick calculations directly within the app, reducing the need for switching between tools.
- **Component and E2E Testing**: Reliable Cypress tests to validate both individual components and the entire application, ensuring quality and robustness.
- **CI/CD Integration**: GitHub Actions automate Cypress tests for seamless continuous integration and deployment.

## Getting Started

Follow these instructions to set up the project locally and start working on it.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jonabergamo/Todo-List-Cypress.git
   cd Todo-List-Cypress
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Running Tests

This project uses Cypress for both component and end-to-end tests, allowing you to ensure everything works as expected.

- **Run Cypress Test Runner (UI mode)**:

  ```bash
  npm run cypress
  ```

- **Run End-to-End (E2E) Tests**:

  ```bash
  npm run cypress:e2e
  ```

- **Run Component Tests**:

  ```bash
  npm run cypress:component
  ```

## Project Structure

- **src/**: Contains the core application code (components, styles, etc.).
- **cypress/**: Houses all Cypress test specs for both E2E and component testing.
- **.github/workflows/**: Configuration files for GitHub Actions used in CI/CD.

## Technologies Used

- **[Vite](https://vitejs.dev/)**: Lightning-fast development server and build tool.
- **[React](https://reactjs.org/)**: Component-based JavaScript library for building user interfaces.
- **[Cypress](https://www.cypress.io/)**: Powerful tool for automated UI and integration testing.
- **[GitHub Actions](https://github.com/features/actions)**: Workflow automation for testing and deployment.

## CI/CD Workflow

This project uses GitHub Actions to automate testing, improving code quality and reducing manual intervention. Whenever code is pushed, tests are automatically triggered to ensure stability and correctness. The workflow configuration can be found in the `.github/workflows` directory.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

Please make sure your code is well-tested and passes all existing tests before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions regarding the Todo-List-Cypress project, feel free to reach out:

- **GitHub**: [jonabergamo](https://github.com/jonabergamo)
- **Email**: [jonathanbergamo16@gmail.com](mailto:jonathanbergamo16@gmail.com)

We welcome feedback, issues, and suggestions to improve the application further.

---

Thank you for checking out **Todo-List-Cypress**! We hope this tool helps you stay productive and organized.
