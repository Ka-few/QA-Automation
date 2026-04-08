import { Page, expect } from '@playwright/test';

export class PIMPage {
    private readonly addEmployeeBtn = 'button.oxd-button--secondary:has-text("Add")';
    private readonly firstNameInput = 'input[name="firstName"]';
    private readonly lastNameInput = 'input[name="lastName"]';
    private readonly saveBtn = 'button[type="submit"]';
    private readonly employeeNameHeader = '.orangehrm-edit-employee-name h6';

    constructor(private page: Page) { }

    async navigateToAddEmployee() {
        await this.page.click(this.addEmployeeBtn);
    }

    async addEmployee(firstName: string, lastName: string) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.click(this.saveBtn);
    }

    async verifyEmployeeCreated(firstName: string, lastName: string) {
        // Wait for the navigation/loading after save
        await expect(this.page.locator(this.employeeNameHeader)).toBeVisible({ timeout: 10000 });
        await expect(this.page.locator(this.employeeNameHeader)).toContainText(`${firstName} ${lastName}`);
    }
}
