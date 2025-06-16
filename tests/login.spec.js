import { test, expect } from '@playwright/test';
import { baseUrl, user } from '../config/test-data';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import RegistrationPage from '../pages/registrationPage';

test.describe('User Registration Tests', () => {
  let homePage;
  let loginPage;
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    registrationPage = new RegistrationPage(page);
    await homePage.navigate();
  });

  test('TC_001 - User signup with email & password', async ({ page }) => {
    // Step 1: Navigate to site (done in beforeEach)
    await expect(page).toHaveURL(baseUrl);
    
    // Step 2: Click login button
    await homePage.clickLoginButton();
    await expect(await loginPage.isLoginPopupVisible()).toBeTruthy();
    
    // Step 3: Click Register link
    await loginPage.clickRegisterLink();
    await expect(await registrationPage.isRegistrationFormVisible()).toBeTruthy();
    
    // Step 4: Fill in registration form
    await registrationPage.fillRegistrationForm(
      user.fullName,
      user.email,
      user.mobile
    );
    
    // Step 5: Click Create New Account button
    await registrationPage.submitRegistration();
    await expect(await registrationPage.isSuccessMessageVisible()).toBeTruthy();
  });
});