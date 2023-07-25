import { CSSProperties, ReactNode } from "react";
import { T_ComponentSize } from "../_Global";
/** The variant of this button. This closely resembles how Mantine handles button variants */
export declare enum ButtonVariant {
    Filled = "filled",
    Light = "light",
    Subtle = "subtle"
}
/** The variant of this button. This closely resembles how Mantine handles button variants */
export type T_ButtonVariant = ButtonVariant;
export type BaseButtonProps = {
    /** The style variant of the button. Defaults to `subtle` */
    variant?: T_ButtonVariant;
    /** The size of the button */
    size?: T_ComponentSize;
    /** The radius of the button */
    radius?: T_ComponentSize;
    /** Width of the button. Overrides button sizing */
    width?: number | string;
    /** Height of the button. Overrides button sizing */
    height?: number | string;
    /** Aspect ratio of the button */
    aspectRatio?: string;
    /** Whether this button is a square. Overrides `aspectRatio` */
    square?: boolean;
    /** The background color of this button. Defaults to theme default color */
    backgroundColor?: any;
    /** The content color of this button */
    color?: any;
    /** A JS action to take upon clicking the button */
    onClick?: Function;
    /** Polymorphic content to allow this button to become another element */
    component?: any;
    /** Used by react-router-dom */
    to?: string;
    /** Used to link to external sites */
    href?: string;
    /** Whether this button is disabled */
    disabled?: boolean;
    /** Whether this button is loading. Will override the `disabled` prop and show a loader instead of the regular `children`
     */
    loading?: boolean;
    /** Whether this button has a shadow */
    withShadow?: boolean;
    /** Whether this button has motion when hovered and tapped. This value is overridden if the user has reduced motion enabled */
    withMotion?: boolean;
    /** Any child objects of this button */
    children: ReactNode;
    /** Any additional style properties for this button */
    style?: CSSProperties;
};
/** The most basic element in the Phosphorus button framework. Mantine buttons are unsuitable
 * for development in most use cases, due to limitations with Mantine's color system. Most notably,
 * Phosphorus buttons take a single color input and apply transparency values to achieve similar
 * appearances across all backgrounds.
 */
export declare function ButtonBase(props: BaseButtonProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ButtonBase.d.ts.map