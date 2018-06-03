import React, { Component } from "react";

export default class Divider extends Component {
  static defaultProps = {
    horizontal: false,
    vertical: false,
    icon: "",
    text: "",
    inverted: false,
    fitted: false,
    hidden: false,
    section: false,
    clearing: false
  };
  render() {
    const {
      icon,
      text,
      horizontal,
      vertical,
      section,
      clearing,
      fitted,
      hidden,
      inverted,
      ...otherProps
    } = this.props;
    const className = `
    ui 
    ${horizontal || (icon || text) ? "horizontal" : ""}
    ${vertical ? "vertical" : ""}
    ${section ? "section" : ""}
    ${clearing ? "clearing" : ""}
    ${hidden ? "hidden" : ""}
    ${fitted ? "fitted" : ""}
    ${inverted ? "inverted" : ""}
    divider
    ${(icon || text)?"header":""}
    `.replace(/\s+/g, " ");

    return (
      <div className={className}{...otherProps}>
        {icon && <i className={`${icon} icon`} />}
        {text}
      </div>
    );
  }
}
