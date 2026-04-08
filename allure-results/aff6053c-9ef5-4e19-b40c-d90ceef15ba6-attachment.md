# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/employee.spec.ts >> OrangeHRM Employee Management (PIM) >> Add new employee and verify creation
- Location: tests/ui/employee.spec.ts:12:9

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