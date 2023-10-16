import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wayv Apparel/);
});

test('dropdown function', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the dropdown button link.
  await page.getByLabel('DropdownToggle').click();

  // Expects page to have a dropdown list visible.
  await expect(page.getByLabel('Dropdown',{exact:true})).toBeVisible();
});
