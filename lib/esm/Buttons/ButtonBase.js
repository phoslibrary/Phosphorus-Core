import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Loader, UnstyledButton } from "@mantine/core";
import { ComponentSize } from "../_Global";
// TYPES
/** The variant of this button. This closely resembles how Mantine handles button variants */
export var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["Filled"] = "filled";
    ButtonVariant["Light"] = "light";
    ButtonVariant["Subtle"] = "subtle";
})(ButtonVariant || (ButtonVariant = {}));
// @ts-ignore
const ButtonVariants = Object.keys(ButtonVariant);
// CONSTS
const ATTR = {
    xs: {
        padding: 14,
        height: 30,
        radius: 2,
    },
    sm: {
        padding: 18,
        height: 36,
        radius: 4,
    },
    md: {
        padding: 22,
        height: 42,
        radius: 8,
    },
    lg: {
        padding: 26,
        height: 50,
        radius: 16,
    },
    xl: {
        padding: 32,
        height: 60,
        radius: 32,
    }
};
// COMPONENTS
/** The most basic element in the Phosphorus button framework. Mantine buttons are unsuitable
 * for development in most use cases, due to limitations with Mantine's color system. Most notably,
 * Phosphorus buttons take a single color input and apply transparency values to achieve similar
 * appearances across all backgrounds.
 */
export function ButtonBase(props) {
    // Set default values
    const size = props.size || ComponentSize.SM, variant = props.variant || ButtonVariant.Subtle, backgroundColor = props.backgroundColor || props.color;
    // Hooks
    const isReducedMotion = useReducedMotion();
    // States
    const [hover, setHover] = useState(false);
    // Styles
    const buttonStyle = (theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        flex: 1,
        width: "100%",
        height: props.height ? props.height : ATTR[size].height,
        opacity: props.disabled || props.loading ? 0.5 : 1,
        cursor: props.disabled ? "not-allowed" :
            props.loading ? "wait" : null,
        transitionDuration: theme.transitionTimingFunction,
        borderRadius: props.radius ? ATTR[props.radius].radius : ATTR.sm.radius,
        padding: props.square ? 0 : `0px ${ATTR[size].padding}px`,
        aspectRatio: props.square ? "1 / 1" : props.aspectRatio,
        boxShadow: !props.withShadow ? null : `0px 10px 30px 0px rgba(0,0,0,0.2)`,
        backgroundColor: variant === ButtonVariant.Filled ?
            backgroundColor ? theme.colors[backgroundColor][4] : theme.colors[theme.primaryColor][4]
            : variant === ButtonVariant.Light ?
                hover ?
                    `${backgroundColor ? theme.colors[backgroundColor][4] : theme.colors[theme.primaryColor][4]}30`
                    : `${backgroundColor ? theme.colors[backgroundColor][4] : theme.colors[theme.primaryColor][4]}20`
                : hover ?
                    `${backgroundColor ? theme.colors[backgroundColor][4] : theme.colors[theme.primaryColor][4]}30`
                    : `00000000`,
        color: variant === ButtonVariant.Filled ?
            props.color ? theme.colors[props.color][4] : theme.white
            : props.color ? theme.colors[props.color][4] : theme.colors[theme.primaryColor][4]
    });
    return (_jsx(motion.div, { whileHover: { scale: isReducedMotion || !props.withMotion ? 1 : 1.1 }, whileTap: { scale: isReducedMotion || !props.withMotion ? 1 : 1.05 }, style: { width: props.width, height: props.height }, transition: { ease: "backOut" }, children: _jsx(UnstyledButton, { onClick: props.onClick && !props.disabled && !props.loading ? props.onClick : null, component: props.component, to: props.to, href: props.href, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), sx: buttonStyle, style: props.style, children: !props.loading ? props.children :
                _jsx(Loader, { color: props.color, size: "sm" }) }) }));
}
