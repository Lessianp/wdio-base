import { isElementPresent } from "../../helpers/actions";
import BasePage from "./base.page";
import { homePageSelectors } from "./selectors/home";

export class HomePage extends BasePage {
    public async isProfileVisible(profileName: string): Promise<boolean> {
        const profileElement = homePageSelectors.profile.replace("$text", profileName);
        return await isElementPresent(profileElement, {timeout:5000}); 
    }
}
