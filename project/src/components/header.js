import React, { Component } from "react";

export default class Header extends Component {
  static Content = ({ children }) => <div className="content">{children}</div>;
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
      children,
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
      inverted
    } = this.props;
    const className = `
        ui 
        ${size}
        ${sub ? "sub" : ""}
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

    return getAs(as, className, children);
  }
}

// const h1 = ({children,className}) => <h1></h2>

function getAs(as, className, children) {
  switch (as) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    case "h6":
      return <h6 className={className}>{children}</h6>;
    default:
      return <div className={className}>{children}</div>;
  }
}
