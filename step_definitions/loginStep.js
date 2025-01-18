const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");

Given('I navigate to the test site', async function () {
    await this.page.goto('http://localhost:8080');
})

When('I enter {string} and {string}', async function (username, password) {
    await this.page.locator(`//input[contains(@placeholder,'Username')]`).fill(username);
    await this.page.locator(`//input[contains(@placeholder,'password')]`).fill(password);
    await this.page.waitForSelector(`//button[text()='LOGIN']`);
})

When('I click {string} button', async function (btn) {
    await this.page.locator(`//button[text()='${btn}']`).click();
})

Then('the following text {string} should display', async function (text) {
    const elementText = await this.page.locator(`//div[contains(text(), '${text}')]`).textContent();
    expect(elementText).toContain(text);
})

Then('the following user information should display', async function (table) {
    const element = table.rowsHash();
    if (element.name) {
        const elementLocator = await this.page.locator(`//div[text()='${element.name}']`).textContent();
        expect(elementLocator).toContain(element.name);
    }
    if (element.favouriteFruit) {
        const elementLocator = await this.page.locator(`//div[text()='${element.favouriteFruit}']`).textContent();
        expect(elementLocator).toContain(element.favouriteFruit);
    }
    if (element.favouriteMovie) {
        const elementLocator = await this.page.locator(`//div[text()='${element.favouriteMovie}']`).textContent();
        expect(elementLocator).toContain(element.favouriteMovie);
    }
    if (element.favouriteNumber) {
        const elementLocator = await this.page.locator(`//div[text()='${element.favouriteNumber}']`).textContent();
        expect(elementLocator).toContain(element.favouriteNumber);
    }
})

When('I reload the page', async function () {
    await this.page.reload();
})