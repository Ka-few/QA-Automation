import { Page, expect } from '@playwright/test';

export class DashboardPage {
    private readonly userDropdown = '.oxd-userdropdown-tab';
    private readonly pimMenu = 'a[href*="viewPimModule"]';

    constructor(private page: Page) { }

    async verifyOnDashboard() {
        await expect(this.page.locator(this.userDropdown)).toBeVisible();
    }

    async clickPIM() {
        await this.page.click(this.pimMenu);
    }
}
