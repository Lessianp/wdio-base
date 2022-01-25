import { clearValue, clickElement, getText, setValue } from '../../helpers/actions';
import BasePage from './base.page';
import { loginSelectors } from './selectors/login';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends BasePage {
    /**
     * Method used to login
     * @param {string} username - username used to login
     * @param {string} password - password used to login
     */
    public async login(username: string, password: string): Promise<void> {
        await setValue(loginSelectors.emailAddress, username);
        await setValue(loginSelectors.password, password);
        await clickElement(loginSelectors.loginButton);
    }

    public async clearUsername(): Promise<void> {
        await clearValue(loginSelectors.emailAddress);
    }

    public async clearPassword(): Promise<void> {
        await clearValue(loginSelectors.password);
    }

    public async clearAllFields(): Promise<void> {
        await this.clearUsername();
        await this.clearPassword();
    }

    public async getError(): Promise<string> {
        return await getText(loginSelectors.errorElement, {timeout: 5000});
    }
}
