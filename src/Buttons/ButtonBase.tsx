import { motion, useReducedMotion } from "framer-motion";
import { CSSProperties, ReactNode, useState } from "react";
import { Loader, MantineTheme, Sx, UnstyledButton } from "@mantine/core";
import { ComponentSize, T_ComponentSize } from "../_Global";



// TYPES
/** The variant of this button. This closely resembles how Mantine handles button variants */
export enum ButtonVariant {
  Filled = "filled",
  Light = "light",
  Subtle = "subtle",
}
// @ts-ignore
const ButtonVariants = Object.keys(ButtonVariant) as (keyof typeof ButtonVariant);
/** The variant of this button. This closely resembles how Mantine handles button variants */
export type T_ButtonVariant = ButtonVariant | typeof ButtonVariants;

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
}



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
}



// COMPONENTS
/** The most basic element in the Phosphorus button framework. Mantine buttons are unsuitable
 * for development in most use cases, due to limitations with Mantine's color system. Most notably,
 * Phosphorus buttons take a single color input and apply transparency values to achieve similar
 * appearances across all backgrounds.
 */
export function ButtonBase(props: BaseButtonProps) {

  // Set default values
  const size = props.size || ComponentSize.SM,
    variant = props.variant || ButtonVariant.Subtle,
    backgroundColor = props.backgroundColor || props.color;


  // Hooks
  const isReducedMotion = useReducedMotion();

  // States
  const [hover, setHover] = useState(false);

  // Styles
  const buttonStyle: Sx = (theme: MantineTheme) => ({
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

  return (
    <motion.div
      whileHover={{ scale: isReducedMotion || !props.withMotion ? 1 : 1.1 }}
      whileTap={{ scale: isReducedMotion || !props.withMotion ? 1 : 1.05 }}
      style={{ width: props.width, height: props.height }}
      transition={{ ease: "backOut" }}
    >
      <UnstyledButton
        onClick={props.onClick && !props.disabled && !props.loading ? props.onClick : null}
        component={props.component}
        to={props.to}
        href={props.href}

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}

        sx={buttonStyle}
        style={props.style}
      >
        {!props.loading ? props.children :
          <Loader
            color={props.color}
            size="sm"
          />
        }
      </UnstyledButton>
    </motion.div>

  )
}