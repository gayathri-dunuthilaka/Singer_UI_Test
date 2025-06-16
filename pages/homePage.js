import BasePage from './basePage';

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.loginButton = 'button:has-text("Login")';
    this.searchInput = '.search-bar input';
    this.searchButton = '.search-bar button';
    this.cartIcon = '.cart-icon';
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async searchForProduct(productName) {
    await this.page.fill(this.searchInput, productName);
    await this.page.click(this.searchButton);
  }

  async openCart() {
    await this.page.click(this.cartIcon);
  }
}

export default HomePage;