/**
 * Used to define element selectors.
 * When using helpers it returns the selector as string, not as element.
 * Still need to create the element when needed.
 */
import { containsAttributeAndValue, withId } from "../../../helpers/bys";

export const loginSelectors = {
    emailAddress: withId("email-address"),
    password: withId("password"),
    loginButton: "//button",
    errorElement: `//article${containsAttributeAndValue('class', 'animate__animated')}`
};
