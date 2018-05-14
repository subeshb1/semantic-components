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
    isBasic: false,
    onClick: undefined,
    state: ""
  };

  render() {
    const {
      size,
      invert,
      color,
      text,
      ficon,
      bicon,
      isBasic,
      onClick,
      state
    } = this.props;
    const inverted = invert ? "inverted" : "";
    const basic = isBasic ? "basic" : "";
    return (
      <button
        className={`
        ${size}
        ui
        ${state}
        ${inverted}
        ${color}
        ${basic}
        button
      `}
        onClick={evt => onClick && onClick(evt, state)}
      >
        {ficon && <i className={`${ficon}`}> </i>}
        {text}
        {bicon && <i className={`right ${bicon}`}> </i>}
      </button>
    );
  }
}
