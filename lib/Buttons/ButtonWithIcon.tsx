import { Flex, Loader, MantineTheme, Sx } from "@mantine/core";
import ButtonBase from "./ButtonBase";
import { ReactNode } from "react";
import { ButtonTextProps } from "./Button";
import { ButtonIconProps } from "./ButtonIcon";
import Text, { TextAlign } from "../../Text/Text";

/** BUTTONWITHICON - 13/07/2023
 * A complex button element that contains an icon before or after the text
 */



// TYPES
export type ButtonWithIconProps = ButtonTextProps & ButtonIconProps & { 
  /** The icon for this button */
  icon: ReactNode;
  /** The ordering of the icon relative to the text content */
  iconPosition?: "before" | "after";
  /** Whether the text should expand, pushing the icon to a side */
  growText?: boolean;
}



// COMPONENTS
/** A complex button element that contains an icon before or after the text */
export default function ButtonWithIcon(props: ButtonWithIconProps) {

  const flexStyle: Sx = (theme: MantineTheme) => ({
    width: "100%",
    height: "100%",
    gap: theme.spacing.sm,
    justifyContent: props.growText ? null : "center",
    flexDirection: props.iconPosition === "after" ? "row-reverse" : null,
  });

  return (
    <ButtonBase
      loading={false}
      disabled={props.disabled || props.loading}
      {...props}
    >
      <Flex
        align="center"
        sx={flexStyle}
      >
        {!props.loading ? props.icon :
          <Loader
            color={props.color}
            size="sm"
          />
        }

        <Text
          weight={props.weight || 800}
          transform={props.transform}
          align={props.align || TextAlign.Left}
          style={{ flexGrow: props.growText ? 1 : 0 }}
        >
          {props.children}
        </Text>
      </Flex>
    </ButtonBase>
  )
}