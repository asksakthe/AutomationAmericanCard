import {Page} from "@playwright/test"

export class appFormDetails{
    constructor(private page:Page){}

    async fillFormwithDetails(civility:string, fName:string, lName:string, dob: string, email:string, mobile:number) {
        if (civility == 'M.'){
            await this.page.locator("#MR").check()
            console.log(" Clicking the radio button of MR")
        }
        else{
            await this.page.locator('#MS').check()
            console.log(" Clicking the radio button of MRS")
        }
        //Firstname Details
        const firstname = this.page.locator("#fieldControl-input-firstName")
        await firstname.fill(fName)
        console.log("Entered customer Firstname Successfully")

        //Lastname Details
        const lastname = this.page.locator("#fieldControl-input-lastName")
        await lastname.fill(lName)
        console.log("Entered customer Lastname Successfully")

        //DOB details
        const DOB = this.page.locator("#fieldControl-input-dateOfBirth")
        await DOB.fill(dob)
        console.log("Entered details of customer date of brith Successfully")

        //Email Details
        const Email_info = this.page.locator("#fieldControl-input-email")
        await Email_info.fill(email)
        console.log("Entered details of customer Email ID Successfully")

        //mobile number Details
        let mob = mobile.toString()
        const contact_info = this.page.locator("#fieldControl-input-email")
        await contact_info.fill(mob)
        console.log("Entered details of customer Email ID Successfully")

        //Submitting the details
        await this.page.locator("//button[text()='Sauvegarder et Continuer']").click()
        console.log("Customer details entered Successfully")


    }

}