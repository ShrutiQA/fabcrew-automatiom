const fs = require("fs");
const ExcelJS = require("exceljs");

function formatError(errorMessage) {
  if (!errorMessage) return "-";

  // Remove ANSI color codes
  let message = errorMessage.replace(/\u001b\[[0-9;]*m/g, "");

  // Remove everything after "Call log:"
  message = message.split("Call log:")[0];

  // Remove unnecessary whitespace
  message = message.replace(/\n+/g, " ").trim();

  // Convert Playwright errors into readable messages
  if (message.includes("toBeVisible")) {
    const locator = message.match(/Locator:\s(.+?)Expected:/s);

    if (locator) {
      return `Expected element was not visible (${locator[1].trim()}).`;
    }

    return "Expected element was not visible.";
  }

  if (message.includes("toHaveText")) {
    return "Actual text does not match the expected text.";
  }

  if (message.includes("toHaveURL")) {
    return "Actual URL does not match the expected URL.";
  }

  if (message.includes("Timeout")) {
    return "Operation timed out while waiting for the expected element.";
  }

  return message;
}


function extractTests(suites, results = []) {
  suites.forEach((suite) => {
    if (suite.specs && suite.specs.length > 0) {
      suite.specs.forEach((spec) => {
        spec.tests.forEach((test) => {
          const result = test.results[test.results.length - 1];

          if (!result) return;
          results.push({
            module: suite.title,
            title: spec.title,
            status: result.status,
            duration: result.duration,
            error:
              result.errors?.length
                ? formatError(result.errors[0].message)
                : "-",
          });
        });
      });
    }

    if (suite.suites && suite.suites.length > 0) {
      extractTests(suite.suites, results);
    }
  });

  return results;
}

async function generateExcelReport() {
  const rawData = fs.readFileSync("test-results/results.json", "utf-8");
  const data = JSON.parse(rawData);

  const testResults = extractTests(data.suites);

  const workbook = new ExcelJS.Workbook();


  // =========================================================
  // DETAILED RESULTS SHEET
  // =========================================================

  const sheet = workbook.addWorksheet("Detailed Results");

  sheet.columns = [
    { header: "S.No", key: "id", width: 10 },
    { header: "Module", key: "module", width: 25 },
    { header: "Test Scenario", key: "title", width: 60 },
    { header: "Status", key: "status", width: 18 },
    { header: "Duration (ms)", key: "duration", width: 18 },
    { header: "Remarks", key: "error", width: 45 },
  ];

  const header = sheet.getRow(1);

  header.height = 25;

  header.eachCell((cell) => {
    cell.font = {
      bold: true,
      color: { argb: "FFFFFFFF" },
    };

    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "1F4E78" },
    };

    cell.alignment = {
      horizontal: "center",
      vertical: "middle",
    };

    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
  });

  testResults.forEach((test, index) => {
    const row = sheet.addRow({
      id: index + 1,
      title: test.title,
      module: test.module,
      status: test.status.toUpperCase(),
      duration: test.duration,
      error: test.error,
    });

    row.height = 35;

    row.eachCell((cell) => {
      cell.alignment = {
        vertical: "middle",
        horizontal: "center",
        wrapText: true,
      };

      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    row.getCell(2).alignment = {
      horizontal: "center",
      vertical: "middle",
      wrapText: true,
    };

    row.getCell(3).alignment = {
      horizontal: "left",
      vertical: "middle",
      wrapText: true,
    };

    row.getCell(6).alignment = {
      horizontal: "left",
      vertical: "middle",
      wrapText: true,
    };

    if (index % 2 === 0) {
      row.eachCell((cell) => {
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "F8F9FA" },
        };
      });
    }

    const statusCell = row.getCell(4);

    if (test.status === "passed") {
      statusCell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "C6EFCE" },
      };

      statusCell.font = {
        bold: true,
        color: { argb: "006100" },
      };
    } else if (test.status === "failed") {
      statusCell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFC7CE" },
      };

      statusCell.font = {
        bold: true,
        color: { argb: "9C0006" },
      };
    } else if (test.status === "skipped") {
      statusCell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFEB9C" },
      };

      statusCell.font = {
        bold: true,
        color: { argb: "9C6500" },
      };
    }
  });

  sheet.views = [
    {
      state: "frozen",
      ySplit: 1,
    },
  ];

  // =========================================================

  await workbook.xlsx.writeFile("test-results/report.xlsx");

  console.log(
    `\n✅ Excel report generated successfully!`
  );

}

generateExcelReport();