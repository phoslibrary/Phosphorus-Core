"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonWithIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const Text_1 = require("../Text");
const ButtonBase_1 = require("./ButtonBase");
// COMPONENTS
/** A complex button element that contains an icon before or after the text */
function ButtonWithIcon(props) {
    const flexStyle = (theme) => ({
        width: "100%",
        height: "100%",
        gap: theme.spacing.sm,
        justifyContent: props.growText ? null : "center",
        flexDirection: props.iconPosition === "after" ? "row-reverse" : null,
    });
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.ButtonBase, Object.assign({ loading: false, disabled: props.disabled || props.loading }, props, { children: (0, jsx_runtime_1.jsxs)(core_1.Flex, { align: "center", sx: flexStyle, children: [!props.loading ? props.icon :
                    (0, jsx_runtime_1.jsx)(core_1.Loader, { color: props.color, size: "sm" }), (0, jsx_runtime_1.jsx)(Text_1.Text, { family: props.fontFamily, weight: props.weight || 800, transform: props.transform, align: props.align || Text_1.TextAlign.left, style: { flexGrow: props.growText ? 1 : 0 }, children: props.children })] }) })));
}
exports.ButtonWithIcon = ButtonWithIcon;
