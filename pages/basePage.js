class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.singersl.com');
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }
}

export default BasePage;