# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PurchaseFlowTest.spec.js >> Purchase Flow >> verify Purchase Flow is successfully completed
- Location: tests\PurchaseFlowTest.spec.js:20:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByTestId('search-query')

```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | const searchItem = require("../data/search.json");
  3  | 
  4  | class SearchPage {
  5  |   constructor(page) {
  6  |     this.page = page;
  7  |     this.searchInputField = page.getByTestId("search-query");
  8  |     this.searchButton = page.getByTestId("search-submit");
  9  |     this.home = page.getByRole("link", {
  10 |       name: "Home",
  11 |       exact: true,
  12 |     });
  13 |     this.searchResults = page.getByTestId("search_completed");
  14 |     this.returnedItem = page.getByTestId("product-name");
  15 |     this.returnedItemPrice = page.getByTestId("product-price");
  16 |   }
  17 | 
  18 |   async open() {
  19 |    await this.home.click();
  20 |   }
  21 |   async searchItem(item) {
> 22 |     await this.searchInputField.fill(item);
     |                                 ^ Error: locator.fill: Test ended.
  23 |     await this.searchButton.click();
  24 |   }
  25 |   async expectSearchResults() {
  26 |     
  27 |     await expect(this.searchResults).toHaveCount(1);
  28 |     await expect(this.returnedItem).toHaveText(searchItem.Item);
  29 |   }
  30 | }
  31 | module.exports = { SearchPage };
  32 | 
```