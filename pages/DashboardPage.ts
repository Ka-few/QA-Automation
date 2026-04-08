import { Page, expect } from '@playwright/test';

export class DashboardPage {
    constructor(private page: Page) { }

    async isVisible() {
        await expect(this.page).toHaveURL(/dashboard/);
    }

    async logout() {
        await this.page.click('#logout');
    }
}
