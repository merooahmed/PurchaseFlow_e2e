# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CheckoutTest.spec.js >> Add to cart >> verify checkout 
- Location: tests\CheckoutTest.spec.js:38:3

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Add to cart' })

```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | const cartData= require("../data/CartData.json");
  3  | class AddToCartPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  | 
  7  |     this.searchItemCard = page
  8  |       .locator(".card")
  9  |       .filter({ hasText: "Thor Hammer" });
  10 | 
  11 |     // Searched Card
  12 |     this.searchItemCardTitle = undefined;
  13 |     this.searchItemCardPrice = undefined;
  14 | 
  15 |     // Cart Items
  16 |     this.cartTitleItem = page.getByTestId("product-title");
  17 |     this.cartPriceItem = page.getByTestId("line-price");
  18 | 
  19 |     this.cartIcon = page.getByTestId("nav-cart");
  20 |     this.quantity = page.getByTestId("cart-quantity");
  21 |     this.toastMessage = page.locator(".toast-top-right.toast-container");
  22 |     this.addToCartButton = page.getByRole("button", {
  23 |       name: "Add to cart",
  24 |     });
  25 |   }
  26 | 
  27 |   async addToCart(
  28 |     searchItemCardTitle ,searchItemCardPrice 
  29 |   ) {
  30 |     this.searchItemCardTitle = searchItemCardTitle;
  31 |     this.searchItemCardPrice = searchItemCardPrice;
  32 |     await this.searchItemCard.click();
> 33 |     await this.addToCartButton.click();
     |                                ^ Error: locator.click: Target page, context or browser has been closed
  34 |     await this.cartIcon.click();
  35 |   }
  36 | 
  37 |   async expectItemAdded() {
  38 |     // Toast Validation
  39 |     await expect(this.toastMessage).toBeVisible();
  40 |     await expect(this.toastMessage).toHaveText(
  41 |       cartData.successMsg,
  42 |     );
  43 | 
  44 |     // Quantity Validation
  45 |     await expect(this.quantity).toBeVisible();
  46 |     await expect(this.quantity).toHaveText("1");
  47 | 
  48 |     // Product Details Validation
  49 |     const searchItemCardTitleText = (
  50 |       await this.searchItemCardTitle.textContent()
  51 |     ).trim();
  52 | 
  53 |     const searchItemCardPriceText = (
  54 |       await this.searchItemCardPrice.textContent()
  55 |     ).trim();
  56 | 
  57 |     const cartTitleItemText = (await this.cartTitleItem.textContent()).trim();
  58 | 
  59 |     const cartPriceItemText = (await this.cartPriceItem.textContent()).trim();
  60 | 
  61 |     expect(cartTitleItemText).toEqual(searchItemCardTitleText);
  62 |     expect(cartPriceItemText).toEqual(searchItemCardPriceText);
  63 |   }
  64 | }
  65 | 
  66 | module.exports = { AddToCartPage };
  67 | 
```