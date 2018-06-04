import React, { Component } from "react";
import PropTypes from "prop-types";

export class GridColumn extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    color: PropTypes.oneOf([
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
      "black"
    ]),
    width: PropTypes.oneOf([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen"
    ]),
    float: PropTypes.oneOf(["right", "left"]),
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"])
  };
  static defaultProps = {
    as: "div"
  };
  render() {
    const { as, children, color, width, float,textAlign, ...otherProps } = this.props;
    const className = `
    ${color}
    ${width ? width + " wide" : ""}
    ${float ? float + " floated" : ""}
    ${
      textAlign
        ? textAlign + (typeof textAlign !== "justified" ? " aligned" : "")
        : ""
    }
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
    color: PropTypes.oneOf([
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
      "black"
    ]),
    column: PropTypes.oneOf([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen"
    ]),
    stretched: PropTypes.bool,
    centered: PropTypes.bool,
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"]),
    verticalAlign: PropTypes.oneOf(['middle',"top",'bottom']),
  };
  static defaultProps = {
    as: "div"
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
      textAlign,
      ...otherProps
    } = this.props;
    const className = `
    ${color}
    ${stretched ? "stretched" : ""}
    ${column ? column + " column" : ""}
    ${verticalAlign?verticalAlign+" aligned":""}
    ${centered?"centered":""}
    ${
      textAlign
        ? textAlign + (typeof textAlign !== "justified" ? " aligned" : "")
        : ""
    }
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
    column: PropTypes.oneOf([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen"
    ]),
    divided: PropTypes.oneOf([true, "vertically", "horizontally"]),
    celled: PropTypes.oneOf([true, "internally"]),
    equal: PropTypes.bool,
    padded: PropTypes.oneOf([true, "vertically", "horizontally"]),
    relaxed: PropTypes.oneOf([true, "very"]),
    centered: PropTypes.bool,
    textAlign: PropTypes.oneOf(["center", "left", "right", "justified"]),
    verticalAlign: PropTypes.oneOf(['middle',"top",'bottom']),
    stackable: PropTypes.bool,
  };
  static defaultProps = {
    as: "div"
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
      textAlign,
      stackable,
      centered,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${column ? column + " column" : ""}
    ${stackable?"stackable":""}
    ${divided ? (typeof divided === "string" ? divided : "") + " divided" : ""}
    ${verticalAlign?verticalAlign+" aligned":""}
    ${celled ? (typeof celled === "string" ? celled : "") + " celled" : ""}
    ${equal ? "equal width" : ""}
    ${padded ? (typeof padded === "string" ? padded : "") + " padded" : ""}
    ${relaxed ? (typeof relaxed === "string" ? relaxed : "") + " relaxed" : ""}
    ${
      textAlign
        ? textAlign + (typeof textAlign !== "justified" ? " aligned" : "")
        : ""
    }
    ${centered ? "centered" : ""}
    grid
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
