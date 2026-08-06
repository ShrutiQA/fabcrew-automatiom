# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Module >> Verify Login page URL
- Location: tests\login.spec.ts:18:7

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
=========================== logs ===========================
  "commit" event fired
  "domcontentloaded" event fired
  "load" event fired
============================================================
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e3]:
    - main [ref=f1e6]:
      - paragraph [ref=f1e11]: Loading...
    - region "Notifications alt+T"
  - alert [ref=f1e12]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  | 
  6  |   // Page Elements
  7  |   readonly welcomeBackText: Locator;
  8  |   readonly emailInput: Locator;
  9  |   readonly passwordInput: Locator;
  10 |   readonly loginButton: Locator;
  11 |   readonly forgotPasswordLink: Locator;
  12 |   readonly eyeIcon: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     this.page = page;
  16 | 
  17 |     this.welcomeBackText = page.getByText('Welcome Back');
  18 | 
  19 |     this.emailInput = page.getByPlaceholder('Enter your email');
  20 | 
  21 |     this.passwordInput = page.getByPlaceholder('Enter your password');
  22 | 
  23 |     this.loginButton = page.getByRole('button', {
  24 |       name: 'Login',
  25 |     });
  26 | 
  27 |     this.forgotPasswordLink = page.getByText('Forgot Password?');
  28 | 
  29 |     // Update this locator if needed
  30 |     this.eyeIcon = page.locator('.lucide-eye-off, .lucide-eye');
  31 |   }
  32 | 
  33 |   async navigateToLogin() {
  34 |     await this.page.goto('/');
> 35 |     await this.page.waitForLoadState('networkidle');
     |                     ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  36 |   }
  37 | 
  38 |   async enterEmail(email: string) {
  39 |     await this.emailInput.fill(email);
  40 |   }
  41 | 
  42 |   async enterPassword(password: string) {
  43 |     await this.passwordInput.fill(password);
  44 |   }
  45 | 
  46 |   async clickLogin() {
  47 |     await this.loginButton.click();
  48 |   }
  49 | 
  50 |   async clickEyeIcon() {
  51 |     await this.eyeIcon.click();
  52 |   }
  53 | 
  54 |   async login(email: string, password: string) {
  55 |     await this.enterEmail(email);
  56 |     await this.enterPassword(password);
  57 |     await this.clickLogin();
  58 |   }
  59 | 
  60 |   async loginWithValidCredentials() {
  61 |     await this.login(
  62 |       process.env.ADMIN_EMAIL!,
  63 |       process.env.ADMIN_PASSWORD!
  64 |     );
  65 |   }
  66 | 
  67 |   async loginWithInvalidCredentials() {
  68 |     await this.login(
  69 |       'invalid@example.com',
  70 |       'Invalid@123'
  71 |     );
  72 |   }
  73 | }
```