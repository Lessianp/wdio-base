import { clickElement } from "../../helpers/actions";
import { baseSelectors } from "./selectors/baseSelectors";

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open(path: string): Promise<string> {
        return browser.url(path);
    }

    public async selectDropdownOption(label: string, option: string) {
        const field = `${baseSelectors.customDropdwon.replace("{label}", label)}`
        await clickElement(field)
        await clickElement(`${field}${baseSelectors.dropdownOption.replace("{option}", option)}`)
    }

}
