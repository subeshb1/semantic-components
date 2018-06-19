import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container } from "..";
import {
  widthArray,
  widthMapper,
  colorDef,
  simpleComponent,
  size
} from "../lib/react-extras";
import "../css/menu.css";
const Header = simpleComponent("header");
Header.displayName = "Menu.Header";
const Item = props => {
  const {
    active,
    as,
    color,
    text,
    children,
    extra,
    header,
    right,
    fitted,
    ...otherProps
  } = props;
  const className = `
    ${active ? "active" : ""}
    ${header ? "header" : ""}
    ${right ? "right" : ""}
    ${color ? color : ""}
    ${fitted ? fitted + " fitted" : ""}
    ${extra}
    item
    `.replace(/\s+/g, " ");

  const renderElement = React.createElement(
    as,
    { className, ...otherProps },
    children,
    text
  );
  return renderElement;
};
Item.propTypes = {
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  color: PropTypes.oneOf(colorDef),
  extra: PropTypes.string,
  header: PropTypes.bool,
  right: PropTypes.bool,
  link: PropTypes.bool,
  //TODO - in the future
  dropdown: PropTypes.bool,
  //TODO - in the future
  popup: PropTypes.bool,
  //TOD - in the future
  search: PropTypes.bool,
  active: PropTypes.bool,
  fitted: PropTypes.oneOf(["vertically", "horizontally"])
};
Item.defaultProps = {
  as: "a",
  extra: ""
};

export default class Menu extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string,
    text: PropTypes.bool,
    count: PropTypes.oneOf(widthArray),
    secondary: PropTypes.bool,
    sub: PropTypes.bool,
    right: PropTypes.bool,
    //pointing menu
    pointing: PropTypes.bool,
    //Tabular menu ot Tab
    tabular: PropTypes.bool,
    pagination: PropTypes.bool,
    //Variations
    fixed: PropTypes.oneOf(["top", "bottom", "left", "right"]),
    attached: PropTypes.oneOf(["top", "bottom", "left", "right", true]),
    color: PropTypes.oneOf(colorDef),
    inverted: PropTypes.bool,
    stackable: PropTypes.bool,
    borderless: PropTypes.bool,
    size: PropTypes.oneOf(size),
    fluid: PropTypes.bool,
    compact: PropTypes.bool,
    icon: PropTypes.bool,
    labeled: PropTypes.bool,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        as: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.element,
          PropTypes.func
        ]).isRequired
      }).isRequired
    ),
    container: PropTypes.bool,
    vertical: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  static Item = Item;
  static Header = Header;
  render() {
    const {
      as,
      sub,
      children,
      text,
      inverted,
      container,
      color,
      extra,
      secondary,
      fixed,
      attached,
      borderless,
      stackable,
      count,
      right,
      pointing,
      tabular,
      pagination,
      vertical,
      size,
      compact,
      fluid,
      items,
      labeled,
      icon,
      ...otherProps
    } = this.props;
    const className = `

    ${!sub ? "ui" : ""}
    ${size ? size : ""}
    ${sub && right ? "right" : ""}
    ${vertical ? "vertical" : ""}
    ${text ? "text" : ""}
    ${count ? widthMapper(count) + " item" : ""}
    ${secondary ? "secondary" : ""}
    ${pointing ? "pointing" : ""}
    ${tabular ? "tabular" : ""}
    ${pagination ? "pagination" : ""}
    ${fixed ? fixed + " fixed" : ""}
    ${attached ? attached + " attached" : ""}
    ${color ? color : ""}
    ${inverted ? "inverted" : ""}
    ${stackable ? "stackable" : ""}
    ${borderless ? "borderless" : ""}
    ${compact ? "compact" : ""}
    ${fluid ? "fluid" : ""}
    ${labeled ? "labeled" : ""}
    ${icon ? "icon" : ""}
    ${extra}
    
    menu
    `.replace(/\s+/g, " ");

    const mappedItems =
      items &&
      items.map((item, i) => {
        return React.createElement(Item, {
          ...item,
          key: item.key || item.id || i
        });
      });
    let child;
    if (container) {
      child = [
        <Container>
          {children}
          {mappedItems}
        </Container>
      ];
    } else {
      child = [children, mappedItems];
    }
    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      ...child
    );
    return renderElement;
  }
}
