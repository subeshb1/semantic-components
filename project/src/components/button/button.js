import React, { Component } from "react";

const or = <div class="or" />;
export default class Button extends Component {
  static propTypes = {};
  static Or() {
    return or;
  }
  static defaultProps = {
    //color of the button
    color: "",
    // size of the button
    size: "",
    //make the button color invert
    invert: false,
    // pass text as a prop
    text: undefined,
    // The front icon in the button
    ficon: undefined,
    // The back Icon in the button
    bicon: undefined,
    // Toogle basic property
    basic: false,
    // define the action to perform on button click
    onClick: undefined,
    // State - Active, Disabled, Loading
    state: "",
    // circular button
    circular: false,
    // is required for circle buttons
    micon: "",
    // To make compact
    compact: false,
    //To make a labeled Icon Button
    labeledIcon: false,
    leftFloated: false,
    rightFloated: false,
    fluid: false,
    animate: undefined,
    htext: "",
    labeled: undefined,
    href: "#",
    pointed: false,
    attached: undefined
  };

  render() {
    const {
      size,
      invert,
      color,
      text,
      ficon,
      bicon,
      basic,
      onClick,
      state,
      circular,
      micon,
      children,
      compact,
      labeledIcon,
      leftFloated,
      rightFloated,
      fluid,
      animate,
      htext,
      labeled,
      href,
      pointed,
      attached
    } = this.props;
    const inverted = invert ? "inverted" : "";
    const basicS = basic ? "basic" : "";
    const circle = circular ? "circular" : "";
    const compactS = compact ? "compact" : "";
    const leftFloatedS = leftFloated ? "left floated" : "";
    const rightFloatedS = rightFloated ? "right floated" : "";
    const fluidS = fluid ? "fluid" : "";
    const labeledIconS = labeledIcon
      ? bicon
        ? "right labeled icon"
        : "labeled icon"
      : "";
    const animateS = animate
      ? typeof animate === "string"
        ? animate + " animated"
        : "animated"
      : "";
    const className = `
    ${size}
    ${circle}
    ${fluidS}
    ui
    ${leftFloatedS}
    ${rightFloatedS}
    ${labeledIconS}
    ${attached ? attached + " attached" : ""}
    ${compactS}
    ${animateS}
    ${state}
    ${micon && "icon"}
    ${inverted}
    ${color}
    ${basicS}
    button
  `.replace(/\s+/g, " ");

    if (animate) {
      return (
        <div
          className={className}
          tabIndex="0"
          onClick={evt => onClick && onClick(evt, state)}
        >
          <div className="visible content">
            {ficon && <i className={`${ficon} icon`}> </i>}
            {text ? text : ""}
          </div>
          <div className="hidden content">
            {bicon && <i className={`${bicon} icon`}> </i>}
            {htext ? htext : ""}
          </div>
        </div>
      );
    } else if (labeled) {
      return !children ? (
        <div className={`ui ${labeled} labeled button`} tabIndex="0">
          {labeled === "left" && (
            <a
              className={`ui ${color} ${
                pointed ? "right pointing" : ""
              } basic label`}
              href={href}
            >
              {htext}
            </a>
          )}
          <div
            className={`ui ${color} button`}
            onClick={evt => onClick && onClick(evt, state)}
          >
            <i className={`${ficon} icon`} /> {text}
          </div>
          {labeled !== "left" && (
            <a
              className={`ui ${color} ${
                pointed ? "left pointing" : ""
              } basic label`}
              href={href}
            >
              {htext}
            </a>
          )}
        </div>
      ) : (
        <div
          className={`ui ${labeled} labeled button`}
          tabIndex="0"
          onClick={evt => onClick && onClick(evt, state)}
        >
          {children}
        </div>
      );
    } else {
      return (
        <button
          className={className}
          onClick={evt => onClick && onClick(evt, state)}
        >
          {(micon || ficon) && <i className={`${micon || ficon} icon`}> </i>}
          {text ? text : ""}
          {bicon && <i className={`right ${bicon} icon`}> </i>}
          {children}
        </button>
      );
    }
  }
}
