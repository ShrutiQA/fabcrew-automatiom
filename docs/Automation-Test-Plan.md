# Fabcrew Admin Panel Automation Test Plan

**Project:** Fabcrew Admin Panel Automation

**Automation Framework:** Playwright with TypeScript

**Prepared By:** Shruti Karna

**Date:** August 2026

---

# 1. Purpose

This document outlines the automation testing strategy, framework overview, project scope, execution approach, and version history for the Fabcrew Admin Panel Automation project. It serves as a reference for the automation framework and will be updated as the project evolves.

---

# 2. Project Overview

The Fabcrew Admin Panel is a web-based application used to manage various business operations, including employee management, bookings, tickets, settings, and administrative functions.

The automation framework is being developed to automate repetitive regression scenarios, improve test consistency, and support efficient testing throughout the application's lifecycle.

---

# 3. Objectives

* Build a scalable and maintainable automation framework.
* Automate critical business workflows.
* Reduce manual regression testing effort.
* Improve test execution consistency.
* Develop reusable and maintainable automation scripts.
* Support future integration with CI/CD pipelines.

---

# 4. Automation Team

| Role                   | Name   | Responsibility                                           |
| ---------------------- | ------ | -------------------------------------------------------- |
| QA Automation Engineer | Shruti | Framework setup, automation development, and maintenance |
| Reviewer               | TBD    | Framework and code review                                |
| Development Team       | FAB    | Application support and defect resolution                |

---

# 5. Technology Stack

| Component            | Technology             |
| -------------------- | ---------------------- |
| Automation Tool      | Playwright             |
| Programming Language | TypeScript             |
| IDE                  | Visual Studio Code     |
| Version Control      | Git                    |
| Repository           | GitHub                 |
| Package Manager      | npm                    |
| Reporting            | Playwright HTML Report |
| Operating System     | Windows                |

---

# 6. Framework Design

The automation framework follows the **Page Object Model (POM)** design pattern to ensure modular, reusable, and maintainable test scripts.

The framework is organized into separate components for page objects, test scripts, test data, utilities, and project documentation to improve scalability and simplify maintenance.

---

# 7. Project Structure

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

> **Note:** The project structure may evolve as the automation framework expands. Additional folders and supporting files will be introduced based on project requirements.

---

# 8. Scope

## In Scope

* Login Module
* Dashboard Module

## Out of Scope (Current Phase)

* API Automation
* Mobile Application Automation
* Performance Testing
* Security Testing
* Accessibility Testing

These areas may be considered in future phases of the project.

---

# 9. Test Environment

| Item           | Details               |
| -------------- | --------------------- |
| Environment    | Development / Staging |
| Browser        | Chromium              |
| Execution      | Local Machine         |
| Execution Mode | Headed and Headless   |

The environment configuration will be updated as additional environments become available.

---

# 10. Execution Strategy

Automation scripts are currently executed locally using the Chromium browser in either headed or headless mode through the Playwright Test Runner.

The execution strategy will be enhanced as the framework grows to support additional browsers, environments, and CI/CD pipelines.

---

# 11. Git Strategy

The automation source code is maintained using Git and GitHub.

Development follows the following practices:

* Commit changes with meaningful commit messages.
* Push code regularly to the remote repository.
* Maintain a clean and organized commit history.
* Review changes before merging, where applicable.

---

