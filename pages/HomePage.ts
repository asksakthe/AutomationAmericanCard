import { Page } from "@playwright/test";

export class homePage{
    constructor(private page:Page){}

    //Landing into HomePage
    async navigate_target(){
        await this.page.goto("https://www.americanexpress.com/fr-fr/?inav=NavLogo")
    }


    //click to target action
    async clikCartesAmericanExpress(){
        await this.page.getByRole('button', {name: 'Devenir Client'}).click()
        console.log("Clicked the tab menu for the Cartes American Express")
        await this.page.locator("(//span[contains(text(), 'Les Cartes AMERICAN EXPRESS')])[1]").click()
        console.log(" Successfully clicked cartes American Express ")
        //return this
    }
}