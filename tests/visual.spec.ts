import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Visual snapshot of inventory page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login();
  await expect(page).toHaveScreenshot('inventory-page.png', { threshold: 0.2 });
});
