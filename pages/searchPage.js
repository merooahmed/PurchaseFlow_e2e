const { expect } = require("@playwright/test");
const searchItem = require("../data/search.json");

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInputField = page.getByTestId("search-query");
    this.searchButton = page.getByTestId("search-submit");
    this.home = page.getByRole("link", {
      name: "Home",
      exact: true,
    });
    this.searchResults = page.getByTestId("search_completed");
    this.returnedItem = page.getByTestId("product-name");
    this.returnedItemPrice = page.getByTestId("product-price");
  }

  async open() {
   await this.home.click();
  }
  async searchItem(item) {
    await this.searchInputField.fill(item);
    await this.searchButton.click();
  }
  async expectSearchResults() {
    
    await expect(this.searchResults).toHaveCount(1);
    await expect(this.returnedItem).toHaveText(searchItem.Item);
  }
}
module.exports = { SearchPage };
