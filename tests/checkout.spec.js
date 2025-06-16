import { test, expect } from '@playwright/test';
import { user } from '../config/test-data';
import HomePage from '../pages/homePage';
import CartPage from '../pages/cartPage';
import CheckoutPage from '../pages/checkoutPage';

test.describe('Checkout Tests', () => {
  let homePage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);
    await homePage.navigate();
    
    // Assuming user is logged in and has items in cart
    // In real test, you would set up this state first
  });

  test('TC_006 - Proceed to checkout', async ({ page }) => {
    // Step 1: Go to cart
    await homePage.openCart();
    await expect(await cartPage.isCartDropdownVisible()).toBeTruthy();
    
    // Step 2: Proceed to checkout
    await cartPage.proceedToCheckout();
    await expect(await checkoutPage.isCheckoutFormVisible()).toBeTruthy();
    
    // Step 3: Enter address details
    await checkoutPage.fillAddressDetails({
      name: user.fullName,
      address: '123 Test Street',
      city: 'Colombo'
    });
    
    // Step 4: Choose payment method
    await checkoutPage.selectPaymentMethod('Credit Card');
    await checkoutPage.placeOrder();
    await expect(page.locator('.order-confirmation')).toBeVisible();
  });
});