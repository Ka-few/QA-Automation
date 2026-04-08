# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login.spec.ts >> OrangeHRM Login Tests >> Failed login with invalid credentials
- Location: tests/ui/login.spec.ts:14:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-alert-content-text')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-alert-content-text')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [ref=e23]: InvalidUser
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]: InvalidPassword
          - button "Login" [active] [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
        - separator [ref=e35]
        - paragraph [ref=e37]: Or login with
        - generic "Ronak" [ref=e39] [cursor=pointer]:
          - paragraph [ref=e40]: Ronak
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link [ref=e43] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e49] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e52] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e55]:
          - paragraph [ref=e56]: OrangeHRM OS 5.8
          - paragraph [ref=e57]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e58] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e60]
```

# Test source

```ts
  1  | import { Page, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     private readonly usernameInput = 'input[name="username"]';
  5  |     private readonly passwordInput = 'input[name="password"]';
  6  |     private readonly loginButton = 'button[type="submit"]';
  7  |     private readonly errorMessage = '.oxd-alert-content-text';
  8  | 
  9  |     constructor(private page: Page) { }
  10 | 
  11 |     async navigate() {
  12 |         await this.page.goto('/');
  13 |     }
  14 | 
  15 |     async login(username: string, password: string) {
  16 |         await this.page.fill(this.usernameInput, username);
  17 |         await this.page.fill(this.passwordInput, password);
  18 |         await this.page.click(this.loginButton);
  19 |     }
  20 | 
  21 |     async verifyInvalidLoginMessage() {
> 22 |         await expect(this.page.locator(this.errorMessage)).toBeVisible();
     |                                                            ^ Error: expect(locator).toBeVisible() failed
  23 |         await expect(this.page.locator(this.errorMessage)).toHaveText('Invalid credentials');
  24 |     }
  25 | }
  26 | 
```