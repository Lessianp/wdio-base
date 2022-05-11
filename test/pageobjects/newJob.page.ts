import { clickElement, getText, setValue } from '../../helpers/actions';
import BasePage from './base.page';
import { baseSelectors } from './selectors/baseSelectors';
import { newJobSelectors } from "./selectors/newJob";
import * as data from "../testData.json"
import { constants } from '../constants';


/**
 * sub page containing specific selectors and methods for a specific page
 */
export class NewJobPage extends BasePage {
    
   

    /**
     * name
     */
    public async createNewJob(jobInfo: Job) {
        await this.clickJobType()
        await this.selectType(jobInfo.type)
        await this.selectTimeOption(jobInfo.timeOption)
        await this.selectMoveType(jobInfo.moveType)
        await this.setAddress(jobInfo.address, jobInfo.zipCode)
        await this.selectDropdownOption(constants.residenceField.label, jobInfo.residence)
        await this.selectDropdownOption(constants.bedroomsField.label, jobInfo.bedrooms)
        await this.selectDropdownOption(constants.flightsField.labe1, jobInfo.flights)
        await this.setNotes(jobInfo.notes)

    }

    
    /**
     * Method used to login
     * @param {string} option - 
     */
    private async selectType(option: string): Promise<void> {
        console.log(baseSelectors.typeDropdown.replace("{option}", option))
        await clickElement(baseSelectors.typeDropdown.replace("{option}", option));
    }

    private async clickJobType() {
        const jobTypeElement = newJobSelectors.jobTypeSelect;   
        console.log(jobTypeElement)     
        await browser.pause(10000)
        await clickElement(jobTypeElement, {timeout:10000});
    }

    /**
     * name
     */
    private async selectTimeOption(option: string) {
        await clickElement(newJobSelectors.timeOption.replace("{option}", option))
    }

    private async selectMoveType(option: string) {
        await clickElement(newJobSelectors.moveTypeOption.replace("{option}", option))    
    }

    private async setAddress(address: string, zipCode: number) {
        await setValue(newJobSelectors.streetAddress, address)
        await browser.pause(2000)
        await browser.keys("\uE015"); // this is to enter down arrow
        await browser.pause(2000)
        await browser.keys("\uE004"); // this is to press tab}
        await browser.pause(2000) // cambiar por validacion del zip
        await clickElement(newJobSelectors.validateButton) // esperar mensaje de validate
    }

    private async setNotes(notes: string) {
        await setValue(newJobSelectors.noteOption, notes)
        

    }
    
    
}
