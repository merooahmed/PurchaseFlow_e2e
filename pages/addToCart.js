const { expect } = require("@playwright/test");
const cartData= require("../data/CartData.json");
class AddToCartPage {
  constructor(page) {
    this.page = page;

    this.searchItemCard = page
      .locator(".card")
      .filter({ hasText: "Thor Hammer" });

    // Searched Card
    this.searchItemCardTitle = undefined;
    this.searchItemCardPrice = undefined;

    // Cart Items
    this.cartTitleItem = page.getByTestId("product-title");
    this.cartPriceItem = page.getByTestId("line-price");

    this.cartIcon = page.getByTestId("nav-cart");
    this.quantity = page.getByTestId("cart-quantity");
    this.toastMessage = page.locator(".toast-top-right.toast-container");
    this.addToCartButton = page.getByRole("button", {
      name: "Add to cart",
    });
  }

  async addToCart(
    searchItemCardTitle ,searchItemCardPrice 
  ) {
    this.searchItemCardTitle = searchItemCardTitle;
    this.searchItemCardPrice = searchItemCardPrice;
    await this.searchItemCard.click();
    await this.addToCartButton.click();
    await this.cartIcon.click();
  }

  async expectItemAdded() {
    // Toast Validation
    await expect(this.toastMessage).toBeVisible();
    await expect(this.toastMessage).toHaveText(
      cartData.successMsg,
    );

    // Quantity Validation
    await expect(this.quantity).toBeVisible();
    await expect(this.quantity).toHaveText("1");

    // Product Details Validation
    const searchItemCardTitleText = (
      await this.searchItemCardTitle.textContent()
    ).trim();

    const searchItemCardPriceText = (
      await this.searchItemCardPrice.textContent()
    ).trim();

    const cartTitleItemText = (await this.cartTitleItem.textContent()).trim();

    const cartPriceItemText = (await this.cartPriceItem.textContent()).trim();

    expect(cartTitleItemText).toEqual(searchItemCardTitleText);
    expect(cartPriceItemText).toEqual(searchItemCardPriceText);
  }
}

module.exports = { AddToCartPage };
