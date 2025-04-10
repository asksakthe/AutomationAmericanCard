import {test, expect} from "@playwright/test"
import { appFormDetails } from "../pages/ApplicationFormPage"


test('data feed on form', async ({page}) => {
    const appForm = new appFormDetails(page)
    await appForm.target2page()
    page.waitForTimeout(5000)
    await page.locator("//button[contains(text(), 'Tout Refuser')]").click()
    await appForm.fillFormwithDetails()
    await appForm.validateForm()
})