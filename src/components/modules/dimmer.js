import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Dimmer extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string,
    page: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  render() {
    const { as, children, page, extra, ...otherProps } = this.props;
    const className = `
    ${page ? "page" : ""}
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
