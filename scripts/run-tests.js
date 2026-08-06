const { execSync } = require("child_process");

console.log("======== RUN-TESTS.JS STARTED ========");

let exitCode = 0;

// ------------------------------
// Run Playwright Tests
// ------------------------------
try {
  console.log("🚀 Running Playwright tests...\n");

  execSync("npx playwright test", {
    stdio: "inherit",
  });

  console.log("\n✅ Playwright execution completed successfully.");

} catch (error) {
  exitCode = 1;

  console.log("\n⚠️ Some Playwright tests failed.");
  console.log("➡️ Continuing to generate Excel report...");
}

// ------------------------------
// Generate Excel Report
// ------------------------------
try {
  console.log("\n📊 Running Excel report generator...");

  execSync("node scripts/json-to-excel.js", {
    stdio: "inherit",
  });

  console.log("\n✅ Excel report generated successfully.");

} catch (error) {
  console.error("\n❌ Excel report generation failed.");
  console.error(error);
}

console.log("\n======== RUN-TESTS.JS FINISHED ========");

// Return Playwright's exit code so CI can still fail if tests failed.
process.exit(exitCode);