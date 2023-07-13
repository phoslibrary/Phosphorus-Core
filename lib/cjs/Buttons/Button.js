"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Text_1 = require("../Text");
const ButtonBase_1 = require("./ButtonBase");
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
function Button(props) {
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.ButtonBase, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, { family: props.fontFamily, weight: props.weight || 800, transform: props.transform, align: props.align || "center", size: props.textSize ? props.textSize :
                props.size ? ATTR[props.size].fontSize : ATTR.sm.fontSize, children: props.children }) })));
}
exports.Button = Button;
