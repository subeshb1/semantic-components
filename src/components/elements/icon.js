import React, { Component } from "react";

export class IconGroup extends Component {
  static defaultProps = {
    extra: "",
    size: ""
  };
  render() {
    const { extra, size, ...otherProps } = this.props;
    const className = `
        ${extra}
        ${size}
        icons
        `.replace(/\s+/g, " ");

    return <i className={className} {...otherProps} />;
  }
}
export default class Icon extends Component {
  static Group = IconGroup;
  static defaultProps = {
    state: "",
    fitted: false,
    size: "",
    link: false,
    flipped: false,
    rotated: false,
    circular: false,
    bordered: false,
    color: "",
    inverted: false,
    extra: "",
    corner: false
  };
  render() {
    const {
      state,
      name,
      fitted,
      size,
      link,
      flipped,
      rotated,
      color,
      circular,
      bordered,
      inverted,
      extra,
      corner,
      ...otherProps
    } = this.props;
    const className = `
        ${corner ? (typeof corner === "string" ? corner : "") + " corner" : ""}
        ${extra}
        ${fitted ? "fitted" : ""}
        ${size ? size : ""}
        ${name}
        ${link ? "link" : ""}
        ${
          flipped
            ? typeof flipped === "string"
              ? flipped + " flipped"
              : "horizontally flipped"
            : ""
        }
        ${
          rotated
            ? typeof rotated === "string"
              ? rotated + " rotated"
              : "clockwise rotated"
            : ""
        }
        ${circular ? "circular" : ""}
        ${bordered ? "bordered" : ""}
        ${color}
        ${inverted ? "inverted" : ""}
        ${state}
        icon
        `.replace(/\s+/g, " ");
    return <i className={className} {...otherProps} />;
  }
}
