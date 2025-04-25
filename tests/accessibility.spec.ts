import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-core/playwright';
import { LoginPage } from '../pages/LoginPage';

test('Accessibility check on inventory page', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login();

  await injectAxe(page);
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true }
  });
});
