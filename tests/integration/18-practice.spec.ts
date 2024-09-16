import {test, Locator} from "@playwright/test";

test.describe('First test suite', () => {
  test('Playwright locator() API', async({ page }) => {
    await page.goto('https://techglobal-training.com/')

    // let logo: Locator;

    // logo = page.locator("#togo")

    await page.locator("#togo").click();

    await page.click('#logo')

    const myLogo = page.locator('#logo')

    await myLogo.click()
  })

  test('Playwright - Custom Pseudo Classes', async ({ page }) => {
    await page.goto('https://techglobal-training.com/frontend')

    const cards = page.locator('.card')

    await cards.locator(':has-text("HTML Elements")').click()

    // await page.locator('a', { hasText: "HTML Elements"}).click()

    await page.locator('button:has-text("Register")').click()
    await page.locator('button:has-text("Sign in"):visible').highlight()

    const countOfDivs = await page.locator('#radio-button-group > div').count()

    console.log(countOfDivs + ' is the amount of div elements in radio group')

    const javaRadioButton = page.locator('#java_radio')

    const javaParentDiv = page.locator('#radio-button-group > div', { has: javaRadioButton })

    console.log(await javaParentDiv.count() + ' is the real amount we need')

    const noJavaParentDiv = page.locator('#radio-button-group > div', { hasNot: javaRadioButton })

    console.log(await noJavaParentDiv.count() + ' is the real amount we need')
  })
})