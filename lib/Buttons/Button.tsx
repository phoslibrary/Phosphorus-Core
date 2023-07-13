import Text, { T_TextAlign, T_TextTransform, TextAlign } from "../Text/Text";
import ButtonBase, { BaseButtonProps } from "./ButtonBase";

/** BUTTON - 13/07/2023
 * A basic, text-based button.
 */



// TYPES
export type ButtonTextProps = BaseButtonProps & { 
  /** Text weight for this button"s text */
  weight?: number;
  /** Text size for this button"s text */
  textSize?: number | string;
  /** Text transform property for this button"s text */
  transform?: T_TextTransform;
  /** Text alignment property to apply to this button"s text */
  align?: T_TextAlign;
}


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
}

/** A basic, text-based button. */
export default function Button(props: ButtonTextProps) {
  return (
    <ButtonBase
      {...props}
    >
      <Text
        family="Plus Jakarta Sans"
        weight={props.weight || 800}
        transform={props.transform}
        align={props.align || "center"}
        size={props.textSize ? props.textSize :
          props.size ? ATTR[props.size].fontSize : ATTR.sm.fontSize
        }
      >
        {props.children}
      </Text>
    </ButtonBase>
  )
}