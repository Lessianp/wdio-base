"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForClickableElement = exports.waitForElementToBeAvailable = exports.getElement = void 0;
async function speedPause() {
    const pause = browser.config.pauseBetweenActions;
    // Pauses the action for the specified period to slow down the actions
    if (pause) {
        await browser.pause(pause);
    }
}
// Helper for getting the element when sending only the selector
async function getElement(element) {
    if (typeof element === "string") {
        element = await $(element);
    }
    return element;
}
exports.getElement = getElement;
/**
 * Waits for an element to be displayed or present.
 * @param element - The WebdriverIO Element.
 * @param options - Options to wait for the element.
 * @returns True if element is displayed, or void failing with default error message or provided in options.
 */
async function waitForElementToBeAvailable(element, options) {
    var _a;
    const timeout = (options !== undefined) ? options.timeout : browser.config.waitforTimeout;
    const interval = (_a = browser.config.waitforInterval) !== null && _a !== void 0 ? _a : options.timeout;
    await speedPause();
    element = await getElement(element);
    const exist = await element.waitForExist({
        timeout,
        interval,
        timeoutMsg: (options === null || options === void 0 ? void 0 : options.timeoutMsg) || `The element ${element.selector} is not rendered in DOM after ${timeout}ms`
    });
    if (exist === true) {
        return element.waitForDisplayed({
            timeout,
            interval,
            timeoutMsg: (options === null || options === void 0 ? void 0 : options.timeoutMsg) || `The element ${element.selector} is not displayed after ${timeout}ms`
        });
    }
    else {
        return exist;
    }
}
exports.waitForElementToBeAvailable = waitForElementToBeAvailable;
/**
 * Waits for an element to be clickable.
 * @param element - The WebdriverIO Element.
 * @param options - Options to wait for the element.
 * @returns True if element is clickable, or void failing with default error message or provided in options.
 */
async function waitForClickableElement(element, options) {
    var _a;
    const timeout = (options !== undefined) ? options.timeout : browser.config.waitforTimeout;
    const interval = (_a = browser.config.waitforInterval) !== null && _a !== void 0 ? _a : options.timeout;
    await speedPause();
    element = await getElement(element);
    if (options === null || options === void 0 ? void 0 : options.visibilityCheck) {
        return element.waitForClickable({
            timeout,
            interval,
            timeoutMsg: (options === null || options === void 0 ? void 0 : options.timeoutMsg) || `The element ${element.selector} is not clickable after ${timeout}ms`
        });
    }
    return waitForElementToBeAvailable(element, options);
}
exports.waitForClickableElement = waitForClickableElement;
