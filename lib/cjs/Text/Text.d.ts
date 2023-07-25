import { TextProps as MTextProps } from "@mantine/core";
/** Horizontal alignment of text */
export declare enum TextAlign {
    left = "left",
    right = "right",
    center = "center",
    justify = "justify"
}
export type T_TextAlign = TextAlign;
/** Transform effects to apply to text */
export declare enum TextTransform {
    none = "none",
    capitalize = "capitalize",
    uppercase = "uppercase",
    lowercase = "lowercase"
}
export type T_TextTransform = TextTransform;
/** Props for all text components */
export type BaseTextProps = MTextProps & {
    /** The font family of this text component. This must match the imported name of the font */
    family?: string;
};
export type TextProps = BaseTextProps;
/** A basic, formattable text object that is compatible with text formatting interjection.
 * Very handy when dealing with internationalization, particularly with the i18n module.
 *
 * **Automatically replaces the following values:**
 * - `<br>` with a two line text break
 * - `<b>{...}</b>` with bolded text
 * - `<i>{...}</i>` with italicized text
 */
export declare function Text(props: TextProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Text.d.ts.map