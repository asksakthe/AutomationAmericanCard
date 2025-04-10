import {expect, Page} from "@playwright/test"

export class appFormDetails{

    constructor(private page:Page){}

    async target2page() {
        await this.page.goto("https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail")
        return this
    }


    async fillFormwithDetails() {
        await this.page.locator("//label/span[contains(text(), 'M.')]").check()
        await expect(this.page.locator('#MR')).toBeChecked()
        //Firstname Details
        await this.page.fill("#fieldControl-input-firstName",'user')
        console.log("Entered customer Firstname Successfully")

        //Lastname Details
        await this.page.fill("#fieldControl-input-lastName", 'test')
        console.log("Entered customer Lastname Successfully")

        //DOB details
        await this.page.fill("#fieldControl-input-dateOfBirth", '31/05/1990')
        console.log("Entered details of customer date of brith Successfully")

        //Email Details
        await this.page.fill("#fieldControl-input-email",'abcold@getMaxListeners.com')
        console.log("Entered details of customer Email ID Successfully")

        //mobile number Details
        await this.page.fill("#fieldControl-input-mobilePhoneNumber",'0712345678')
        console.log("Entered details of customer Email ID Successfully")

        //Submitting the details
        await this.page.locator("//button[text()='Sauvegarder et Continuer']").click()
        console.log("1st Click save and next Successfully")

        //Continue with 2nd form details 
        await this.page.waitForTimeout(3000)
        await this.page.fill('#birthName', 'abcde')
        await this.page.fill('#fieldControl-input-placeOfBirth', 'paris')
        await this.page.locator('#fieldControl-input-departmentOfBirth').selectOption({index: 3})
        await this.page.locator('#fieldControl-input-countryOfBirth').selectOption({value: 'France'})
        await this.page.locator('#fieldControl-input-nationality').selectOption({value: 'France'})
        await this.page.fill('#fieldControl-input-residentialAddressLine2', '18 Av')
        await this.page.fill('#fieldControl-input-postcode', '93170')
        await this.page.fill('#fieldControl-input-cityTown', 'paris')
        await this.page.locator('#fieldControl-input-personalResidentialStatus').selectOption({value: 'RENT'})
        await this.page.getByRole('button',{name:'submit'}).click()
        console.log("2nd form data Click save and next Successfully")

        //Continue with 3rd form details
        await this.page.waitForTimeout(3000)
        await this.page.fill('#fieldControl-input-bankAccountNumber','FR76 3000 6000 0112 3456 7890 189')
        await this.page.fill('#fieldControl-input-bankIdentifierCode','BDFEFRPP789')
        await this.page.locator('#fieldControl-input-tenureOfAccount').selectOption({value: '0300'})
        await this.page.fill('#fieldControl-input-annualPersonalIncome', '100000')
        await this.page.getByLabel('No').check()
        await this.page.locator('#fieldControl-input-totalAssets').selectOption({value: '100'})
        await this.page.locator('#fieldControl-input-occupation').selectOption({value: 'EMPLOYEE'})
        await this.page.locator('#fieldControl-input-occupationDescription').selectOption({index: 3})
        await this.page.locator('#fieldControl-input-employmentIndustry').selectOption({index: 3})
        await this.page.fill("#fieldControl-input-employerName", 'Accenture')
        await this.page.locator('#fieldControl-input-employmentDuration').selectOption({value: '0700'})
        await this.page.getByRole('button',{name:'submit'}).click()
        console.log("3rd form Clicked save and next Successfully")

        // Final page details
        await this.page.waitForTimeout(3000)
        await this.page.fill('#fieldControl-input-mothersMaidenName','Ronchirs')
        await this.page.fill('#fieldControl-input-pin','9900')
        await this.page.fill('#fieldControl-input-confirmPin','9900')
        await this.page.getByLabel('No').check()
        await expect(this.page.locator('#marketingEmailPreferences-false')).toBeChecked()
        await this.page.getByLabel('No').check()
        await expect(this.page.locator('#marketingSMSPhonePostalPreferences-OPT_OUT')).toBeChecked()
        await this.page.getByRole('button',{name:'submit'}).click()
        await this.page.waitForTimeout(3000)
        console.log("3rd form Clicked save and next Successfully")   
    }

    async validateForm(){
        //validation
        await expect(this.page.getByAltText('Merci ')).toBeVisible({timeout:8000})
        console.log("application submitted Successfully")
        return this
    }

}