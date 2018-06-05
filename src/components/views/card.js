import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  simpleComponent,
  colorDef,
  widthArray,
  widthMapper
} from "../../lib/react-extras";

const Meta = ({ as, right, textAlign, ...otherProps }) =>
  React.createElement(as, {
    className: `${right ? "right floated " : ""} ${
      textAlign ? textAlign + " aligned " : ""
    }meta`,
    ...otherProps
  });
Meta.defaultProps = {
  as: "div"
};
const Content = ({ as, extra, textAlign, ...otherProps }) =>
  React.createElement(as, {
    className: `${extra ? "extra" : ""} ${
      textAlign ? textAlign + " aligned " : ""
    } content`,
    ...otherProps
  });
Content.defaultProps = {
  as: "div"
};
const Description = ({ as, right, textAlign, ...otherProps }) =>
  React.createElement(as, {
    className: `${right ? "right floated" : ""} ${
      textAlign ? textAlign + " aligned " : ""
    } description`,
    ...otherProps
  });
Description.defaultProps = {
  as: "div"
};
const Header = ({ as, extra, textAlign, ...otherProps }) =>
  React.createElement(as, {
    className: `${extra ? "extra" : ""} ${
      textAlign ? textAlign + " aligned " : ""
    } header`,
    ...otherProps
  });
Header.defaultProps = {
  as: "div"
};

class CardGroup extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    link: PropTypes.bool,
    extra: PropTypes.string,
    column: PropTypes.oneOf(widthArray),
    stackable: PropTypes.bool,
    doubling: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  render() {
    const {
      as,
      children,
      extra,
      link,
      column,
      doubling,
      stackable,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${extra}
    ${link ? "link" : ""}
    ${doubling ? "doubling" : ""}
    ${stackable ? "stackable" : ""}
    ${column ? widthMapper(column) : ""}
    cards
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}

export default class Card extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string,
    fluid: PropTypes.bool,
    centered: PropTypes.bool,
    raised: PropTypes.bool,
    link: PropTypes.bool,
    color: PropTypes.oneOf(colorDef)
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  static Header = Header;
  static Description = Description;
  static Content = Content;
  static Meta = Meta;
  static Group = CardGroup;

  render() {
    const {
      as,
      children,
      extra,
      link,
      fluid,
      raised,
      centered,
      color,
      ...otherProps
    } = this.props;
    const className = `
    ui
    ${extra}
    ${link ? "link" : ""}
    ${color}
    ${fluid ? "fluid" : ""}
    ${raised ? "raised" : ""}
    ${centered ? "centered" : ""}
    card
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
