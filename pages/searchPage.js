class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchResults = '.product-item';
    this.productLink = '.product-name';
  }

  async getSearchResultsCount() {
    return (await this.page.$$(this.searchResults)).length;
  }

  async openProductDetails(productName) {
    await this.page.click(`${this.productLink}:has-text("${productName}")`);
  }
}

export default SearchPage;