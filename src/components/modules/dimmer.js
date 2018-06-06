import React, { Component } from "react";
import PropTypes from "prop-types";
import { simpleComponent } from "../lib/react-extras";

const Dimmable = ({ as, blurring, show, extraProps,...otherProps }) => {
  return React.createElement(as, {
    extra: `
      ${blurring ? "blurring" : ""}
      dimmable
      ${show ? "dimmed" : ""}
      `.replace(/\s+/g, " "),
      ...extraProps,
    ...otherProps
  });
};
Dimmable.defaultProps = {
  as:"div",
  extraProps:{}
}
const Content = simpleComponent("content");

export default class Dimmer extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string,
    page: PropTypes.bool,
    show: PropTypes.bool,
    simple: PropTypes.bool,
    inverted: PropTypes.bool,
    verticalAlign: PropTypes.oneOf(["top", "bottom", "middle"])
  };
  static Dimmable = Dimmable;
  static Content = Content;
  static defaultProps = {
    as: "div",
    extra: ""
  };
  render() {
    const {
      as,
      children,
      simple,
      inverted,
      page,
      extra,
      show,
      verticalAlign,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${page ? "page" : ""}
    ${simple ? "simple" : ""}
    ${inverted ? "inverted" : ""}
    ${verticalAlign ? verticalAlign + " aligned" : ""}
    ${show ? "active" : ""}
    ${extra}
    dimmer
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
