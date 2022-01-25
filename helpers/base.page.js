"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./actions");
const waits_1 = require("./actions/waits");
const constants_1 = require("./constants");
class BasePage {
    constructor(locator) {
        this.locator = locator;
    }
    async isPageLocatorPresent() {
        return await (0, actions_1.isElementPresent)(this.locator);
    }
    async waitForPageLocatorToBePresent() {
        return await (0, waits_1.waitForElementToBeAvailable)(this.locator);
    }
    async waitForPageLocatorToBeHidden() {
        await (await $(this.locator)).waitForExist({
            reverse: true,
            timeout: constants_1.waitPresets.halfMinute,
            interval: 5000,
            timeoutMsg: `The element is still visible after ${constants_1.waitPresets.oneSecond}ms`
        });
    }
}
exports.default = BasePage;
