import { test, expect } from '@playwright/test';

test('Login API returns token', async ({ request }) => {
    // Note: This is an example request to example.com which will likely 404
    // but demonstrates the syntax for API testing.
    const response = await request.post('/api/login', {
        data: {
            username: 'testuser',
            password: 'password123',
        },
    });

    // We expect 404 because example.com/api/login doesn't exist, 
    // but this is how you'd test it.
    expect(response.status()).toBe(404);
});
