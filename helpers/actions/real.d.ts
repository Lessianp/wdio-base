/// <reference types="webdriverio/async" />
import { SetValueOptions, WaitOptions, ClickOptions, ClearValueOptions } from "./types";
/**
 * Sets the value of an input or textarea element.
 * @param element - The WebdriverIO Element.
 * @param text - The text to be set in the element as its value.
 * @param options - Send keys options for the operation.
 */
export declare function setValue(element: WebdriverIO.Element | string, text: string, options?: SetValueOptions): Promise<void>;
/**
 * Performs a click on an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function clickElement(element: WebdriverIO.Element | string, options?: ClickOptions): Promise<void>;
/**
 * Performs a click if an element is present.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function clickElementIfPresent(element: WebdriverIO.Element | string, options?: ClickOptions): Promise<void>;
/**
 * Performs a double click on an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function doubleClickElement(element: WebdriverIO.Element | string, options?: ClickOptions): Promise<void>;
/**
 * Gets the inner text an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function getText(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<string>;
/**
 * Gets the inner text an element.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function getElementsText(elements: WebdriverIO.ElementArray, options?: WaitOptions): Promise<string[]>;
/**
 * Gets the value of an input or text area.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function getValue(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<string>;
/**
 * Clears the value of an input or text area.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function clearValue(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<void>;
/**
 * Clears the value of an input or text area key by key.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function clearValueKeyByKey(element: WebdriverIO.Element | string, options?: ClearValueOptions): Promise<void>;
/**
 * Navigates to specific url.
 * @param url - The url to be navigated.
 */
export declare function switchToWindow(windowIndex: number): Promise<void>;
/**
 * Checks if an Element is present.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function isElementPresent(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<boolean>;
/**
 * Checks if an Element is checked/selected.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function isElementChecked(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<boolean>;
/**
 * Checks if an Element is enabled.
 * @param element - The WebdriverIO Element.
 * @param options - Wait options for the operation.
 */
export declare function isElementEnabled(element: WebdriverIO.Element | string, options?: WaitOptions): Promise<boolean>;
/**
 * Gets Webelement under shadow root.
 * @param container - The parent WebdriverIO Element.
 * @param selectors - The shadow roots selectors needed for getting the target element.
 * @param options - Wait options for the operation.
 */
export declare function getShadowRootElement(container: WebdriverIO.Element | string, selectors: string[], options?: WaitOptions): Promise<WebdriverIO.Element>;
/**
 * Upload a file for attaching into the webpage.
 * @param filePath - The path of the file to be uploaded.
 * @param inputSelector - The selector element of the input to store the file.
 * @param options - Wait options for the operation.
 */
export declare function uploadFile(filePath: string, inputSelector: string, options?: WaitOptions): Promise<void>;
/**
 * Gets the attribute value from an element.
 * @param element - The WebdriverIO Element.
 * @param attribute - The element attribute.
 * @param options - Wait options for the operation.
 */
export declare function getAttribute(element: WebdriverIO.Element | string, attribute: string, options?: WaitOptions): Promise<string>;
//# sourceMappingURL=real.d.ts.map