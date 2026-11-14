
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { SearchPage } = require("../pages/searchPage");
const { AddToCartPage } = require("../pages/addToCart");
const { RegisterPage } = require("../pages/RegisterPage");
const { generateRandomEmail } = require("../data/randomEmail");
const searchItem = require("../data/search.json");
const user = require("../data/user_auth_test.json");
const { CheckoutPage } = require("../pages/CheckoutPage");

test.describe("Purchase Flow", () => {
    let registerPage;
    let registeredEmail;
    let loginPage;
    let searchPage;
    let addToCartPage;
    let checkoutPage;

    test("verify Purchase Flow is successfully completed", async ({ page }) => {
        //register
        registerPage = new RegisterPage(page);
        registeredEmail = generateRandomEmail();
        await registerPage.open();
        await registerPage.register(registeredEmail);
        //login
        loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.login(registeredEmail, user.register.password);
        console.log("secondemail: ", registeredEmail);
        //search for item
        searchPage = new SearchPage(page);
        await searchPage.open();
        await searchPage.searchItem(searchItem.Item);
        //add to cart
        addToCartPage = new AddToCartPage(page);
        await addToCartPage.addToCart(searchPage.returnedItem, searchPage.returnedItemPrice);
        //checkout
        checkoutPage = new CheckoutPage(page);
        await checkoutPage.Checkout(registeredEmail);
        await checkoutPage.expectCheckoutPage();
    });



});