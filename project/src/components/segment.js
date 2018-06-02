import React, { Component } from "react";

export class SegmentGroup extends Component {
  static defaultProps = {
    horizontal: false, //Make the segments appear horizontally
    raised: false, //Raised Segments
    stacked: false, //Stacked Segments
    piled: false, //Piled Segments
    compact: false //Compact Segments
  };

  render() {
    const {
      children,
      content,
      style,
      horizontal,
      raised,
      stacked,
      piled,
      compact,
      extra,
      ...otherProps
    } = this.props;
    const className = `
        ui
        ${extra}
        ${horizontal ? "horizontal" : ""}
        ${raised ? "raised" : ""}
        ${stacked ? "stacked" : ""}
        ${piled ? "piled" : ""}
        ${compact ? "compact" : ""}
        
        segments
        `.replace(/\s+/g, " ");
    return (
      <div className={className} style={style} {...otherProps}>
        {content}
        {children}
      </div>
    );
  }
}

export default class Segment extends Component {
  static Group = SegmentGroup;
  static defaultProps = {
    //types
    raised: false, //to raise the segment
    stacked: false, //Should be true or can have a string value "tall"
    piled: false, //Pile up segments
    vertical: false, //Segments align vertically
    //States
    state: "", //Can have value "disabled" or "loading"
    //Variations
    inverted: false, //invert the segment
    attached: false, //Can have value "top","bottom" or true. True denoting middle
    padded: false, //can be true or "very" passed denoting the padding
    compact: false, //To make compact segment
    color: "", //A segment can be colored
    emphasis: "", //Can have value "secondary" or "tertiary"
    circular: false, //A segment can be circular
    clearing: false, //A segment can clear floating content
    float: "", //A segment can appear left or right of other content
    textAlign: "", //The valid values are: 'left', 'right' and 'center'
    basic: false, //Segment will have no special formatting
    //Extra
    extra: "",
    style: {}
  };

  render() {
    const {
      content,
      children,
      raised,
      stacked,
      piled,
      vertical,
      state,
      inverted,
      attached,
      padded,
      compact,
      color,
      emphasis,
      circular,
      clearing,
      float,
      textAlign,
      basic,
      extra,
      style,
      ...otherProps
    } = this.props;
    //class Name default `ui segment`
    const className = `
      ui
      ${raised ? "raised" : ""}
      ${
        stacked ? (typeof stacked === "string" ? stacked : "") + " stacked" : ""
      }
      ${piled ? "piled" : ""}
      ${vertical ? "vertical" : ""}
      ${state}
      ${inverted ? "inverted" : ""}
      ${
        attached
          ? (typeof attached === "string" ? attached : "") + " attached"
          : ""
      }
      ${padded ? (typeof padded === "string" ? padded : "") + " padded" : ""}
      ${compact ? "compact" : ""}
      ${color}
      ${emphasis}
      ${circular ? "circular" : ""}
      ${clearing ? "clearing" : ""}
      ${float ? float + " floated" : ""}
      ${textAlign ? textAlign + " aligned" : ""}
      ${basic ? "basic" : ""}
      ${extra}
      
      segment
      `.replace(/\s+/g, " ");
    return (
      <div className={className} style={style} {...otherProps}>
        {content}
        {children}
      </div>
    );
  }
}
