import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://summ-it.eu/');
  await expect(page.getByRole('link', { name: 'Summit logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Offer' })).toBeVisible();
  await expect(page.locator('#menu-item-10252').getByRole('link', { name: 'Case study' })).toBeVisible();
  await expect(page.locator('#menu-item-10253').getByRole('link', { name: 'About summ-it' })).toBeVisible();
  await expect(page.locator('#menu-item-10254').getByRole('link', { name: 'Team' })).toBeVisible();
  await expect(page.locator('#menu-item-10255').getByRole('link', { name: 'Career' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Knowladge base' })).toBeVisible();
  await expect(page.locator('#menu-item-10304').getByRole('link', { name: 'Contact' })).toBeVisible();
  await expect(page.locator('li:nth-child(9) > .nav-link')).toBeVisible();
  await expect(page.locator('#primaryNavToggler').getByRole('link', { name: 'Free consultation' })).toBeVisible();
});