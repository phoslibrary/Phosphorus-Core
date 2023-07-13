import { jsx as _jsx } from "react/jsx-runtime";
import { Text } from "../Text";
import { ButtonBase } from "./ButtonBase";
// CONSTS
const ATTR = {
    xs: {
        fontSize: 12,
    },
    sm: {
        fontSize: 14,
    },
    md: {
        fontSize: 16,
    },
    lg: {
        fontSize: 18,
    },
    xl: {
        fontSize: 20,
    }
};
/** A basic, text-based button. */
export function Button(props) {
    return (_jsx(ButtonBase, Object.assign({}, props, { children: _jsx(Text, { family: props.fontFamily, weight: props.weight || 800, transform: props.transform, align: props.align || "center", size: props.textSize ? props.textSize :
                props.size ? ATTR[props.size].fontSize : ATTR.sm.fontSize, children: props.children }) })));
}
