import { constants } from '../constants';
import { HomePage } from '../pageobjects/home.page';
import { LoginPage } from  '../pageobjects/login.page';
import { NewJobPage } from '../pageobjects/newJob.page';
import * as data from "../testData.json"

require('dotenv').config()
const envVars = process.env

const loginPage = new LoginPage();
const homePage = new HomePage();
const newJobPage = new NewJobPage();

describe('Create new job', () => {
    
    before(async () => {
        await loginPage.open(envVars.BASE_URL);
        await loginPage.clearAllFields();
        await loginPage.login(envVars.DB_USERNAME, envVars.DB_PASSWORD);
        expect(await homePage.isProfileVisible(data.Dato1)).toBeTruthy();
    });    

    it ('Create Job', async () => {
        await homePage.clickNewJob();
        await newJobPage.createNewJob({
            type: data.jobType,
            timeOption: data.timeOption,
            moveType: data.moveType,
            address: data.streetAdress,
            zipCode: data.zipCode,
            residence: constants.residenceField.optionValues.house,
            bedrooms: constants.bedroomsField.optionValues[1],
            flights: constants.flightsField.optionValues[1],
            notes: data.notes
        })
    });
});
