import React, { Component } from "react";
import PropTypes from "prop-types";

export class FormField extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    inline: PropTypes.bool,
    width: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    width: "",
    required: false,
    error: false
  };
  render() {
    const { as, children, width, inline, required, error } = this.props;
    const className = `
    ${required ? "required" : ""}
    ${inline ? "inline" : ""}
    ${width ? width + " wide" : ""}
    ${error ? "error" : ""}
    field
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(as, { className }, children);
    return renderElement;
  }
}
export class FormGroup extends Component {
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    inline: PropTypes.bool,
    width: PropTypes.string,
    required: PropTypes.bool
  };
  static defaultProps = {
    as: "div",
    widths: ""
  };
  render() {
    const { as, children, widths, inline } = this.props;
    const className = `
    ${inline ? "inline" : ""}
    ${widths ? widths : ""}
    fields
    `.replace(/\s+/g, " ");

    const renderElement = React.createElement(as, { className }, children);
    return renderElement;
  }
}

export default class Form extends Component {
  static Field = FormField;
  static Group = FormGroup;
  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
  static defaultProps = {
    as: "form"
  };
  render() {
    const { as, children, ...otherProps } = this.props;
    const className = `
    ui 
    form
    `.replace(/\s+/g, " ");
    const renderElement = React.createElement(
      as,
      { className, ...otherProps },
      children
    );
    return renderElement;
  }
}
