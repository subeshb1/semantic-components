import React, { Component } from "react";
import PropTypes from "prop-types";
import u4 from "uniqid";
import { simpleComponent } from "../lib/react-extras";

//List Item Component
export class ListItem extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    active: PropTypes.bool
  };

  static defaultProps = {
    as: "div",
    active: false
  };

  render() {
    const { as, active, ...otherProps } = this.props;
    const className = `
       ${active ? "active" : ""}
       item
        `.replace(/\s+/g, " ");

    const renderElement = React.createElement(as, { className, ...otherProps });
    return renderElement;
  }
}

export default class List extends Component {
  static Item = ListItem;
  static Description = simpleComponent("description");
  static Content = simpleComponent("content");
  static Header = simpleComponent("header");

  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    bulleted: PropTypes.bool,
    ordered: PropTypes.bool,
    nested: PropTypes.bool,
    link: PropTypes.bool,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        as: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
          .isRequired
      }).isRequired
    ),
    horizontal: PropTypes.bool,
    inverted: PropTypes.bool,
    selection: PropTypes.bool,
    animated: PropTypes.bool,
    relaxed: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    celled: PropTypes.bool,
    size: PropTypes.oneOf([
      "tiny",
      "small",
      "mini",
      "large",
      "big",
      "huge",
      "massive",
      ""
    ]),
    divided: PropTypes.bool,
    extra: PropTypes.string,
    aligned: PropTypes.oneOf(["bottom", "top", "middle", ""])
  };

  static defaultProps = {
    as: "div",
    bulleted: false,
    ordered: false,
    nested: false,
    link: false,
    horizontal: false,
    inverted: false,
    selection: false,
    animated: false,
    relaxed: false,
    celled: false,
    size: "",
    divided: false,
    extra: "",
    aligned: ""
  };

  render() {
    const {
      as,
      bulleted,
      ordered,
      nested,
      link,
      items,
      children,
      horizontal,
      inverted,
      selection,
      animated,
      relaxed,
      celled,
      size,
      divided,
      extra,
      aligned,
      ...otherProps
    } = this.props;

    const className = `
    ${!nested ? "ui" : ""}
    ${size}
    ${extra}
    ${aligned ? aligned + " aligned" : ""}
    ${inverted ? "inverted" : ""}
    ${celled ? "celled" : ""}
    ${horizontal ? "horizontal" : ""}
    ${selection ? "selection" : ""}
    ${animated ? "animated" : ""}
    ${relaxed ? (typeof relaxed === "string" ? relaxed : "") + " relaxed" : ""}
    ${bulleted ? "bulleted" : ""}
    ${ordered ? "ordered" : ""}
    ${link ? "link" : ""}
    ${divided ? "divided" : ""}
    list
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      items &&
        items.map(({ children, id, ...others }) =>
          React.createElement(
            ListItem,
            { ...others, key: id || u4() },
            children
          )
        ),
      children
    );
    return renderElement;
  }
}
// TO-DO -- Add reimplementation for List.Content