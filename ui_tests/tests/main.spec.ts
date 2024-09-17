import { test, expect } from '@playwright/test';

import { BasePage } from '../Page'

test.describe('Main', () => {
  test('should change with default values', async ({  page }) => {
    const mainPage = new BasePage(page)
    await mainPage.waitForPageSetup()

    await mainPage.getCounterButton().click()
    await mainPage.getCounterButton().click()

    const text = await mainPage.getCounterButtonText().textContent()

    expect(text).toEqual('2')
  })

  test('should change start_at', async ({  page }) => {
    const mainPage = new BasePage(page)
    await mainPage.waitForPageSetup()
    
    await mainPage.fillInput(mainPage.getStatAtInput(), 1)

    const text = await mainPage.getCounterButtonText().textContent()

    expect(text).toEqual('2')
  })

  test('should change step', async ({  page }) => {
    const mainPage = new BasePage(page)
    await mainPage.waitForPageSetup()
    
    await mainPage.fillInput(mainPage.getStepInput(), 3)

    const text = await mainPage.getCounterButtonText().textContent()

    expect(text).toEqual('3')
  })

  test('should change start_at and step', async ({  page }) => {
    const mainPage = new BasePage(page)
    await mainPage.waitForPageSetup()
    
    await mainPage.fillInput(mainPage.getStatAtInput(), 3)
    await mainPage.fillInput(mainPage.getStepInput(), 3)

    const text = await mainPage.getCounterButtonText().textContent()

    expect(text).toEqual('6')
  })

  test('should handle click count', async ({  page }) => {
    const mainPage = new BasePage(page)
    await mainPage.waitForPageSetup()
    
    await mainPage.fillInput(mainPage.getStatAtInput(), 3)
    await mainPage.fillInput(mainPage.getStepInput(), 3)

    await mainPage.getCounterButton().click()

    const text = await mainPage.getCounterButtonText().textContent()

    expect(text).toEqual('9')
  })
})
