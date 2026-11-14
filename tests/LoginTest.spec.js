const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { RegisterPage } = require("../pages/RegisterPage");
const { generateRandomEmail } = require("../data/randomEmail");
const user = require("../data/user_auth_test.json");
test.describe("Login", () => {
  let registerPage;
  let registeredEmail;
  let loginPage;
  
  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    registeredEmail = generateRandomEmail();
    await registerPage.open();
    await registerPage.register(registeredEmail);
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("verify login with valid credentials", async () => {
    await loginPage.login(registeredEmail, user.register.password);

    await loginPage.expectLoggedIn();
  });
});
