import {Page} from "@playwright/test"

export class cardsPage{

    constructor (private page: Page) {}

    async clik2Goldcard (){
        await this.page.locator('text=En savoir plus',{hasText: 'Carte Gold American Express'}).click()
        console.log("successfully clicked the Gold Card American Express")
        return this
    }
}