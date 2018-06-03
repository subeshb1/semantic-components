import React, { Component } from "react";
import { simpleComponent } from "../lib/react-extras";

export const HeaderContent = simpleComponent("content");
HeaderContent.displayName = "HeaderContent";
export default class Header extends Component {
  static Content = HeaderContent;
  static defaultProps = {
    as: "h4",
    size: "",
    sub: false,
    icon: false,
    extra: "",
    disabled: false,
    dividing: false,
    block: false,
    inverted: false,
    color: "",
    textAlign: "",
    float: "",
    attached: ""
  };
  render() {
    const {
      as,
      size,
      sub,
      icon,
      extra,
      disabled,
      dividing,
      block,
      color,
      textAlign,
      float,
      attached,
      inverted,
      ...otherProps
    } = this.props;
    const className = `
        ${sub?"sub":"ui"}
        ${size}
        ${icon ? "icon" : ""}
        ${extra}
        ${disabled ? "disabled" : ""}
        ${dividing ? "dividing" : ""}
        ${block ? "block" : ""}
        ${color}
        ${
          textAlign
            ? textAlign === "justified"
              ? textAlign
              : textAlign + " aligned"
            : ""
        }
        ${float ? float + " floated" : ""}
        ${attached ? attached + " attached" : ""}
        ${inverted ? inverted + " inverted" : ""}
        header
    `.replace(/\s+/g, " ");

    return React.createElement(as,{className,...otherProps});
  }
}

// const h1 = ({children,className}) => <h1></h2>

