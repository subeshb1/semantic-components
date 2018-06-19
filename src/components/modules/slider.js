import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Slider extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func
    ]),
    extra: PropTypes.string
  };
  static defaultProps = {
    as: "div",
    extra: ""
  };
  render() {
    const { as, children, extra, ...otherProps } = this.props;
    const className = `
    ${extra}
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
