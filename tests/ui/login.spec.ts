import { test, expect } from '../../fixtures/baseTest';
import { orangeHRMCredentials } from '../../utils/testData';

test.describe('OrangeHRM Login Tests', () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate();
    });

    test('Successful login with valid credentials', async ({ loginPage, dashboardPage }) => {
        await loginPage.login(orangeHRMCredentials.username, orangeHRMCredentials.password);
        await dashboardPage.verifyOnDashboard();
    });

    test('Failed login with invalid credentials', async ({ loginPage }) => {
        await loginPage.login('InvalidUser', 'InvalidPassword');
        await loginPage.verifyInvalidLoginMessage();
    });
});
