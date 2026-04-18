import { Page } from "@playwright/test";
import CartItemRowComponent from "@models/components/shoppingCart/CartItemRowComponent";
import TotalsComponent from "@models/components/shoppingCart/TotalsComponent";

export default class ShoppingCartPage {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public async cartItemRowCompList(): Promise<CartItemRowComponent[]>{
        const cartItemRowLocatorList = await this.page.locator(CartItemRowComponent.SELECTOR).all();
        return cartItemRowLocatorList.map(comp => new CartItemRowComponent(comp));
    }

    public totalsComponent(): TotalsComponent {
        return new TotalsComponent(this.page.locator(TotalsComponent.SELECTOR));
    }

}