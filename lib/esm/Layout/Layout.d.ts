/** The direction of a flex container's children */
export declare enum FlexDirection {
    Vertical = "column",
    Horizontal = "row",
    Column = "column",
    Row = "row",
    VerticalReverse = "column-reverse",
    HorizontalReverse = "row-reverse",
    ColumnReverse = "column-reverse",
    RowReverse = "row-reverse"
}
declare const FlexDirections: "Vertical" | "Horizontal" | "Column" | "Row" | "VerticalReverse" | "HorizontalReverse" | "ColumnReverse" | "RowReverse";
/** The direction of a flex container's children */
export type T_FlexDirection = FlexDirection | typeof FlexDirections;
/** How to align a flex container's children */
export declare enum FlexAlign {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    Stretch = "stretch"
}
declare const FlexAligns: "Start" | "End" | "Center" | "Stretch";
/** How to align a flex container's children */
export type T_FlexAlign = FlexAlign | typeof FlexAligns;
/** How to justify a flex container's children */
export declare enum FlexJustify {
    Start = "flex-start",
    End = "flex-end",
    Center = "center",
    Stretch = "stretch",
    SpaceBetween = "space-between",
    SpaceAround = "space-around",
    SpaceEvenly = "space-evenly"
}
declare const FlexJutifies: "Start" | "End" | "Center" | "Stretch" | "SpaceBetween" | "SpaceAround" | "SpaceEvenly";
/** How to justify a flex container's children */
export type T_FlexJustify = FlexJustify | typeof FlexJutifies;
export {};
//# sourceMappingURL=Layout.d.ts.map