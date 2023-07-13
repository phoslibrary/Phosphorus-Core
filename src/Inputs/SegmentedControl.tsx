import { MantineTheme, SegmentedControl as SC, SegmentedControlProps as MSegmentedControlProps, Sx } from "@mantine/core"

/** SEGMENTEDCONTROL - 13/07/2023
 * A straightforward restyling of Mantine's Segmented Control component.
 */



// Types
export type SegmentedControlProps = MSegmentedControlProps;



// COMPONENTS
/** A re-styled segmented control from the Mantine package. Accepts all the same props */
export function SegmentedControl(props: SegmentedControlProps) {

  // Styles
  const controlStyle: Sx = (theme: MantineTheme) => ({
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



  return (
    <SC
      sx={controlStyle}
      {...props}
    />
  )
}