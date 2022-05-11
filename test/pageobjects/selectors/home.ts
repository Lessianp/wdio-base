import { containsAttributeAndValue, withAttributeValueAndText, withText } from "../../../helpers/bys";

export const homePageSelectors = {
    profile: withText(`$text`),
    button: `${withText(`$text`, "button")}`,
};
