import { cardsPage } from "../pages/CardsPage";
import {expect, test} from "@playwright/test";
import { appFormDetails } from "../pages/ApplicationFormPage";
import { handlePopup_ignore } from "../utils/popHandler";
import { TIMEOUT } from "dns";

test("checking home page", async ({page}) => {

    const cardHome = new cardsPage(page);
    await cardHome.landing_to_targetPage()
    await page.locator("//button[contains(text(), 'Tout Refuser')]").click()
    //await page.getByRole('button').click({timeout: 5000});
    await cardHome.clik2card()
    
    // verification the home 
    const verify02 = await expect(page).toHaveTitle('Gold American Express: La Carte à la Hauteur de Votre Quotidien')
    console.log(verify02)

    await cardHome.click2Goldcards()
    console.log("Clciked Gold card Successfully")

    const filldata = new appFormDetails(page)
    await page.waitForTimeout(5000)
    //await page.locator("//button[contains(text(), 'Tout Refuser')]").click()
    await filldata.fillFormwithDetails()
    await filldata.validateForm()
}
)