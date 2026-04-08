import { test } from '../../fixtures/baseTest';
import { orangeHRMCredentials, generateEmployeeData } from '../../utils/testData';

test.describe('OrangeHRM Employee Management (PIM)', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.navigate();
        await loginPage.login(orangeHRMCredentials.username, orangeHRMCredentials.password);
        await dashboardPage.verifyOnDashboard();
        await dashboardPage.clickPIM();
    });

    test('Add new employee and verify creation', async ({ pimPage }) => {
        const employeeData = generateEmployeeData();

        await pimPage.navigateToAddEmployee();
        await pimPage.addEmployee(employeeData.firstName, employeeData.lastName);
        await pimPage.verifyEmployeeCreated(employeeData.firstName, employeeData.lastName);
    });
});
