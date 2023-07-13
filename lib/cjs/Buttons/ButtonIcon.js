"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const _Global_1 = require("../_Global");
const ButtonBase_1 = require("./ButtonBase");
// COMPONENTS
/** A basic button element to create a button icon. Overrides some element default to
 * make appearances work better for icons.
 */
function ButtonIcon(props) {
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.ButtonBase, Object.assign({}, props, { square: props.square === false ? props.square : true, radius: props.radius || _Global_1.ComponentSize.XL, children: props.children })));
}
exports.ButtonIcon = ButtonIcon;
