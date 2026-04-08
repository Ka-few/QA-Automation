# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/login.spec.ts >> OrangeHRM Login Tests >> Failed login with invalid credentials
- Location: tests/ui/login.spec.ts:14:9

# Error details

```
Error: browserType.launch: 
╔═════════════════════════════════════════════════════════╗
║ Host system is missing dependencies to run browsers.    ║
║ Please install them with the following command:         ║
║                                                         ║
║     sudo npx playwright install-deps                    ║
║                                                         ║
║ Alternatively, use apt:                                 ║
║     sudo apt-get install libgstreamer-plugins-bad1.0-0\ ║
║         libavif16                                       ║
║                                                         ║
║ <3 Playwright Team                                      ║
╚═════════════════════════════════════════════════════════╝
```