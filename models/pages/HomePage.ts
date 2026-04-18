import PageBodyComponent from "@models/components/PageBodyComponent";
import { Page } from "@playwright/test";
import FooterComponent from "@models/components/globals/footer/FooterComponent";

export default class HomePage {
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.SELECTOR));
    }

    public footerComponent(): FooterComponent {
        const footerLocator = this.page.locator(FooterComponent.SELECTOR);
        return new FooterComponent(footerLocator);
    }


}