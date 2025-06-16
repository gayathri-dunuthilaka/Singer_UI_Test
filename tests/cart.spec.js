import { test, expect } from '@playwright/test';
import { products } from '../config/test-data';
import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';
import CartPage from '../pages/cartPage';

test.describe('Cart Functionality Tests', () => {
  let homePage;
  let searchPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    cartPage = new CartPage(page);
    await homePage.navigate();
  });

  test('TC_004 - Add a product to the cart', async ({ page }) => {
    // Step 1: Search for product
    await homePage.searchForProduct(products.specificProduct);
    
    // Step 2: Click on product
    await searchPage.openProductDetails(products.specificProduct);
    await expect(page.locator('.product-details')).toBeVisible();
    
    // Step 3: Add to cart
    await page.click('button:has-text("Add to Cart")');
    await expect(page.locator('.add-to-cart-success')).toBeVisible();
    
    // Step 4: Verify cart
    await homePage.openCart();
    await expect(await cartPage.getProductsInCartCount()).toBe(1);
  });

  test('TC_005 - View cart', async ({ page }) => {
    // This would require a product to be in cart first
    await homePage.openCart();
    await expect(await cartPage.isCartDropdownVisible()).toBeTruthy();
    await expect(await cartPage.getProductsInCartCount()).toBeGreaterThan(0);
  });
});