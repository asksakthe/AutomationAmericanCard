import {Page} from "@playwright/test"


export class goldCardPage{

    constructor (private page:Page){}



    async click2Goldcards(){
        await this.page.locator("(//a[contains(text(), 'Demandez votre Carte')])[1]").click()
        console.log("successfully clicked the targeted GoldCard")
        return this
    }
}