import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/loginData';

test.describe('Login Module', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
  });

  // 1. Verify Login page loads successfully
  test('Verify Login page loads successfully', async ({ page }) => {
    await expect(page).toHaveURL(/auth\/login/);
  });

  // 2. Verify Login page URL
  test('Verify Login page URL', async ({ page }) => {
    expect(page.url()).toContain('/auth/login');
  });

  // 3. Verify "Welcome Back" text is displayed
  test('Verify "Welcome Back" text is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.welcomeBackText).toBeVisible();
  });

  // 4. Verify Email field is displayed
  test('Verify Email field is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.emailInput).toBeVisible();
  });

  // 5. Verify Password field is displayed
  test('Verify Password field is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.passwordInput).toBeVisible();
  });

  // 6. Verify Login button is displayed
  test('Verify Login button is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.loginButton).toBeVisible();
  });

  // 7. Verify Forgot Password link is displayed
  test('Verify Forgot Password link is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.forgotPasswordLink).toBeVisible();
  });

  // 8. Verify Password Eye icon is displayed
  test('Verify Password Eye icon is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.eyeIcon).toBeVisible();
  });

  // 9. Verify password is masked by default
  test('Verify password is masked by default', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });

  // 10. Verify Show Password functionality
  test('Verify Show Password functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterPassword('Password@123');
    await loginPage.clickEyeIcon();

    await expect(loginPage.passwordInput).toHaveAttribute('type', 'text');
  });

  // 11. Verify Hide Password functionality
  test('Verify Hide Password functionality', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.enterPassword('Password@123');
    await loginPage.clickEyeIcon();
    await loginPage.clickEyeIcon();

    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });

  // 12. Verify login with valid credentials
  test('Verify login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/dashboard/);
  });

  // 13. Verify successful Dashboard redirection after login
  test('Verify successful Dashboard redirection after login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.validUser.email,
      loginData.validUser.password
    );

    await expect(page).toHaveURL(/dashboard\/booking-management/);
  });

  // 14. Verify login with invalid credentials
  test('Verify login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.invalidCredentials.email,
      loginData.invalidCredentials.password
    );

    await expect(page.getByText('Account not found')).toBeVisible();
  });

  // 15. Verify "Account not found" toast message is displayed
  test('Verify "Account not found" toast message is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.invalidCredentials.email,
      loginData.invalidCredentials.password
    );

    await expect(page.getByText('Account not found')).toBeVisible();
  });

  // 16. Verify validation messages when Email and Password fields are left empty
  test('Verify validation messages when Email and Password fields are left empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.clickLogin();

    await expect(page.getByText('Invalid email address')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  // 17. Verify "Password is required" validation message is displayed
  test('Verify "Password is required" validation message is displayed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.emptyPassword.email,
      loginData.emptyPassword.password
    );

    await expect(page.getByText('Password is required')).toBeVisible();
  });

  // 18 & 19. Verify "Account not found" message is displayed for non-existing email
  test('Verify "Account not found" message is displayed for non-existing email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.nonExistingAccount.email,
      loginData.nonExistingAccount.password
    );

    await expect(page.getByText('Account not found')).toBeVisible();
  });

  // 20. Verify "Invalid email address" validation message when Email is left empty
  test('Verify "Invalid email address" validation message when Email is left empty', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.emptyEmail.email,
      loginData.emptyEmail.password
    );

    await expect(page.getByText('Invalid email address')).toBeVisible();
  });

});