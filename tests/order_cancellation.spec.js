import { test, expect } from '@playwright/test';
import { user } from '../config/test-data';
import HomePage from '../pages/homePage';

test.describe('Order Cancellation Tests', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
    
    // Login first (assuming login test passes)
    await homePage.clickLoginButton();
    await page.fill('input[name="email"]', user.existingEmail);
    await page.fill('input[name="password"]', user.existingPassword);
    await page.click('button:has-text("Submit")');
    await expect(page.locator('.user-profile')).toBeVisible();
  });

  test('TC_007 - Cancel an Order', async ({ page }) => {
    // Step 1: Already logged in (done in beforeEach)
    
    // Step 2: Go to order history
    await page.click('.account-icon');
    await page.click('text=Order History');
    await expect(page.locator('.order-history')).toBeVisible();
    
    // Step 3: Attempt to cancel order
    await page.click('.order-item:first-child .cancel-button');
    await expect(page.locator('.cancellation-popup')).toBeVisible();
    
    // Step 4: Verify cancellation instructions
    const instructions = await page.textContent('.cancellation-instructions');
    expect(instructions).toContain('call');
    expect(instructions).toMatch(/\d{10}/); // Verify phone number format
  });
});