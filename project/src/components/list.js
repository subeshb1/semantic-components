import React, { Component } from "react";
import PropTypes from "prop-types";

const simpleComponent = (className, defaultAs = "div") => ({
  as = defaultAs,
  ...otherProps
}) => React.createElement(as, { className, ...otherProps });
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
    )
  };

  static defaultProps = {
    as: "div",
    bulleted: false,
    ordered: false,
    nested: false,
    link: false
  };

  render() {
    const {
      as,
      bulleted,
      ordered,
      nested,
      link,
      items,
      ...otherProps
    } = this.props;
    console.log(items);

    const className = `
    ${!nested ? "ui" : ""}
    ${bulleted ? "bulleted" : ""}
    ${ordered ? "ordered" : ""}
    ${link ? "link" : ""}
    list
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      items && items.map(({ as, children }, ind) => (
        <ListItem key={ind} as={as}>{children}</ListItem>
      ))
    );
    return renderElement;
  }
}
