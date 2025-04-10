import { Page } from "@playwright/test";


export async function handlePopup_ignore(page: Page) {


    //handling alerts
    const ignoreBtn = page.locator("#user-consent-management-granular-banner-accept-all-button")
    if (await ignoreBtn.isVisible({timeout: 8000})){
        await ignoreBtn.click()
    }
    
    
}
//user-consent-management-granular-banner-decline-all-button