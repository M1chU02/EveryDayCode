const puppeteer = require("puppeteer");

async function takeScreenshot(url, outputPath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: outputPath });
  await browser.close();
}

const url = process.argv[2];
const outputPath = process.argv[3] || "screenshot.png";

if (!url) {
  console.error("Please provide a valid URL.");
} else {
  takeScreenshot(url, outputPath)
    .then(() => console.log(`Screenshot saved to ${outputPath}`))
    .catch((error) => console.error("Error capturing screenshot:", error));
}
