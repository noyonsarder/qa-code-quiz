const { Given, When, Then } = require("@cucumber/cucumber");
const {expect} = require("@playwright/test");

Given('I navigate to the test site', async function () {
    await this.page.goto('http://localhost:8080');
})

When('I enter {string} and {string}', async function (username,password) {
    await this.page.pause();
    await this.page.locator(`//input[contains(@placeholder,'Username')]`).fill(username);
    await this.page.locator(`//input[contains(@placeholder,'password')]`).fill(password);
})

When('I click {string} button', async function (loginBtn) {
    await this.page.waitForSelector(`//button[text()='LOGIN']`);
    await this.page.locator(`//button[text()='${loginBtn}']`).click();
})

Then('the text {string} should display', async function (text) {
    const elementText= await this.page.locator(`//div[contains(text(), 'contact an admin')]`).textContent();
    expect(elementText).toContain(text); 
})
