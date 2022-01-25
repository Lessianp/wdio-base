import { HomePage } from '../../pageobjects/home.page';
import { LoginPage } from  '../../pageobjects/login.page';

const loginPage = new LoginPage();
const homePage = new HomePage();

const baseUrl = "https://qa.undergrads.com/auth/login";

describe('Login to Underground QA', () => {
    
    beforeEach(async () => {
        await loginPage.open(baseUrl);
        await loginPage.clearAllFields();
    });    

    it('When i loging with invalid credentials, i get an error', async () => {
        await loginPage.login("asadad@asd.com", "12334");
        expect(await loginPage.getError()).toEqual("Incorrect email or password");
    });

    it('when i login with valid credentials i am able to view new page', async () => {
        await loginPage.login("andreyna.pulido@dualbootpartners.com", "Password.11");
        expect(await homePage.isProfileVisible("Andreyna Pulido")).toBeTruthy();
    });
});
