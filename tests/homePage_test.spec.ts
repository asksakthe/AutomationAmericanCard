import { homePage } from "../pages/HomePage";
import {expect, test} from "@playwright/test";

test("checking home page", async ({page}) => {

    const FR_Card_Home = new homePage(page);
    await FR_Card_Home.navigate_target()
    await FR_Card_Home.clikCartesAmericanExpress()
    
    // verification the home 
    const verify = await expect(page).toHaveTitle('Cartes American Express | AMEX FR')
    // if ()){
    //     console.log("home page to landing page successfully")
    // }
    // else(
    //     console.log("bad luck !!!")
    // )
    console.log(verify)
})