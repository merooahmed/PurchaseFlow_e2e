/* 
test id  =search-query (search box) =>> fill
Test id = search-button (search-submit) =>> Click 
search item  =  "Thor Hammer" 

*/
const { test } = require("@playwright/test");
const { SearchPage } = require("../pages/searchPage.js");
const { LoginPage } = require("../pages/LoginPage");
const { RegisterPage } = require("../pages/RegisterPage");
const { generateRandomEmail } = require("../data/randomEmail");
const searchItem = require("../data/search.json");
const user = require("../data/user_auth_test.json");
test.describe("TC-03", () => {
  let searchPage;
  let loginPage;
  let registerPage;
  let registeredEmail;
  test.beforeEach(async ({ page }) => {
    //Register  before each test

    registerPage = new RegisterPage(page);
    registeredEmail = generateRandomEmail();
    await registerPage.open();
    await registerPage.register(registeredEmail);
    // Login before each test
    loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(registeredEmail, user.register.password);
    //Search before each test
    searchPage = new SearchPage(page);
    await searchPage.open();
  });

  test("verify search functionality", async () => {
    await searchPage.searchItem(searchItem.Item);
    await searchPage.expectSearchResults();
  });
});
