"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
// COMPONENTS
/** A re-styled segmented control from the Mantine package. Accepts all the same props */
function SegmentedControl(props) {
    // Styles
    const controlStyle = (theme) => ({
        background: "None",
        borderBottom: `1px solid ${theme.black}20`,
        borderRadius: 0,
        padding: `4px 2px 0px 2px`,
        zIndex: 0,
        "& .mantine-SegmentedControl-indicator": {
            backgroundColor: `${props.color ? props.color : theme.colors[theme.primaryColor][4]}30`,
            borderBottom: `1px solid ${props.color ? props.color : theme.colors[theme.primaryColor][4]}`,
            boxShadow: "none",
            borderRadius: `${theme.radius.md} ${theme.radius.md} 0 0`
        },
        "& .mantine-SegmentedControl-label, .mantine-SegmentedControl-label[data-active]": {
            fontWeight: 800,
            color: props.color ? props.color : theme.colors[theme.primaryColor][4],
            "&:hover, &[data-active]:hover": {
                color: props.color ? props.color : theme.colors[theme.primaryColor][5],
            }
        }
    });
    return ((0, jsx_runtime_1.jsx)(core_1.SegmentedControl, Object.assign({ sx: controlStyle }, props)));
}
exports.SegmentedControl = SegmentedControl;
