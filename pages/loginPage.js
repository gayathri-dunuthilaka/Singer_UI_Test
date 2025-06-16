class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginPopup = '.login-popup';
    this.emailInput = 'input[name="email"]';
    this.passwordInput = 'input[name="password"]';
    this.submitButton = 'button:has-text("Submit")';
  }

  async isLoginPopupVisible() {
    return await this.page.isVisible(this.loginPopup);
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}

export default LoginPage;