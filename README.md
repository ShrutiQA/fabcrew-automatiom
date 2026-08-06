# Fabcrew Admin Panel Automation

## Overview

This repository contains the automation framework for the **Fabcrew Admin Panel**, built using **Playwright** with **TypeScript**. The framework follows the **Page Object Model (POM)** design pattern to create scalable, reusable, and maintainable automation scripts.

The framework supports multiple reporting formats, including **Playwright HTML Report**, **Allure Report**, **JSON Report**, and a custom **Excel Report** that is generated after every execution, even when test cases fail.

For detailed information about the automation strategy, framework architecture, project scope, and execution approach, refer to the documentation available in the `docs/` directory.

---

# Prerequisites

Ensure the following are installed before setting up the project:

* Node.js
* npm
* Git
* Visual Studio Code

---

# Installation

### Clone the repository

```bash
git clone https://github.com/ShrutiQA/fabcrew-automatiom.git
```

### Navigate to the project directory

```bash
cd fabcrew-automation
```

### Install project dependencies

```bash
npm install
```

### Install Playwright browsers

```bash
npx playwright install
```

---

# Environment Configuration

Create a `.env` file in the project root using the `.env.example` file as a reference.

Example:

```env
BASE_URL=https://test-fab.aigeeks.dev
ADMIN_EMAIL=your-email@example.com
ADMIN_PASSWORD=your-password
```

Replace the placeholder values with valid test environment credentials before executing the test suite.

> **Note:** The `.env` file contains sensitive information and must never be committed to the repository. Ensure it is included in `.gitignore`.

---

# Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/login.spec.ts
```

### Run tests and generate Excel report

```bash
npm run test:excel
```

This command will:

* Execute Playwright tests
* Generate the Playwright HTML Report
* Generate the JSON Report
* Generate the Excel Report
* Generate the Excel Report even if one or more test cases fail

---

# Reports

## Playwright HTML Report

Open the HTML report:

```bash
npx playwright show-report
```

---

## Allure Report

Generate the Allure Report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the Allure Report:

```bash
allure open allure-report
```

---

## Excel Report

The Excel report is automatically generated after running:

```bash
npm run test:excel
```

Report location:

```text
test-results/report.xlsx
```

The Excel report contains:

* Module Name
* Test Scenario
* Test Status
* Execution Duration
* Readable Failure Remarks

---

## Failure Artifacts

When a test fails, the framework automatically captures:

* Screenshot
* Video Recording
* Trace File (on first retry)

These artifacts are available inside the `test-results/` directory and can also be accessed through the Playwright HTML and Allure reports.

---

# Project Documentation

The `docs/` directory contains project documentation, including:

* Automation Test Plan

Environment-specific configuration is managed using the `.env` and `.env.example` files.

---

# Repository Structure

```text
fabcrew-automation/
│
├── .github/
├── docs/
├── pages/
├── playwright-report/
├── allure-results/
├── allure-report/
├── scripts/
│   ├── run-tests.js
│   └── json-to-excel.js
├── test-data/
├── test-results/
├── tests/
├── utils/
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── README.md
└── tsconfig.json
```

---

# Author

**Shruti**
QA Automation Engineer
