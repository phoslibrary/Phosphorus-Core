import { Text as BaseText, TextProps as MTextProps } from "@mantine/core";
import { CSSProperties } from "react";
import reactStringReplace from "react-string-replace";



// TYPES
/** Horizontal alignment of text */
export enum TextAlign { 
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
}
// @ts-ignore
const TextAligns = Object.keys(TextAlign) as (keyof typeof TextAlign);
export type T_TextAlign = TextAlign | typeof TextAligns;

/** Transform effects to apply to text */
export enum TextTransform {
  none = "none",
  capitalize = "capitalize",
  uppercase = "uppercase",
  lowercase = "lowercase",
}
// @ts-ignore
const TextTransforms = Object.keys(TextTransform) as (keyof typeof TextTransform);
export type T_TextTransform = TextTransform | typeof TextTransforms;

/** Props for all text components */
export type BaseTextProps = MTextProps & { 
  /** The font family of this text component. This must match the imported name of the font */
  family?: string;
}

// This is a direct copy for now; this may change in the future
export type TextProps = BaseTextProps;



// COMPONENTS
/** A basic, formattable text object that is compatible with text formatting interjection.
 * Very handy when dealing with internationalization, particularly with the i18n module.
 * 
 * **Automatically replaces the following values:**
 * - `<br>` with a two line text break
 * - `<b>{...}</b>` with bolded text
 * - `<i>{...}</i>` with italicized text
 */
export function Text(props: TextProps) { 
  const textStyle: CSSProperties = {
    fontFamily: props.family,
    fontWeight: props.weight,
  }

  let text: any = props.children;

  /** Run through formatters */
  text = reactStringReplace(text, "<br>", (match, i) => (
    <span key={match + i}>
      <br /><br />
    </span>
  ));
  text = reactStringReplace(text, /<b>(.*?)<\/b>/, (match, i) => (
    <BaseText
      weight={800}
      key={match + i}
      component="span"
      transform={props.transform}
    >
      {match}
    </BaseText>
  ));
  text = reactStringReplace(text, /<i>(.*?)<\/i>/, (match, i) => (
    <BaseText
      italic
      key={match + i}
      component="span"
      transform={props.transform}
    >
      {match}
    </BaseText>
  ));

  return (
    <BaseText
      {...props}
      style={textStyle}
    >
      {text}
    </BaseText>
  )
}