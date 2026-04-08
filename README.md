# 🎭 Production-Ready Playwright Automation Framework

A professional-grade test automation framework demonstrating industry best practices for UI and API testing.

## 🚀 Features
- **UI Automation (OrangeHRM)**: Robust POM implementation for login and employee management.
- **API Automation (ReqRes)**: Comprehensive validation for authentication and user CRUD operations.
- **Scalable POM Architecture**: Encapsulated page logic and reusable components.
- **Advanced Reporting**: Dual reporting with Playwright HTML and **Allure Reports**.
- **Dynamic Test Data**: Automated data generation using **Faker**.
- **Environment Management**: Secure credential handling via `.env`.
- **CI/CD Integrated**: Automated execution and report publishing via GitHub Actions.

## 📁 Project Structure
- `tests/`: 
  - `ui/`: End-to-end tests for OrangeHRM.
  - `api/`: REST API validation for ReqRes.
- `pages/`: Page Object Model implementation.
- `fixtures/`: Custom Playwright fixtures for page object injection.
- `utils/`: Test data generators and configuration helpers.
- `.github/workflows/`: CI/CD pipeline configuration.

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
npx playwright install
```

### Environment Configuration
Create a `.env` file in the root directory:
```env
ORANGEHRM_USERNAME=Admin
ORANGEHRM_PASSWORD=admin123
```

### Running Tests
Run all tests:
```bash
npx playwright test
```

Generate Allure Report:
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## 🧪 Test Coverage
- **OrangeHRM (UI)**:
  - Secure Login validation (Positive & Negative)
  - Dashboard presence verification
  - Employee lifecycle: Create and Verify
- **ReqRes (API)**:
  - Token-based Authentication
  - User Retrieval and List validation
  - Resource creation and deletion

## 🛠 Design Decisions
- **Fixtures**: Used Playwright fixtures to automatically instantiate Page Objects, keeping tests clean and focused on intent rather than setup.
- **Retries & Parallelism**: Configured for maximum efficiency and stability in CI environments.
- **Faker**: Ensures unique data for every test run, avoiding collisions in shared demo environments.
