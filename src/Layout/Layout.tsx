// FLEX LAYOUT
/** The direction of a flex container's children */
export enum FlexDirection { 
  Vertical = "column",
  Horizontal = "row",
  Column = "column",
  Row = "row",
  VerticalReverse = "column-reverse",
  HorizontalReverse = "row-reverse",
  ColumnReverse = "column-reverse",
  RowReverse = "row-reverse",
}
// @ts-ignore
const FlexDirections = Object.keys(FlexDirection) as (keyof typeof FlexDirection);
/** The direction of a flex container's children */
export type T_FlexDirection = FlexDirection;

/** How to align a flex container's children */
export enum FlexAlign { 
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  Stretch = "stretch",
}
// @ts-ignore
const FlexAligns = Object.keys(FlexAlign) as (keyof typeof FlexAlign);
/** How to align a flex container's children */
export type T_FlexAlign = FlexAlign;

/** How to justify a flex container's children */
export enum FlexJustify { 
  Start = "flex-start",
  End = "flex-end",
  Center = "center",
  Stretch = "stretch",
  SpaceBetween = "space-between",
  SpaceAround = "space-around",
  SpaceEvenly = "space-evenly",
}
// @ts-ignore
const FlexJustifies = Object.keys(FlexJustify) as (keyof typeof FlexJustify);
/** How to justify a flex container's children */
export type T_FlexJustify = FlexJustify;