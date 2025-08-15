import { test, expect } from '@playwright/test';
import {LoanApplicationPage} from "./page";

test.beforeEach('title of the loan page', async ({ page }) => {

  await page.goto('https://loan-app.tallinn-learning.ee/small-loan');

});

test('loan application continue button is disabled', async ({ page }) => {

  const LoanApp = new LoanApplicationPage(page);
  await LoanApp.apply()
  await expect(LoanApp.continueButton).toBeDisabled();

});
test('loan application- fill username and password and continue button is enabled ', async ({ page }) => {

  const LoanApp = new LoanApplicationPage(page);
  await LoanApp.apply()
  await LoanApp.credentials('usernametest','passwordtest')
  await LoanApp.continueLoginButton()
  await LoanApp.finalContinueButton()
  await LoanApp.finalOkButton()

});

test('loan flow - calculator negative test out of boundary', async ({ page }) => {

  const LoanApp = new LoanApplicationPage(page);
  await LoanApp.fieldAmount.fill('499')
  await expect(LoanApp.fieldError).toBeVisible()

  await LoanApp.fieldAmount.fill('599')
  await expect(LoanApp.fieldError).toBeHidden()

  await LoanApp.fieldAmount.fill('10001')
  await expect(LoanApp.fieldError).toBeVisible()

});

test('loan application verify scroll down action', async ({ page }) => {

  const LoanApp = new LoanApplicationPage(page);
  await LoanApp.imageButton2.hover()
  await expect(LoanApp.fieldAmount).not.toBeInViewport()

  await LoanApp.imageButton2.click()
  await expect(LoanApp.fieldAmount).toBeInViewport()

  await LoanApp.imageButton1.click()
  await expect(LoanApp.fieldAmount).toBeInViewport()

});

test('loan application verify drop down', async ({ page }) => {

  const LoanApp = new LoanApplicationPage(page);
  const count = await LoanApp.dropdownButtonPeriodOption.count()
  expect(count).toBe(7);
  await LoanApp.dropdownFieldPeriod.click()

});
