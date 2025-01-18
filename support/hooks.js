const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
setDefaultTimeout(60 * 1000);

Before(async function () {
   
    this.browser = await playwright.chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});
