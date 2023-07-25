import { ReactNode } from "react";
import { ButtonIconProps } from "./ButtonIcon";
import { ButtonProps } from "./Button";
export type ButtonWithIconProps = ButtonProps & ButtonIconProps & {
    /** The icon for this button */
    icon: ReactNode;
    /** The ordering of the icon relative to the text content */
    iconPosition?: "before" | "after";
    /** Whether the text should expand, pushing the icon to a side */
    growText?: boolean;
};
/** A complex button element that contains an icon before or after the text */
export declare function ButtonWithIcon(props: ButtonWithIconProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ButtonWithIcon.d.ts.map