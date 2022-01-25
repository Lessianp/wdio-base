
import { getValue } from '../../helpers/actions';
import BasePage from './../../helpers/base.page';
import { loginSelectors } from './selectors/login';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends BasePage {
    /**
     * define elements given selectors
     */
    username = $(loginSelectors.username);
    password = $(loginSelectors.password);
    button = $(loginSelectors.button);


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string): Promise<void> {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.button.click();
        await getValue(username)
    }
}

