import { faker } from '@faker-js/faker';

export const generateEmployeeData = () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
});

export const orangeHRMCredentials = {
    username: process.env.ORANGEHRM_USERNAME || 'Admin',
    password: process.env.ORANGEHRM_PASSWORD || 'admin123',
};
