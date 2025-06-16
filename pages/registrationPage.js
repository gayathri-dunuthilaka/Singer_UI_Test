class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.registerForm = '.register-form';
    this.fullNameInput = 'input[name="fullName"]';
    this.emailInput = 'input[name="email"]';
    this.mobileInput = 'input[name="mobile"]';
    this.createAccountButton = 'button:has-text("Create New Account")';
    this.successMessage = '.success-message';
  }

  async isRegistrationFormVisible() {
    return await this.page.isVisible(this.registerForm);
  }

  async fillRegistrationForm(fullName, email, mobile) {
    await this.page.fill(this.fullNameInput, fullName);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.mobileInput, mobile);
  }

  async submitRegistration() {
    await this.page.click(this.createAccountButton);
  }

  async isSuccessMessageVisible() {
    return await this.page.isVisible(this.successMessage);
  }
}

export default RegistrationPage;