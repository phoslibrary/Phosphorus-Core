import { ComponentSize } from "../_Global";
import { BaseButtonProps, ButtonBase } from "./ButtonBase";



// TYPES
export type ButtonIconProps = BaseButtonProps;



// COMPONENTS
/** A basic button element to create a button icon. Overrides some element default to 
 * make appearances work better for icons.
 */
export function ButtonIcon(props: ButtonIconProps) { 

  return ( 
    <ButtonBase
      { ...props }
      square={props.square === false ? props.square : true}
      radius={props.radius || ComponentSize.XL}
    >
      {props.children}
    </ButtonBase>
  )
}