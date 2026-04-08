import { Page, expect } from '@playwright/test';

export class LoginPage {
    private readonly usernameInput = 'input[name="username"]';
    private readonly passwordInput = 'input[name="password"]';
    private readonly loginButton = 'button[type="submit"]';
    private readonly errorMessage = '.oxd-alert-content-text';

    constructor(private page: Page) { }

    async navigate() {
        await this.page.goto('/');
    }

    async login(username: string, password: string) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async verifyInvalidLoginMessage() {
        await expect(this.page.locator(this.errorMessage)).toBeVisible();
        await expect(this.page.locator(this.errorMessage)).toHaveText('Invalid credentials');
    }
}
