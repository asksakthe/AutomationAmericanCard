import {expect, test} from "@playwright/test"
import { homePage } from "../pages/HomePage";
import { cardsPage } from "../pages/CardsPage";
import { goldCardPage } from "../pages/GoldcardPage";
import { appFormDetails } from "../pages/ApplicationFormPage";
import { handlePopup } from "../utils/popHandler";



test('requesting for Gold AMEX card', async ({page}) => {


    //application launch
    const home = new homePage(page)
    await home.navigate_target()
    await page.waitForTimeout(3000)
    await page.locator("//button[contains(text(), 'Tout Refuser')]").click()

    //Navigate into Card Home
    await home.clikCartesAmericanExpress()
    await page.waitForTimeout(4000)

    //Navigate into Cards Section
    const cardShome = new cardsPage(page);
    await page.locator("//button[contains(text(), 'Tout Refuser')]").click()
    await cardShome.clik2card()
    const verify02 = await expect(page).toHaveTitle('Gold American Express: La Carte à la Hauteur de Votre Quotidien')
    //expect(page).toHaveTitle
    console.log(verify02)

    //Handpick the Gold Card
    const cardHome = new goldCardPage(page);
    await cardHome.click2Goldcards()
    console.log("Clciked Gold card Successfully")

    //Feeding details into Form
    const filldata = new appFormDetails(page)
    await page.waitForTimeout(5000)
    //await page.locator("//button[contains(text(), 'Tout Refuser')]").click()
    await filldata.fillFormwithDetails()
    await filldata.validateForm()
    
})