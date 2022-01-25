"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttribute = exports.uploadFile = exports.getShadowRootElement = exports.isElementEnabled = exports.isElementChecked = exports.isElementPresent = exports.switchToWindow = exports.clearValueKeyByKey = exports.clearValue = exports.getValue = exports.getElementsText = exports.getText = exports.doubleClickElement = exports.clickElementIfPresent = exports.clickElement = exports.setValue = void 0;
const waits_1 = require("./waits");
/**
 * Sets the value of an input or textarea element.
 * @param element - The WebdriverIO Element.
 * @param text - The text to be set in the element as its value.
 * @param options - Send keys options for the operation.
 */
async function setValue(element, text, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    if (options !== undefined && options.clear !== undefined) {
        await element.clearValue();
    }
    await element.addValue(text);
}
exports.setValue = setValue;
/**
 * Performs a click on an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function clickElement(element, options) {
    await (0, waits_1.waitForClickableElement)(element, options);
    element = await (0, waits_1.getElement)(element);
    if (options !== undefined && options.button !== undefined) {
        await element.click({ button: options === null || options === void 0 ? void 0 : options.button, x: options.x, y: options.y });
    }
    else {
        await element.click();
    }
}
exports.clickElement = clickElement;
/**
 * Performs a click if an element is present.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function clickElementIfPresent(element, options) {
    if (await isElementPresent(element, options)) {
        await clickElement(element);
    }
}
exports.clickElementIfPresent = clickElementIfPresent;
/**
 * Performs a double click on an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function doubleClickElement(element, options) {
    await (0, waits_1.waitForClickableElement)(element, options);
    element = await (0, waits_1.getElement)(element);
    await element.doubleClick();
}
exports.doubleClickElement = doubleClickElement;
/**
 * Gets the inner text an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function getText(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.getText();
}
exports.getText = getText;
/**
 * Gets the inner text an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function getElementsText(elements, options) {
    await (0, waits_1.waitForElementToBeAvailable)(elements[0], options);
    return Promise.all(elements.map(element => element.getText()));
}
exports.getElementsText = getElementsText;
/**
 * Gets the value of an input or text area.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function getValue(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.getValue();
}
exports.getValue = getValue;
/**
 * Clears the value of an input or text area.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function clearValue(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.clearValue();
}
exports.clearValue = clearValue;
/**
 * Clears the value of an input or text area key by key.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function clearValueKeyByKey(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    const elementValue = await getValue(element);
    const charactersOfElementValue = elementValue.split('');
    for (const char of charactersOfElementValue) {
        await element.addValue("\uE017");
        if (options === null || options === void 0 ? void 0 : options.keyInterval) {
            await browser.pause(options.keyInterval);
        }
    }
}
exports.clearValueKeyByKey = clearValueKeyByKey;
/**
 * Navigates to specific url.
 * @param url - The url to be navigated.
 */
async function switchToWindow(windowIndex) {
    const tabs = await browser.getWindowHandles();
    await browser.switchToWindow(tabs[windowIndex]);
}
exports.switchToWindow = switchToWindow;
/**
 * Checks if an Element is present.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function isElementPresent(element, options) {
    try {
        await (0, waits_1.waitForElementToBeAvailable)(element, options);
        return true;
    }
    catch (error) {
        console.log(`Element not present`, element);
        return false;
    }
}
exports.isElementPresent = isElementPresent;
/**
 * Checks if an Element is checked/selected.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function isElementChecked(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.isSelected();
}
exports.isElementChecked = isElementChecked;
/**
 * Checks if an Element is enabled.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
async function isElementEnabled(element, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.isEnabled();
}
exports.isElementEnabled = isElementEnabled;
/**
 * Gets Webelement under shadow root.
 * @param container - The parent WebdriverIO Element.
 * @param selectors - The shadow roots selectors needed for getting the target element.
 * @param options - Wait options for the operation.
 */
async function getShadowRootElement(container, selectors, options) {
    container = await (0, waits_1.getElement)(container);
    await (await container.shadow$(selectors[0])).waitForDisplayed(options);
    let shadowRoot = await (await container.shadow$(selectors[0]));
    for (let index = 1; index < selectors.length; index++) {
        await (await shadowRoot.shadow$(selectors[index])).waitForDisplayed(options);
        shadowRoot = await shadowRoot.shadow$(selectors[index]);
    }
    return shadowRoot;
}
exports.getShadowRootElement = getShadowRootElement;
/**
 * Upload a file for attaching into the webpage.
 * @param filePath - The path of the file to be uploaded.
 * @param inputSelector - The selector element of the input to store the file.
 * @param options - Wait options for the operation.
 */
async function uploadFile(filePath, inputSelector, options) {
    const fileToUpload = await browser.uploadFile(filePath);
    const input = await $(inputSelector);
    await browser.execute((el) => el.style.display = 'block', input);
    await input.waitForDisplayed();
    await setValue(input, fileToUpload, options);
}
exports.uploadFile = uploadFile;
/**
 * Gets the attribute value from an element.
 * @param element - The WebdriverIO Element.
 * @param attribute - The element attribute.
 * @param options - Wait options for the operation.
 */
async function getAttribute(element, attribute, options) {
    await (0, waits_1.waitForElementToBeAvailable)(element, options);
    element = await (0, waits_1.getElement)(element);
    return element.getAttribute(attribute);
}
exports.getAttribute = getAttribute;
