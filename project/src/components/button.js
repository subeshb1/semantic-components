import React, { Component } from "react";
import PropTypes from "prop-types";

import u4 from 'uniqid'
const Or = () => <div className="or" />;

export class ButtonGroup extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "positive",
      "negative",
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey",
      "black",
      "facebook",
      "twitter",
      "google",
      "vk",
      "linkedin",
      "instagram",
      "youtube",
      ""
    ]),
    labeled: PropTypes.bool,
    basic: PropTypes.bool,
    icon: PropTypes.bool,
    size: PropTypes.oneOf([
      "mini",
      "tiny",
      "small",
      "medium",
      "large",
      "big",
      "huge",
      "massive",
      ""
    ]),
    float: PropTypes.oneOf(["left", "right", ""]),
    compact: PropTypes.bool,
    fluid: PropTypes.bool,
    attached: PropTypes.oneOf(["left", "right", "bottom", "top", ""]),
    vertical: PropTypes.bool,
    width: PropTypes.string,
    extra: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        as: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element,
          PropTypes.func
        ]).isRequired
      }).isRequired
    )
  };
  static defaultProps = {
    as: "div",
    color: "",
    labeled: false,
    basic: false,
    icon: false,
    size: "",
    float: "",
    compact: false,
    fluid: false,
    attached: "",
    vertical: false,
    width: ""
  };
  render() {
    const {
      as,
      size,
      labeled,
      color,
      basic,
      children,
      icon,
      compact,
      float,
      attached,
      fluid,
      vertical,
      width,
      extra,
      items,
      ...otherProps
    } = this.props;
    const className = `
    ${width}  
    ${size}
    ui
    ${vertical ? "vertical" : ""}
    ${attached ? attached + " attached" : "s"}
    ${compact ? "compact" : ""}
    ${basic ? "basic" : ""}
    ${color}
    ${fluid ? "fluid" : ""}
    ${float ? float + " floated" : ""}
    ${labeled ? "labeled" : ""}
    ${icon ? "icon" : ""}
    ${extra}
    buttons
    `.replace(/\s+/g, " ");

    return React.createElement(
      as,
      { className, ...otherProps },
      children,
      items &&
        items.map(({key,...otherProps}, index) => React.createElement(Button, { key:key || u4() ,...otherProps }))
    );
  }
}

export const ButtonHidden = ({ children, text }) => (
  <div className="hidden content">
    {children}
    {text}
  </div>
);
export const ButtonVisible = ({ children, text }) => (
  <div className="visible content">
    {children}
    {text}
  </div>
);
export default class Button extends Component {
  static Hidden = ButtonHidden;
  static Or = Or;
  static Group = ButtonGroup;
  static Visible = ButtonVisible;
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    text: PropTypes.string,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "positive",
      "negative",
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey",
      "black",
      "facebook",
      "twitter",
      "google",
      "vk",
      "linkedin",
      "instagram",
      "youtube",
      ""
    ]),
    animated: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["horizontal", "vertical", "fade"])
    ]),
    labeled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["left", "right"])
    ]),
    basic: PropTypes.bool,
    icon: PropTypes.bool,
    inverted: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    social: PropTypes.oneOf([
      "facebook",
      "twitter",
      "google plus",
      "vk",
      "linkedin",
      "instagram",
      "youtube",
      ""
    ]),
    size: PropTypes.oneOf([
      "mini",
      "tiny",
      "small",
      "medium",
      "large",
      "big",
      "huge",
      "massive",
      ""
    ]),
    float: PropTypes.oneOf(["left", "right", ""]),
    compact: PropTypes.bool,
    toggle: PropTypes.bool,
    fluid: PropTypes.bool,
    circular: PropTypes.bool,
    attached: PropTypes.oneOf(["left", "right", "bottom", "top", ""]),
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "button",
    text: "",
    animated: false,
    color: "",
    labeled: false,
    basic: false,
    icon: false,
    inverted: false,
    active: false,
    loading: false,
    disabled: false,
    social: "",
    size: "",
    float: "",
    compact: false,
    toggle: false,
    fluid: false,
    attached: "",
    extra: ""
  };
  render() {
    const {
      as,
      text,
      size,
      labeled,
      color,
      animated,
      basic,
      children,
      inverted,
      icon,
      active,
      disabled,
      social,
      loading,
      compact,
      float,
      attached,
      circular,
      toggle,
      fluid,
      extra,
      ...otherProps
    } = this.props;
    const className = `
    ${size}
    ui
    ${attached ? attached + " attached" : "s"}
    ${compact ? "compact" : ""}
    ${inverted ? "inverted" : ""}
    ${basic ? "basic" : ""}
    ${color}
    ${social}
    ${circular ? "circular" : ""}
    ${toggle ? "toggle" : ""}
    ${fluid ? "fluid" : ""}
    ${float ? float + " floated" : ""}
    ${
      animated
        ? (typeof animated === "string" ? animated : "") + " animated"
        : ""
    }
    ${active ? "active" : ""}
    ${loading ? "loading" : ""}
    ${disabled ? "disabled" : ""}
    ${labeled ? (typeof labeled === "string" ? labeled : "") + " labeled" : ""}
    ${icon ? "icon" : ""}
    ${extra}
    button
    `.replace(/\s+/g, " ");

    return React.createElement(
      labeled || animated || attached ? "div" : as,
      { className, tabIndex: 0, ...otherProps },
      children,
      text
    );
  }
}
