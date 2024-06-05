const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const screenshotsFolder = './screenshots';
  if (!fs.existsSync(screenshotsFolder)) {
    fs.mkdirSync(screenshotsFolder);
  }

  // Set a larger viewport to view more elements
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('https://englishexpressonline.com/english-express-online/');
  await page.screenshot({ path: path.join(screenshotsFolder, 'Homepage.png'), fullPage: true });

  await page.goto('http://www.englishexpressonline.com/start-here');
  await page.screenshot({ path: path.join(screenshotsFolder, 'start-here.png'), fullPage: true });

  await page.goto('https://automationteststore.com/');
  await page.screenshot({ path: path.join(screenshotsFolder, 'LandingPage.png'), fullPage: true });

  await page.goto('https://automationteststore.com/index.php?rt=content/contact');
  await page.screenshot({ path: path.join(screenshotsFolder, 'contact.png'), fullPage: true });

  await page.goto('https://automationteststore.com/index.php?rt=product/category&path=36');
  await page.screenshot({ path: path.join(screenshotsFolder, 'makeup.png'), fullPage: true });

  await browser.close();
})();