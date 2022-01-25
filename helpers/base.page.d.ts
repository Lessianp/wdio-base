export default class BasePage {
    private locator;
    constructor(locator?: string);
    isPageLocatorPresent(): Promise<boolean>;
    waitForPageLocatorToBePresent(): Promise<boolean | void>;
    waitForPageLocatorToBeHidden(): Promise<void>;
}
//# sourceMappingURL=base.page.d.ts.map