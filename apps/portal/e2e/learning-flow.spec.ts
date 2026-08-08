import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('jornada inicial do aluno abre', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});

test('página inicial não tem violações críticas de acessibilidade', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations.filter(({ impact }) => impact === 'critical')).toEqual([]);
});
