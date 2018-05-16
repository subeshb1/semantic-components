import React, { Component } from "react";

export default class ButtonGroup extends Component {
  static defaultProps = {
    icon: false,
    vertical: false,
    color: "",
    size: "",
    basic: false,
    count: "",
    attached:undefined,
  };
  render() {
    const { children, icon, vertical, color, size, basic, count,attached } = this.props;
    const className = `
        ${count}
        ${size}
        ui
        ${vertical ? "vertical" : ""}
        ${basic ? "basic" : ""}
        ${attached ? attached + " attached" : ""}
        ${color}
        ${icon ? "icon" : ""}
        buttons
        `.replace(/\s+/g, " ");
    return <div className={className}>{children}</div>;
  }
}
