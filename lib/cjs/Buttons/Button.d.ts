import { T_TextAlign, T_TextTransform } from "../Text";
import { BaseButtonProps } from "./ButtonBase";
/** BUTTON - 13/07/2023
 * A basic, text-based button.
 */
export type ButtonProps = BaseButtonProps & {
    /** Text weight for this button"s text */
    weight?: number;
    /** Text size for this button"s text */
    textSize?: number | string;
    /** Text transform property for this button"s text */
    transform?: T_TextTransform;
    /** Text alignment property to apply to this button"s text */
    align?: T_TextAlign;
    /** The font family of the text */
    fontFamily?: string;
};
/** A basic, text-based button. */
export declare function Button(props: ButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Button.d.ts.map