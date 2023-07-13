import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Loader } from "@mantine/core";
import { Text, TextAlign } from "../Text";
import { ButtonBase } from "./ButtonBase";
// COMPONENTS
/** A complex button element that contains an icon before or after the text */
export function ButtonWithIcon(props) {
    const flexStyle = (theme) => ({
        width: "100%",
        height: "100%",
        gap: theme.spacing.sm,
        justifyContent: props.growText ? null : "center",
        flexDirection: props.iconPosition === "after" ? "row-reverse" : null,
    });
    return (_jsx(ButtonBase, Object.assign({ loading: false, disabled: props.disabled || props.loading }, props, { children: _jsxs(Flex, { align: "center", sx: flexStyle, children: [!props.loading ? props.icon :
                    _jsx(Loader, { color: props.color, size: "sm" }), _jsx(Text, { family: props.fontFamily, weight: props.weight || 800, transform: props.transform, align: props.align || TextAlign.left, style: { flexGrow: props.growText ? 1 : 0 }, children: props.children })] }) })));
}
