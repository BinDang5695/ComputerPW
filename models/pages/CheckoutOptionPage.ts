import { Page } from "@playwright/test";

export default class CheckoutOptionPage {

    private checkoutAsGuestBtnSel: string = 'input[class*="checkout-as-guest-button"]';
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async checkOutAsGuest(): Promise<void>{
        await this.page.locator(this.checkoutAsGuestBtnSel).click();
    }


}