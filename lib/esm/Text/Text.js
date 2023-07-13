import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text as BaseText } from "@mantine/core";
import reactStringReplace from "react-string-replace";
/** TEXT - 13/07/2023
 * A basic override element for Mantine's text that allows for text formatting interjection.
 * This component should allow for much more elegant compatibility with the i18n-next module
 * and i18n in general.
 */
// TYPES
/** Horizontal alignment of text */
export var TextAlign;
(function (TextAlign) {
    TextAlign["left"] = "left";
    TextAlign["right"] = "right";
    TextAlign["center"] = "center";
    TextAlign["justify"] = "justify";
})(TextAlign || (TextAlign = {}));
// @ts-ignore
const TextAligns = Object.keys(TextAlign);
/** Transform effects to apply to text */
export var TextTransform;
(function (TextTransform) {
    TextTransform["none"] = "none";
    TextTransform["capitalize"] = "capitalize";
    TextTransform["uppercase"] = "uppercase";
    TextTransform["lowercase"] = "lowercase";
})(TextTransform || (TextTransform = {}));
// @ts-ignore
const TextTransforms = Object.keys(TextTransform);
// COMPONENTS
/** A basic, formattable text object that is compatible with text formatting interjection.
 * Very handy when dealing with internationalization, particularly with the i18n module.
 *
 * **Automatically replaces the following values:**
 * - `<br>` with a two line text break
 * - `<b>{...}</b>` with bolded text
 * - `<i>{...}</i>` with italicized text
 */
export function Text(props) {
    const textStyle = {
        fontFamily: props.family,
        fontWeight: props.weight,
    };
    let text = props.children;
    /** Run through formatters */
    text = reactStringReplace(text, "<br>", (match, i) => (_jsxs("span", { children: [_jsx("br", {}), _jsx("br", {})] }, match + i)));
    text = reactStringReplace(text, /<b>(.*?)<\/b>/, (match, i) => (_jsx(BaseText, { weight: 800, component: "span", transform: props.transform, children: match }, match + i)));
    text = reactStringReplace(text, /<i>(.*?)<\/i>/, (match, i) => (_jsx(BaseText, { italic: true, component: "span", transform: props.transform, children: match }, match + i)));
    return (_jsx(BaseText, Object.assign({}, props, { style: textStyle, children: text })));
}
