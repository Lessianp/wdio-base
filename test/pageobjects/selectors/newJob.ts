/**
 * Used to define element selectors.
 * When using helpers it returns the selector as string, not as element.
 * Still need to create the element when needed.
 */
import { containsAttributeAndValue, containsText, withAttributeAndValue, withId, withText } from "../../../helpers/bys";

export const newJobSelectors = {
    jobTypeSelect:  `${containsAttributeAndValue("class", "select-jobType")}${containsAttributeAndValue("class", "custom-select__trigger")}`,
    timeOption: `${containsAttributeAndValue("class", "slot")}[contains(text(),"{option}")]`,
    moveTypeOption: `${containsAttributeAndValue("class", "type")}${withText("{option}","span")}`,
    streetAddress: withAttributeAndValue("id", "start-address","input"),
    zipCode: withAttributeAndValue("id", "start_zipcode","input"),
    addressOption: containsAttributeAndValue("class", "pac-item"), //This returns all results but we are always passing the exact match
    validateButton: withText("validate", "button"),
    noteOption: withText("Notes"),
    //flightsOfStairs: withId("flights-of stairs"),

};

