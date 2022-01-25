/**
 * Used to define element selectors.
 * When using helpers it returns the selector as string, not as element.
 * Still need to create the element when needed.
 */
import { withId, withTitle } from "../../../helpers/bys";

export const loginSelectors = {

    username: withId("username"),
    password: withTitle("password"),
    button: ""

}