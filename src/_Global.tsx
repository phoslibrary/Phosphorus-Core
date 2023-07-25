/** The size of this component. */
export enum ComponentSize {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

// @ts-ignore
const ComponentSizes = Object.keys(ComponentSize) as (keyof typeof ComponentSize);
/** The size of this component. */
export type T_ComponentSize = ComponentSize;