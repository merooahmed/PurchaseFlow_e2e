const { test } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { RegisterPage } = require("../pages/RegisterPage");
const { SearchPage } = require("../pages/searchPage");
const { AddToCartPage } = require("../pages/addToCart");
const { generateRandomEmail } = require("../data/randomEmail");
const searchItem = require("../data/search.json");
const user = require("../data/user_auth_test.json");
test.describe("Add to cart", () => {
  let registerPage;
  let registeredEmail;
  let loginPage;
  let searchPage;
  let addToCartPage;


  test.beforeEach(async ({ page }) => {
    registerPage = new RegisterPage(page);
    registeredEmail = generateRandomEmail();
    await registerPage.open();
    await registerPage.register(registeredEmail);

    loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(registeredEmail, user.register.password);

    searchPage = new SearchPage(page);
    await searchPage.open();
    await searchPage.searchItem(searchItem.Item);
   
  });
  

  test("verify add to cart", async ({page}) => {
   
    addToCartPage = new AddToCartPage(page);
    await addToCartPage.addToCart(searchPage.returnedItem, searchPage.returnedItemPrice);
    await addToCartPage.expectItemAdded();
  });
});
