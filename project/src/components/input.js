import React, { Component } from "react";
import "../Input.css";
import Icon from "./icon";

export default class Input extends Component {
  static defaultProps = {
    state: "", //States can be focus,loading,disabled,error,warning,success,
    disabled: false, //To make the input disabled
    type: "text",
    iconPosition: "",
    size: "",
    fluid: false,
    transparent: false,
    action: "",
    labeled: "",
    //Extras
    extra: "",
    frontChildren: undefined,
    style: {}
  };

  render() {
    const {
      children,
      extra,
      state,
      disabled,
      icon,
      loading,
      readOnly,
      iconPosition,
      inverted,
      size,
      fluid,
      transparent,
      labeled,
      action,
      frontChildren,
      style,
      ...otherProps
    } = this.props;
    const className = `
        ui
        ${size}
        ${state}
        ${disabled ? "disabled" : ""}
        ${transparent ? "transparent" : ""}
        ${fluid ? "fluid" : ""}
        ${extra}
        
        ${inverted ? "inverted" : ""}
        ${
          labeled
            ? (typeof labeled === "string" ? labeled : "") + " labeled"
            : ""
        }
        ${action ? (typeof action === "string" ? action : "") + " action" : ""}
        ${iconPosition}
        ${loading || icon ? "icon" : ""}
        input
        ${
          loading
            ? (typeof loading === "string" ? loading : "") + " loading"
            : ""
        }
        `.replace(/\s+/g, " ");
    return (
      <div className={className} style={style}>
        {frontChildren}
        <input
          disabled={disabled}
          readOnly={readOnly}
          {...otherProps}
          //   onChange={onChange}
        />
        {(typeof icon === "string" || loading) && <Icon name={icon} />}
        {children}
      </div>
    );
  }
}
