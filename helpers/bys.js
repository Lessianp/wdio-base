"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsText = exports.withText = exports.containsAttributeValueAndText = exports.containsAttributeAndValue = exports.withAttributeValueAndText = exports.withAttributeAndValue = exports.withTitle = exports.withIdStart = exports.withId = exports.withTestIdAndText = exports.withTestId = void 0;
function withTestId(id) {
    return `[data-test-id=${id}]`;
}
exports.withTestId = withTestId;
function withTestIdAndText(id, text) {
    return `//*[@data-anypoint-component='${id}' and contains(text(), '${text}')]`;
}
exports.withTestIdAndText = withTestIdAndText;
function withId(id) {
    return `[id='${id}']`;
}
exports.withId = withId;
function withIdStart(id) {
    return `[id^='${id}']`;
}
exports.withIdStart = withIdStart;
function withTitle(title) {
    return `[title='${title}']`;
}
exports.withTitle = withTitle;
function withAttributeAndValue(attribute, value, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[@${attribute}="${value}"]`;
}
exports.withAttributeAndValue = withAttributeAndValue;
function withAttributeValueAndText(attribute, value, text, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[@${attribute}="${value}" and contains(text(), "${text}")]`;
}
exports.withAttributeValueAndText = withAttributeValueAndText;
function containsAttributeAndValue(attribute, value, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[contains(@${attribute}, "${value}")]`;
}
exports.containsAttributeAndValue = containsAttributeAndValue;
function containsAttributeValueAndText(attribute, value, text, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[contains(@${attribute}, "${value}") and contains(text(), "${text}")]`;
}
exports.containsAttributeValueAndText = containsAttributeValueAndText;
function withText(text, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[text()="${text}"]`;
}
exports.withText = withText;
function containsText(text, htmlElement) {
    const element = htmlElement || '*';
    return `//${element}[contains(text(), "${text}")]`;
}
exports.containsText = containsText;
