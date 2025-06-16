class CartPage {
  constructor(page) {
    this.page = page;
    this.cartDropdown = '.cart-dropdown';
    this.productInCart = '.cart-item';
    this.proceedToCheckoutButton = 'button:has-text("Proceed to Checkout")';
  }

  async isCartDropdownVisible() {
    return await this.page.isVisible(this.cartDropdown);
  }

  async getProductsInCartCount() {
    return (await this.page.$$(this.productInCart)).length;
  }

  async proceedToCheckout() {
    await this.page.click(this.proceedToCheckoutButton);
  }
}

export default CartPage;