# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/auth.spec.ts >> ReqRes API Testing >> GET Users List
- Location: tests/api/auth.spec.ts:31:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('ReqRes API Testing', () => {
  4  |     const baseURL = 'https://reqres.in';
  5  | 
  6  |     test('POST Login - Successful', async ({ request }) => {
  7  |         const response = await request.post(`${baseURL}/api/login`, {
  8  |             data: {
  9  |                 email: 'eve.holt@reqres.in',
  10 |                 password: 'cityslicka'
  11 |             }
  12 |         });
  13 | 
  14 |         expect(response.status()).toBe(200);
  15 |         const body = await response.json();
  16 |         expect(body.token).toBeTruthy();
  17 |     });
  18 | 
  19 |     test('POST Login - Unsuccessful (Negative)', async ({ request }) => {
  20 |         const response = await request.post(`${baseURL}/api/login`, {
  21 |             data: {
  22 |                 email: 'peter@klaven'
  23 |             }
  24 |         });
  25 | 
  26 |         expect(response.status()).toBe(400);
  27 |         const body = await response.json();
  28 |         expect(body.error).toBe('Missing password');
  29 |     });
  30 | 
  31 |     test('GET Users List', async ({ request }) => {
  32 |         const response = await request.get(`${baseURL}/api/users?page=2`);
  33 | 
> 34 |         expect(response.status()).toBe(200);
     |                                   ^ Error: expect(received).toBe(expected) // Object.is equality
  35 |         const body = await response.json();
  36 |         expect(body.data.length).toBeGreaterThan(0);
  37 |         expect(body.data[0]).toHaveProperty('email');
  38 |     });
  39 | 
  40 |     test('POST Create User', async ({ request }) => {
  41 |         const userData = {
  42 |             name: 'morpheus',
  43 |             job: 'leader'
  44 |         };
  45 |         const response = await request.post(`${baseURL}/api/users`, {
  46 |             data: userData
  47 |         });
  48 | 
  49 |         expect(response.status()).toBe(201);
  50 |         const body = await response.json();
  51 |         expect(body.name).toBe(userData.name);
  52 |         expect(body.job).toBe(userData.job);
  53 |         expect(body.id).toBeTruthy();
  54 |     });
  55 | 
  56 |     test('DELETE User', async ({ request }) => {
  57 |         const response = await request.delete(`${baseURL}/api/users/2`);
  58 |         expect(response.status()).toBe(204);
  59 |     });
  60 | });
  61 | 
```