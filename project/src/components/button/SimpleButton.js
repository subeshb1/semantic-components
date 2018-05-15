import React, { Component } from "react";

export default class StandardButton extends Component {
  static propTypes = {};

  static defaultProps = {
    color: "",
    size: "",
    invert: false,
    text: undefined,
    icon: undefined,
    ficon: undefined,
    bicon: undefined,
    basic: false,
    onClick: undefined,
    state: "",
    circular: false
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
      children
    } = this.props;
    const inverted = invert ? "inverted" : "";
    const basicS = basic ? "basic" : "";
    const circle = circular ? "circular" : "";
    return (
      <button
        className={`
        ${size}
        ${circle}
        ui
        ${state}
        ${micon && "icon"}
        ${inverted}
        ${color}
        ${basicS}
        button
      `}
        onClick={evt => onClick && onClick(evt, state)}
      >
        {(micon || ficon) && <i className={`${micon || ficon}`}> </i>}
        {text ? text : ""}
        {bicon && <i className={`right ${bicon}`}> </i>}
        {children}
      </button>
    );
  }
}
