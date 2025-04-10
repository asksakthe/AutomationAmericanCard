import {test} from "@playwright/test"
import { homePage } from "../pages/HomePage";



test('Gold card flow', async ({page}) => {

    const home = new homePage(page)

    await home.navigate_target()

    await home.clikCartesAmericanExpress()
     
    await page.waitForTimeout(3000)
   
    
})