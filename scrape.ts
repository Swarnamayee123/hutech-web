import puppeteer from 'puppeteer';
(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://hutechsolutions.com/cloud-transformation/services/cloud-migration', {
    waitUntil: 'networkidle0',
  });
  const html = await page.content();
  console.log(html);
  await browser.close();
})();