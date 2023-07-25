"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlexJustify = exports.FlexAlign = exports.FlexDirection = void 0;
// FLEX LAYOUT
/** The direction of a flex container's children */
var FlexDirection;
(function (FlexDirection) {
    FlexDirection["Vertical"] = "column";
    FlexDirection["Horizontal"] = "row";
    FlexDirection["Column"] = "column";
    FlexDirection["Row"] = "row";
    FlexDirection["VerticalReverse"] = "column-reverse";
    FlexDirection["HorizontalReverse"] = "row-reverse";
    FlexDirection["ColumnReverse"] = "column-reverse";
    FlexDirection["RowReverse"] = "row-reverse";
})(FlexDirection || (exports.FlexDirection = FlexDirection = {}));
// @ts-ignore
const FlexDirections = Object.keys(FlexDirection);
/** How to align a flex container's children */
var FlexAlign;
(function (FlexAlign) {
    FlexAlign["Start"] = "flex-start";
    FlexAlign["End"] = "flex-end";
    FlexAlign["Center"] = "center";
    FlexAlign["Stretch"] = "stretch";
})(FlexAlign || (exports.FlexAlign = FlexAlign = {}));
// @ts-ignore
const FlexAligns = Object.keys(FlexAlign);
/** How to justify a flex container's children */
var FlexJustify;
(function (FlexJustify) {
    FlexJustify["Start"] = "flex-start";
    FlexJustify["End"] = "flex-end";
    FlexJustify["Center"] = "center";
    FlexJustify["Stretch"] = "stretch";
    FlexJustify["SpaceBetween"] = "space-between";
    FlexJustify["SpaceAround"] = "space-around";
    FlexJustify["SpaceEvenly"] = "space-evenly";
})(FlexJustify || (exports.FlexJustify = FlexJustify = {}));
// @ts-ignore
const FlexJustifies = Object.keys(FlexJustify);
