class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutForm = '.checkout-form';
    this.addressInputs = {
      name: 'input[name="name"]',
      address: 'textarea[name="address"]',
      city: 'input[name="city"]'
    };
    this.paymentMethods = '.payment-method';
    this.placeOrderButton = 'button:has-text("Place Order")';
  }

  async isCheckoutFormVisible() {
    return await this.page.isVisible(this.checkoutForm);
  }

  async fillAddressDetails(addressData) {
    for (const [field, selector] of Object.entries(this.addressInputs)) {
      await this.page.fill(selector, addressData[field]);
    }
  }

  async selectPaymentMethod(methodName) {
    await this.page.click(`${this.paymentMethods}:has-text("${methodName}")`);
  }

  async placeOrder() {
    await this.page.click(this.placeOrderButton);
  }
}

export default CheckoutPage;