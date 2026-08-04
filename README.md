# Fabcrew Admin Panel Automation

## Overview

This repository contains the automation framework for the **Fabcrew Admin Panel**, built using **Playwright** with **TypeScript**. The framework follows the **Page Object Model (POM)** design pattern to develop scalable, reusable, and maintainable automation scripts.

For detailed information about the automation strategy, framework architecture, project scope, and execution approach, refer to the documentation available in the `docs/` directory.

---

## Prerequisites

Ensure the following are installed before setting up the project:

* Node.js
* npm
* Git
* Visual Studio Code

---

## Installation

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

## Environment Configuration

Create a `.env` file in the project root using the `.env.example` file as a reference.

Example:

```env
BASE_URL=https://test-fab.aigeeks.dev

ADMIN_EMAIL=your-email@example.com

ADMIN_PASSWORD=your-password
```

Replace the placeholder values with valid test environment credentials before executing the test suite.

> **Note:** The `.env` file contains sensitive information and must not be committed to the repository. Ensure it is included in `.gitignore`.

---

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Open the Playwright HTML Report:

```bash
npx playwright show-report
```

---

## Project Documentation

The `docs/` directory contains project documentation, including:

* Automation Test Plan

Environment-specific configuration is managed using the `.env` and `.env.example` files.

---

## Repository Structure

```text
fabcrew-automation/
│
├── .github/
├── docs/
├── node_modules/
├── pages/
├── playwright-report/
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

## Author

**Shruti**
QA Automation Engineer
