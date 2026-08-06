# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Module >> Verify "Invalid email address" validation message when Email is left empty
- Location: tests\login.spec.ts:168:7

# Error details

```
Error: page.goto: net::ERR_ABORTED at https://test-fab.aigeeks.dev/
Call log:
  - navigating to "https://test-fab.aigeeks.dev/", waiting until "load"

```

```
Error: browserContext.close: Target page, context or browser has been closed
```