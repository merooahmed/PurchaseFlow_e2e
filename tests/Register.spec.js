const { test, expect } = require("@playwright/test");
const { RegisterPage } = require("../pages/RegisterPage");
const { generateRandomEmail } = require("../data/randomEmail");
test.describe("Register Page Tests", () => {
    let registerPage;
    let registeredEmail;
    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        registeredEmail = generateRandomEmail();
        await registerPage.open();
    });

    test("TC01 - Register with valid data", async ({ page }) => {
        await registerPage.register(registeredEmail);

        await expect(page).toHaveURL(/\/auth\/login$/);
    });
});