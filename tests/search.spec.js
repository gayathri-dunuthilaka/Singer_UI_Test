import { test, expect } from '@playwright/test';
import { products } from '../config/test-data';
import HomePage from '../pages/homePage';
import SearchPage from '../pages/searchPage';

test.describe('Product Search Tests', () => {
  let homePage;
  let searchPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    searchPage = new SearchPage(page);
    await homePage.navigate();
  });

  test('TC_003 - Search product by name', async ({ page }) => {
    // Step 1: Navigate to site (done in beforeEach)
    
    // Step 2: Click on search bar and verify
    const searchInput = page.locator(homePage.searchInput);
    await searchInput.click();
    await expect(searchInput).toBeFocused();
    
    // Step 3: Type search keyword
    await homePage.searchForProduct(products.searchKeyword);
    
    // Step 4: Verify search results
    await expect(await searchPage.getSearchResultsCount()).toBeGreaterThan(0);
  });
});