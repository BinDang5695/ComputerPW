import { Page } from "@playwright/test";
import BillingAddressComponent from "@models/components/checkout/BillingAddressComponent";
import ShippingAdressComponent from "@models/components/checkout/ShippingAdressComponent";
import ShippingMethodComponent from "@models/components/checkout/ShippingMethodComponent";
import PaymentMethodComponent from "@models/components/checkout/PaymentMethodComponent";
import ConfirmOrderComponent from "@models/components/checkout/ConfirmOrderComponent";
import PaymentInformationComponent from "@models/components/checkout/PaymentInformationComponent";

export default class CheckoutPage {

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    public billingAddressComponent(): BillingAddressComponent{
        return new BillingAddressComponent(this.page.locator(BillingAddressComponent.SELECTOR));
    }

    public shippingAdressComponent(): ShippingAdressComponent{
        return new ShippingAdressComponent(this.page.locator(ShippingAdressComponent.SELECTOR));
    }

    public shippingMethodComponent(): ShippingMethodComponent{
        return new ShippingMethodComponent(this.page.locator(ShippingMethodComponent.SELECTOR));
    }

    public paymentMethodComponent(): PaymentMethodComponent{
        return new PaymentMethodComponent(this.page.locator(PaymentMethodComponent.SELECTOR));
    }

    public paymentInformationComponent(): PaymentInformationComponent{
        return new PaymentInformationComponent(this.page.locator(PaymentInformationComponent.SELECTOR));
    }

    public confirmOrderComponent(): ConfirmOrderComponent{
        return new ConfirmOrderComponent(this.page.locator(ConfirmOrderComponent.SELECTOR));
    }

}