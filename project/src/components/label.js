import React, { Component } from "react";
import PropTypes from "prop-types";
import { simpleComponent } from "../lib/react-extras";
export const LabelDetail = simpleComponent("detail");
export class LabelGroup extends Component {
  static defaultProps = {
    extra: "",
    size: "",
    circular: false,
    tag: false,
    color: ""
  };
  render() {
    const {
      children,
      extra,
      size,
      onClick,
      circular,
      tag,
      color,
      ...otherProps
    } = this.props;
    const className = `
        ui
        ${extra}  
        ${size}
        ${circular ? "circular" : ""}
        ${color}
        ${tag ? "tag" : ""}
        labels
        `.replace(/\s+/g, " ");

    return (
      <div className={className} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default class Label extends Component {
  static Group = LabelGroup;
  static Detail = LabelDetail;

  static defaultProps = {
    as: "div",
    image: false,
    color: "",
    pointing: false,
    basic: false,
    extra: "",
    corner: "",
    tag: false,
    ribbon: "",
    attached: "",
    horizontal: false,
    floating: false,
    circular: false,
    size: ""
  };
  render() {
    const {
      size,
      as,
      children,
      image,
      color,
      pointing,
      basic,
      tag,
      extra,
      corner,
      ribbon,
      attached,
      horizontal,
      floating,
      circular,
      ...otherProps
    } = this.props;

    const className = `
        ${floating ? "floating" : ""}
        ui
        ${size}
        ${extra}
        ${image ? "image" : ""}
        ${color}
        ${
          pointing
            ? typeof pointing === "string"
              ? pointing.search(/[lr]/) !== -1
                ? pointing + " pointing"
                : "pointing " + pointing
              : "pointing"
            : ""
        }
        ${tag ? "tag" : ""}
        ${corner ? corner + " corner" : ""}
        ${attached ? attached + " attached" : ""}
        ${ribbon ? ribbon + " ribbon" : ""}
        ${basic ? "basic" : ""}
        ${circular ? "circular" : ""}
        ${horizontal ? "horizontal" : ""}
        label
        `.replace(/\s+/g, " ");
    return React.createElement(as, { className, ...otherProps }, children);
  }
}
