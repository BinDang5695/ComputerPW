import { COMPUTER_NAMES } from "@constants/names";
import CheapCompEssComponent from "@models/components/computer/CheapCompEssComponent";
import ComputerEssentialComponent from "@models/components/computer/ComputerEssentialComponent";
import ExpensiveCompEssComponent from "@models/components/computer/ExpensiveCompEssComponent";
import StandardCompEssComponent from "@models/components/computer/StandardCompEssComponent";
import ProductEssentialComponent from "@models/components/ProductEssentialComponent";
import { Page } from "@playwright/test";
import HeaderComponent from "@models/components/globals/header/HeaderComponent";

export default class ComputerDetailsPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public headerComponent(): HeaderComponent {
        const headerLocator = this.page.locator(HeaderComponent.SELECTOR);
        return new HeaderComponent(headerLocator);
    }

    // Variant of ComputerEssentialComponent
    public computerComponent(componentName: string): ComputerEssentialComponent {
        const componentLocator = this.page.locator(ProductEssentialComponent.SELECTOR);
        switch (componentName) {
            case COMPUTER_NAMES.cheap:
                return new CheapCompEssComponent(componentLocator);
            case COMPUTER_NAMES.standard:
                return new StandardCompEssComponent(componentLocator);
            case COMPUTER_NAMES.expensive:
                return new ExpensiveCompEssComponent(componentLocator);
            default:
                throw new Error(`The component ${componentName} is invalid!`)
        }
    }

}