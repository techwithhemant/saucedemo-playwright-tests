import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Verify Z-A sorting', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.login();
  await inventory.sortBy('za');

  const names = await inventory.getItemNames();
  const sorted = [...names].sort().reverse();

  expect(names).toEqual(sorted);
});

test('Verify Price High to Low sorting', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.login();
  await inventory.sortBy('hilo');

  const prices = await inventory.getItemPrices();
  const sorted = [...prices].sort((a, b) => b - a);

  expect(prices).toEqual(sorted);
});
