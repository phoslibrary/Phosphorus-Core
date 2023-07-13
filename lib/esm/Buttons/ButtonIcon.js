import { jsx as _jsx } from "react/jsx-runtime";
import { ComponentSize } from "../_Global";
import { ButtonBase } from "./ButtonBase";
// COMPONENTS
/** A basic button element to create a button icon. Overrides some element default to
 * make appearances work better for icons.
 */
export function ButtonIcon(props) {
    return (_jsx(ButtonBase, Object.assign({}, props, { square: props.square === false ? props.square : true, radius: props.radius || ComponentSize.XL, children: props.children })));
}
