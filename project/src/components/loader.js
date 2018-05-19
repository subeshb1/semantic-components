import React, { Component } from "react";

export default class Loader extends Component {
  static defaultProps = {
    size: "",
    state: "",
    inline: "",
    inverted: false,
    indeterminate:false,
  };
  render() {
    const {
      state,
      size,
      inline,
      inverted,
      content,
      children,
      indeterminate,
      
    } = this.props;
    const className = `
        ui  
        ${size}
        ${inline ? (typeof inline === "string" ? inline : "") + " inline" : ""}
        ${inverted?"inverted":""}
        ${indeterminate?"indeterminate":""}
        ${state}
        ${content||children ? "text":""}
        loader
    `.replace(/\s+/g, " ");

    return (
      <div className={className} >
        {content}
        {children}
      </div>
    );
  }
}
