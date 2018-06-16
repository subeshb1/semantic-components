import React, { Component } from "react";

export default class Loader extends Component {
  static defaultProps = {
    size: "",
    state: "",
    inline: "",
    inverted: false,
    indeterminate:false,
    extra:"",
    as:"div"
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
      extra,
      as,
      ...otherProps,      
    } = this.props;
    const className = `
        ui 
        ${extra} 
        ${size}
        ${inline ? (typeof inline === "string" ? inline : "") + " inline" : ""}
        ${inverted?"inverted":""}
        ${indeterminate?"indeterminate":""}
        ${state}
        ${content||children ? "text":""}
        loader
    `.replace(/\s+/g, " ");
    return React.createElement(as,{className,...otherProps},content,children);
   
  }
}
