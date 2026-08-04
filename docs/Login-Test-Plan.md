# Login Test Plan

## Module

**Admin Panel – Login**

---

## Objective

Automate the login functionality of the Fabcrew Admin Panel and verify all critical login scenarios.

---

## Automation Flow

The Login module automation will be implemented in the following order:

1. Launch the browser.
2. Navigate to the Fabcrew Admin Login page.
3. Verify the Login page is displayed.
4. Execute positive and negative login scenarios.
5. Validate login page functionality and error messages.
6. Verify successful navigation to the Dashboard after valid login.
7. Generate the Playwright HTML report.
8. Refactor and maintain automation scripts as new scenarios are added.

---

## Planned Test Scenarios

* Verify Login page loads successfully.
* Verify all login page UI elements are displayed.
* Verify login with valid credentials.
* Verify login with invalid email.
* Verify login with invalid password.
* Verify login with invalid email and password.
* Verify login with empty Email field.
* Verify login with empty Password field.
* Verify login with both fields empty.
* Verify Email field validation.
* Verify Password field validation.
* Verify password is masked by default.
* Verify Show Password functionality.
* Verify Hide Password functionality.
* Verify Login button functionality.
* Verify Forgot Password link navigation.
* Verify successful redirection to the Dashboard after login.
* Verify authenticated user cannot access the Login page using the browser Back button.
* Verify login using the **Enter** key.

---

## Files to be Created

* `pages/LoginPage.ts`
* `tests/login.spec.ts`
* `test-data/loginData.ts`

---

## Execution Status

| Test Scenario                 | Automation Status | Result |
| ----------------------------- | ----------------- | ------ |
| Login page loads successfully | Not Started       | -      |
| Login page UI elements        | Not Started       | -      |
| Valid login                   | Not Started       | -      |
| Invalid email                 | Not Started       | -      |
| Invalid password              | Not Started       | -      |
| Invalid email and password    | Not Started       | -      |
| Empty Email field             | Not Started       | -      |
| Empty Password field          | Not Started       | -      |
| Both fields empty             | Not Started       | -      |
| Email field validation        | Not Started       | -      |
| Password field validation     | Not Started       | -      |
| Password masking              | Not Started       | -      |
| Show/Hide Password            | Not Started       | -      |
| Login button functionality    | Not Started       | -      |
| Forgot Password navigation    | Not Started       | -      |
| Dashboard redirection         | Not Started       | -      |
| Browser Back button behavior  | Not Started       | -      |
| Login using Enter key         | Not Started       | -      |
