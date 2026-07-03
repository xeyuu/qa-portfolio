# 🚀 Automated Testing Portfolio (E2E)

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CI/CD](https://github.com/xeyuu/qa-portfolio/actions/workflows/playwright.yml/badge.svg)

This repository demonstrates a professional End-to-End (E2E) automated testing framework using **Playwright** and **TypeScript**. It is designed to showcase modern QA practices, maintainable code architecture, and CI/CD integration.

## 🎯 Target Application
- **Application:** [SauceDemo (Swag Labs)](https://www.saucedemo.com/)
- **Scope:** Authentication Flow (Login)

## 🏗️ Architecture & Best Practices
- **Page Object Model (POM):** Separates UI locators and interactions from test logic for maximum maintainability.
- **Data-Driven Testing (Ready):** Structure supports external data injection.
- **CI/CD Integration:** Automated test execution via GitHub Actions on every push to the `main` branch.

## 📁 Project Structure
```text
qa-portfolio/
├── .github/workflows/   # CI/CD pipeline configuration
├── pages/               # Page Object Model (POM) classes
│   └── LoginPage.ts
├── tests/               # Test scripts (Assertions)
│   └── login.spec.ts
└── playwright.config.ts # Global framework configuration