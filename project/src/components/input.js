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
    style: {},
    frontChildren:undefined,
    extraProps:{}
  };

  render() {
    const {
      children,
      placeholder,
      name,
      extra,
      style,
      state,
      disabled,
      icon,
      loading,
      readOnly,
      type,
      iconPosition,
      inverted,
      size,
      fluid,
      transparent,
      labeled,
      action,
      frontChildren,
      extraProps,
      value,
      defaultValue,
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
          type={type}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          readOnly={readOnly}
          {...extraProps}
          value={value}
          defaultValue={defaultValue}
        //   onChange={onChange}
        />
        {(typeof icon === "string" || loading) && <Icon name={icon} />}
        {children}
      </div>
    );
  }
}
