# Webdriverio Utils
This repository stores a package of [Webdriverio](https://webdriver.io/) utilities or helpers to work with web automated test.
Using Mocha framework.


Installation Guide
========================================
### Prerequisites

* Install latest [Git](https://git-scm.com/downloads) version. (optional)
* Install latest [Node and NPM](https://nodejs.org/en/download/) version.

### Installation
You'll first need to install all dependencies found in `package.json` file.

```
npm install or npm i or yarn install
```

### Config (Done already) 

In order to build the project from scratch, run `npm init wdio .`.

### How it works

After installing the package, you can start building your page objects.

In order to run your test: 
```
npx wdio run test/wdio.conf.ts --spec test/specs/example.e2e.ts
```
In order to run a suite: 
```
npx wdio run test/wdio.conf.ts --suite suitename
```

### Examples:

1. How to declare an element (test/pageobjects/selectors/*.ts)
```
import { containsAttributeAndValue, withId } from "../../../helpers/bys";

export const loginSelectors = {
    emailAddress: withId("email-address"),
    password: withId("password"),
    loginButton: "//button",
    errorElement: `//article${containsAttributeAndValue('class', 'animate__animated')}`
};
```

2. How to create a Page Object that uses selectors and helpers to run automated test (test/pageobjects/*.ts)
```
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

    ...
}
```

3. How to create a Test file to execute (using PO/Selectors and Helpers) - (test/specs/*.ts)
```
import { HomePage } from '../pageobjects/home.page';
import { LoginPage } from  '../pageobjects/login.page';

const loginPage = new LoginPage();
const homePage = new HomePage();

const baseUrl = "https://baseurl-here.com";

describe('Example login', () => {
    
    beforeEach(async () => {
        await loginPage.open(baseUrl);
        await loginPage.clearAllFields();
    });    

    it('When i loging with invalid credentials, i get an error', async () => {
        await loginPage.login("asadad@asd.com", "12334");
        expect(await loginPage.getError()).toEqual("Incorrect email or password");
    });

    it('when i login with valid credentials i am able to view new page', async () => {
        ...
    });
});
```

### WDIO Config (Done already) 
WebdriverIO config is handled in `test/wdio.conf.ts` file.
All configuration relative to test specs/suites/hooks should be changed there.
Even if you want to use another framework like `Cucumber`.
https://webdriver.io/docs/gettingstarted