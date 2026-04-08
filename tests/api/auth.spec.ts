import { test, expect } from '@playwright/test';

test.describe('ReqRes API Testing', () => {
    const baseURL = 'https://reqres.in';

    test('POST Login - Successful', async ({ request }) => {
        const response = await request.post(`${baseURL}/api/login`, {
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.token).toBeTruthy();
    });

    test('POST Login - Unsuccessful (Negative)', async ({ request }) => {
        const response = await request.post(`${baseURL}/api/login`, {
            data: {
                email: 'peter@klaven'
            }
        });

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body.error).toBe('Missing password');
    });

    test('GET Users List', async ({ request }) => {
        const response = await request.get(`${baseURL}/api/users?page=2`);

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data.length).toBeGreaterThan(0);
        expect(body.data[0]).toHaveProperty('email');
    });

    test('POST Create User', async ({ request }) => {
        const userData = {
            name: 'morpheus',
            job: 'leader'
        };
        const response = await request.post(`${baseURL}/api/users`, {
            data: userData
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.name).toBe(userData.name);
        expect(body.job).toBe(userData.job);
        expect(body.id).toBeTruthy();
    });

    test('DELETE User', async ({ request }) => {
        const response = await request.delete(`${baseURL}/api/users/2`);
        expect(response.status()).toBe(204);
    });
});
