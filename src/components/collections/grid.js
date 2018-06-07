import React, { Component } from "react";
import PropTypes from "prop-types";

import { colorDef, widthArray, widthMapper } from "../lib/react-extras";

export class GridColumn extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    color: PropTypes.oneOf(colorDef),
    width: PropTypes.oneOf(widthArray),
    float: PropTypes.oneOf(["right", "left"]),
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"]),
    visibility: PropTypes.oneOf([
      "large screen",
      "computer",
      "mobile",
      "tablet"
    ]),
    mobile: PropTypes.oneOf(widthArray),
    tablet: PropTypes.oneOf(widthArray),
    computer: PropTypes.oneOf(widthArray),
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  render() {
    const {
      as,
      children,
      color,
      width,
      float,
      extra,
      visibility,
      textAlign,
      mobile,
      tablet,
      computer,
      ...otherProps
    } = this.props;
    const className = `
    ${color?color:""}
    ${width ? width + " wide" : ""}
    ${float ? float + " floated" : ""}
    ${visibility ? visibility + " only" : ""}
    ${mobile ? widthMapper(mobile) + " wide mobile" : ""}
    ${tablet ? widthMapper(tablet) + " wide tablet" : ""}
    ${computer ? widthMapper(computer) + " wide computer" : ""}
    ${
      textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : ""
    }
    ${extra}
    column
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}

export class GridRow extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    color: PropTypes.oneOf(colorDef),
    column: PropTypes.oneOf(widthArray),
    stretched: PropTypes.bool,
    centered: PropTypes.bool,
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"]),
    verticalAlign: PropTypes.oneOf(["middle", "top", "bottom"]),
    visibility: PropTypes.oneOf([
      "large screen",
      "computer",
      "mobile",
      "tablet"
    ]),
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "div",
    extra:"",
  };
  render() {
    const {
      as,
      children,
      color,
      column,
      stretched,
      verticalAlign,
      centered,
      extra,
      textAlign,
      visibility,
      ...otherProps
    } = this.props;
    const className = `
    ${color?color:""}
    ${stretched ? "stretched" : ""}
    ${column ? widthMapper(column) + " column" : ""}
    ${verticalAlign ? verticalAlign + " aligned" : ""}
    ${centered ? "centered" : ""}
    ${visibility ? visibility + " only" : ""}
    ${
      textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : ""
    }
    ${extra}
    row
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}

export default class Grid extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    column: PropTypes.oneOf(widthArray),
    divided: PropTypes.oneOf([true, "vertically", "horizontally"]),
    celled: PropTypes.oneOf([true, "internally"]),
    equal: PropTypes.bool,
    padded: PropTypes.oneOf([true, "vertically", "horizontally"]),
    relaxed: PropTypes.oneOf([true, "very"]),
    centered: PropTypes.bool,
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"]),
    verticalAlign: PropTypes.oneOf(["middle", "top", "bottom"]),
    stackable: PropTypes.bool,
    doubling: PropTypes.bool,
    reversed: PropTypes.oneOf([
      "computer",
      "mobile",
      "tablet",
      "computer vertically",
      "mobile vertically",
      "tablet vertically"
    ]),
    visibility: PropTypes.oneOf([
      "large screen",
      "computer",
      "mobile",
      "tablet"
    ]),
    container: PropTypes.bool,
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "div",
    extra:""
  };

  static Column = GridColumn;
  static Row = GridRow;
  render() {
    const {
      as,
      relaxed,
      verticalAlign,
      children,
      column,
      divided,
      celled,
      padded,
      equal,
      reversed,
      textAlign,
      stackable,
      centered,
      container,
      extra,
      doubling,
      visibility,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${column ? widthMapper(column) + " column" : ""}
    ${stackable ? "stackable" : ""}
    ${divided ? (typeof divided === "string" ? divided : "") + " divided" : ""}
    ${verticalAlign ? verticalAlign + " aligned" : ""}
    ${celled ? (typeof celled === "string" ? celled : "") + " celled" : ""}
    ${equal ? "equal width" : ""}
    ${padded ? (typeof padded === "string" ? padded : "") + " padded" : ""}
    ${relaxed ? (typeof relaxed === "string" ? relaxed : "") + " relaxed" : ""}
    ${
      textAlign ? textAlign + (textAlign !== "justified" ? " aligned" : "") : ""
    }
    ${centered ? "centered" : ""}
    ${doubling ? "doubling" : ""}
    ${reversed ? reversed + " reversed" : ""}
    ${visibility ? visibility + " only" : ""}
    ${extra}
    grid
    ${container ? "container" : ""}
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
