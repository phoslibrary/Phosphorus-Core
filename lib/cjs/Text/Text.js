"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.TextTransform = exports.TextAlign = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const react_string_replace_1 = __importDefault(require("react-string-replace"));
/** TEXT - 13/07/2023
 * A basic override element for Mantine's text that allows for text formatting interjection.
 * This component should allow for much more elegant compatibility with the i18n-next module
 * and i18n in general.
 */
// TYPES
/** Horizontal alignment of text */
var TextAlign;
(function (TextAlign) {
    TextAlign["left"] = "left";
    TextAlign["right"] = "right";
    TextAlign["center"] = "center";
    TextAlign["justify"] = "justify";
})(TextAlign || (exports.TextAlign = TextAlign = {}));
// @ts-ignore
const TextAligns = Object.keys(TextAlign);
/** Transform effects to apply to text */
var TextTransform;
(function (TextTransform) {
    TextTransform["none"] = "none";
    TextTransform["capitalize"] = "capitalize";
    TextTransform["uppercase"] = "uppercase";
    TextTransform["lowercase"] = "lowercase";
})(TextTransform || (exports.TextTransform = TextTransform = {}));
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
function Text(props) {
    const textStyle = {
        fontFamily: props.family,
        fontWeight: props.weight,
    };
    let text = props.children;
    /** Run through formatters */
    text = (0, react_string_replace_1.default)(text, "<br>", (match, i) => ((0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {})] }, match + i)));
    text = (0, react_string_replace_1.default)(text, /<b>(.*?)<\/b>/, (match, i) => ((0, jsx_runtime_1.jsx)(core_1.Text, { weight: 800, component: "span", transform: props.transform, children: match }, match + i)));
    text = (0, react_string_replace_1.default)(text, /<i>(.*?)<\/i>/, (match, i) => ((0, jsx_runtime_1.jsx)(core_1.Text, { italic: true, component: "span", transform: props.transform, children: match }, match + i)));
    return ((0, jsx_runtime_1.jsx)(core_1.Text, Object.assign({}, props, { style: textStyle, children: text })));
}
exports.Text = Text;
