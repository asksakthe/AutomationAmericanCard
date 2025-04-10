import {Page} from "@playwright/test"

 
export class cardsPage{

    constructor (private page: Page) {}

    async landing_to_targetPage(){
        await this.page.goto("https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021")
    }

    async clik2card(){
        //await this.page.getByAltText("En savoir plus").click()
        //await this.page.locator('text=En savoir plus',{hasText: 'Carte Gold American Express'}).click()
        await this.page.locator("(//h2[contains(text(), 'Carte Gold American Express')])[1]").click()
        console.log("successfully clicked the Gold Card American Express")
        return this
    }

    async click2Goldcards(){
        await this.page.locator("(//a[contains(text(),'Demandez votre Carte')])[1]").click()
        console.log("successfully clicked the targeted GoldCard")
        return this
    }
}