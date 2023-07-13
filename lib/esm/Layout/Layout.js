// FLEX LAYOUT
/** The direction of a flex container's children */
export var FlexDirection;
(function (FlexDirection) {
    FlexDirection["Vertical"] = "column";
    FlexDirection["Horizontal"] = "row";
    FlexDirection["Column"] = "column";
    FlexDirection["Row"] = "row";
    FlexDirection["VerticalReverse"] = "column-reverse";
    FlexDirection["HorizontalReverse"] = "row-reverse";
    FlexDirection["ColumnReverse"] = "column-reverse";
    FlexDirection["RowReverse"] = "row-reverse";
})(FlexDirection || (FlexDirection = {}));
// @ts-ignore
const FlexDirections = Object.keys(FlexDirection);
/** How to align a flex container's children */
export var FlexAlign;
(function (FlexAlign) {
    FlexAlign["Start"] = "flex-start";
    FlexAlign["End"] = "flex-end";
    FlexAlign["Center"] = "center";
    FlexAlign["Stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));
// @ts-ignore
const FlexAligns = Object.keys(FlexAlign);
/** How to justify a flex container's children */
export var FlexJustify;
(function (FlexJustify) {
    FlexJustify["Start"] = "flex-start";
    FlexJustify["End"] = "flex-end";
    FlexJustify["Center"] = "center";
    FlexJustify["Stretch"] = "stretch";
    FlexJustify["SpaceBetween"] = "space-between";
    FlexJustify["SpaceAround"] = "space-around";
    FlexJustify["SpaceEvenly"] = "space-evenly";
})(FlexJustify || (FlexJustify = {}));
// @ts-ignore
const FlexJutifies = Object.keys(FlexJustify);
