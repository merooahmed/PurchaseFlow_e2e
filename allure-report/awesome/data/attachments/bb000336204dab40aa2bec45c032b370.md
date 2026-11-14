# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: addTocart.spec.js >> Add to cart >> verify add to cart
- Location: tests\addTocart.spec.js:31:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByTestId('product-name')

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - text: View the
    - link "Documentation" [ref=f4e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=f4e5]:
    - generic [ref=f4e7]:
      - generic [ref=f4e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=f4e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=f4e10] [cursor=pointer]
    - navigation [ref=f4e11]:
      - generic [ref=f4e12]:
        - link "Practice Software Testing - Toolshop" [ref=f4e13] [cursor=pointer]:
          - /url: /
        - generic [ref=f4e32]:
          - menubar "Main menu" [ref=f4e33]:
            - menuitem [ref=f4e34]:
              - link "Home" [ref=f4e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=f4e36]:
              - button "Categories" [ref=f4e37] [cursor=pointer]
            - menuitem [ref=f4e38]:
              - link "Contact" [ref=f4e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=f4e40]:
              - link "Sign in" [ref=f4e41] [cursor=pointer]:
                - /url: /auth/login
            - menuitem [ref=f4e42]:
              - link "cart" [active] [ref=f4e43] [cursor=pointer]:
                - /url: /checkout
                - generic [ref=f4e47]: "1"
          - button "Select language" [ref=f4e49] [cursor=pointer]: EN
  - generic [ref=f4e55]:
    - list [ref=f4e57]:
      - listitem:
        - generic:
          - generic: Cart
          - generic: "1"
      - listitem:
        - generic:
          - generic: Sign in
          - generic: "2"
      - listitem:
        - generic:
          - generic: Billing Address
          - generic: "3"
      - listitem:
        - generic:
          - generic: Payment
          - generic: "4"
    - generic [ref=f4e61]:
      - table [ref=f4e62]:
        - rowgroup [ref=f4e63]:
          - row [ref=f4e64]:
            - columnheader "Item" [ref=f4e65]
            - columnheader "Quantity" [ref=f4e66]
            - columnheader "Price" [ref=f4e67]
            - columnheader "Total" [ref=f4e68]
            - columnheader [ref=f4e69]
        - rowgroup [ref=f4e70]:
          - row [ref=f4e71]:
            - cell "Thor Hammer" [ref=f4e72]
            - cell [ref=f4e74]:
              - spinbutton "Quantity for Thor Hammer" [ref=f4e76]: "1"
            - cell "$11.14" [ref=f4e77]
            - cell "$11.14" [ref=f4e78]
            - cell [ref=f4e79]:
              - generic [ref=f4e80] [cursor=pointer]
        - rowgroup [ref=f4e84]:
          - row [ref=f4e85]:
            - cell [ref=f4e86]
            - cell [ref=f4e87]
            - cell [ref=f4e88]:
              - strong [ref=f4e89]: Total
            - cell "$11.14" [ref=f4e90]
            - cell [ref=f4e91]
      - generic [ref=f4e92]:
        - button "Continue Shopping" [ref=f4e93] [cursor=pointer]
        - button "Proceed to checkout" [ref=f4e94] [cursor=pointer]
  - contentinfo [ref=f4e96]:
    - generic [ref=f4e98]:
      - generic [ref=f4e99]: Learn & Explore
      - generic [ref=f4e100]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=f4e102] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=f4e105]:
            - generic [ref=f4e106]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=f4e108] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=f4e111]:
            - generic [ref=f4e112]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=f4e114] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=f4e117]:
            - generic [ref=f4e118]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=f4e119]:
      - generic [ref=f4e120]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=f4e121] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=f4e122] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=f4e123] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=f4e124]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=f4e126] [cursor=pointer]
  - button "Show live shop activity" [ref=f4e130] [cursor=pointer]
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | 
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
  33 |     await this.addToCartButton.click();
  34 |     await this.cartIcon.click();
  35 |   }
  36 | 
  37 |   async expectItemAdded() {
  38 |     // Toast Validation
  39 |     await expect(this.toastMessage).toBeVisible();
  40 |     await expect(this.toastMessage).toHaveText(
  41 |       "Product added to shopping cart.",
  42 |     );
  43 | 
  44 |     // Quantity Validation
  45 |     await expect(this.quantity).toBeVisible();
  46 |     await expect(this.quantity).toHaveText("1");
  47 | 
  48 |     // Product Details Validation
  49 |     const searchItemCardTitleText = (
> 50 |       await this.searchItemCardTitle.textContent()
     |                                      ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
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