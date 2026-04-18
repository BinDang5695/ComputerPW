import { Locator } from "@playwright/test";
import ComputerEssentialComponent from "./ComputerEssentialComponent";

export default class StandardCompEssComponent extends ComputerEssentialComponent {

    private allDropdownSelector: string = 'select[id^="product_attribute"]';

    public async selectProcessor(value: string): Promise<string | null> {
        const PROCESSOR_DROPDOWN_INDEX = 0;

        const processorDropdownLocator = this.component
            .locator(this.allDropdownSelector)
            .nth(PROCESSOR_DROPDOWN_INDEX);

        return await this.selectOption(processorDropdownLocator, value);
    }

    public async selectRAM(value: string): Promise<string | null> {
        const RAM_DROPDOWN_INDEX = 1;

        const ramDropdownLocator = this.component
            .locator(this.allDropdownSelector)
            .nth(RAM_DROPDOWN_INDEX);

        return await this.selectOption(ramDropdownLocator, value);
    }

    private async selectOption(dropdown: Locator, value: string): Promise<string | null> {
        let optionIndex = -1;
        let optionFullText: string | null = '';

        const allOptionLocators: Locator[] = await dropdown.locator('option').all();

        // Loop over all options.textContent()
        for (const optionLocator of allOptionLocators) {
            optionFullText = await optionLocator.textContent();
            if (optionFullText?.startsWith(value)) {
                // If text contains value -> Mark the index
                optionIndex = allOptionLocators.indexOf(optionLocator);
                break;
            }
        }

        if (optionIndex < 0) {
            throw new Error(`The value: ${value} is not existing!`);
        }

        // selectOption({index: markedIndex})
        await dropdown.selectOption({ index: optionIndex });
        return optionFullText;
    }
}