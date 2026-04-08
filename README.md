# 🔧 QA Automation Framework (Playwright)

A scalable and robust test automation framework built with Playwright and TypeScript.

## 🚀 Features
- **UI Automation**: Using Playwright with the Page Object Model (POM) pattern.
- **API Testing**: Integrated API validation using Playwright's request context.
- **Scalable Architecture**: Organized structure for pages, tests, and utilities.
- **CI/CD Integration**: Automated test execution via GitHub Actions.
- **Rich Reporting**: HTML and List reporting enabled by default.

## 📁 Project Structure
- `tests/`: UI and API test specifications.
- `pages/`: Page Object Model implementation.
- `utils/`: Test data and helper functions.
- `.github/workflows/`: CI/CD pipeline configuration.

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation
```bash
npm install
npx playwright install
```

### Running Tests
Run all tests:
```bash
npx playwright test
```

Run UI tests:
```bash
npx playwright test tests/ui
```

Run API tests:
```bash
npx playwright test tests/api
```

### Viewing Reports
```bash
npx playwright show-report
```

## 🧪 Test Coverage
- Authentication flows (UI)
- API Endpoint validation
- Dashboard navigation
