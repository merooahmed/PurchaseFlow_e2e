const { expect } = require("@playwright/test");
const { User } = require("../data/user");
const { LoginPage } = require("./LoginPage");
const { RegisterPage } = require("./RegisterPage");
const { SearchPage } = require("./searchPage");
const { AddToCartPage } = require("./addToCart");
const { CheckoutPage } = require("./CheckoutPage");
class PurchaseFlowPage {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.registerPage = new RegisterPage(page);
        this.searchPage = new SearchPage(page);
        this.addToCartPage = new AddToCartPage(page);
        this.checkoutPage = new CheckoutPage(page);
    }
    async PurchaseFlow() {
        await this.loginPage.login(registeredEmail, User.password);
        await this.searchPage.searchItem("Thor Hammer");
        await this.addToCartPage.addToCart(this.searchPage.returnedItem, this.searchPage.returnedItemPrice);
        await this.checkoutPage.Checkout(registeredEmail);
        await this.checkoutPage.expectCheckoutPage();
    }
}
module.exports = { PurchaseFlowPage };