import { Locator, Page } from "playwright/test"

// create PageObject to work interact with UI modules
export class BasePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async waitForPageSetup() {
    await this.page.goto('/')
  }

  getElementByText(text: string) {
    return this.page.getByText(text)
  }

  getElementById(id: string, locator?: Locator) {
    return (locator || this.page).getByTestId(id)
  }

  getCounterButton() {
    return this.getElementById('count_button')
  }

  getCounterButtonText() {
    return this.getElementById('count_button_text')
  }

  getStatAtInput() {
    return this.getElementById('start_at').locator('input')
  }

  getStepInput() {
    return this.getElementById('step').locator('input')
  }

  async fillInput(element: Locator, value: number) {
    await element.clear()

    await element.fill(value.toString())

    await element.blur()
  }
}
