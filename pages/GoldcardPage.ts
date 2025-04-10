import {Page} from "@playwright/test"


class goldCardPage{

    constructor (private page:Page){}

    async click2Goldcards(){
        await this.page.getByRole('link',{name: 'Demandez votre Carte'}).click()
        console.log("successfully clicked the targeted GoldCard")
        return this
    }
}