import { containsAttributeAndValue, withAttributeValueAndText, withText, containsText } from "../../../helpers/bys";

export const baseSelectors = {
    customDropdwon: `${containsText("{label}", "label")}/following-sibling::div`,
    typeDropdown: `//span${containsAttributeAndValue('data-value', '{option}')}`, 
    dropdownOption: `${withText('{option}', 'small')}`, 
};
