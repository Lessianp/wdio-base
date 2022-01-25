import { LoginPage } from  '../pageobjects/login.page';

const loginPage = new LoginPage();

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.google.com');

        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect("").toBeExisting();
    });
});


