import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Page Elements
  readonly welcomeBackText: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly eyeIcon: Locator;

  constructor(page: Page) {
    this.page = page;

    this.welcomeBackText = page.getByText('Welcome Back');

    this.emailInput = page.getByPlaceholder('Enter your email');

    this.passwordInput = page.getByPlaceholder('Enter your password');

    this.loginButton = page.getByRole('button', {
      name: 'Login',
    });

    this.forgotPasswordLink = page.getByText('Forgot Password?');

    // Update this locator if needed
    this.eyeIcon = page.locator('.lucide-eye-off, .lucide-eye');
  }

  async navigateToLogin() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clickEyeIcon() {
    await this.eyeIcon.click();
  }

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async loginWithValidCredentials() {
    await this.login(
      process.env.ADMIN_EMAIL!,
      process.env.ADMIN_PASSWORD!
    );
  }

  async loginWithInvalidCredentials() {
    await this.login(
      'invalid@example.com',
      'Invalid@123'
    );
  }
}